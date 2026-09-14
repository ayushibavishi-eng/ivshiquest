import { getCompleteLesson } from "@/content/lessons";
import { getGrammarSiblingCatalogueIds } from "@/content/grammar";
import {
  addUniqueEdge,
  type KnowledgeTreeCluster,
  type KnowledgeTreeConceptNode,
  type KnowledgeTreeDomainBranch,
  type KnowledgeTreeEdge,
  type KnowledgeTreeGraph,
} from "@/domain/knowledge-tree";
import type { Subject } from "@/domain/types";
import {
  DEFAULT_CURRICULUM_ID,
  isCurriculumGrade,
  type CurriculumId,
} from "@/domain/curriculum";
import {
  filterTopicsForGrade,
  getCurriculumWorldsForSubject,
  getWorldPathForGrade,
} from "@/services/curriculum";

function uniqueIds(ids: string[]) {
  return [...new Set(ids.filter(Boolean))];
}

export function getKnowledgeTreeGraph(
  subject: Subject,
  grade: number,
  curriculumId: CurriculumId = DEFAULT_CURRICULUM_ID,
): KnowledgeTreeGraph {
  const worlds = getCurriculumWorldsForSubject(subject, grade, curriculumId);
  const concepts: KnowledgeTreeConceptNode[] = [];
  const conceptIds = new Set<string>();
  const edges: KnowledgeTreeEdge[] = [];
  const clusters: KnowledgeTreeCluster[] = [];
  const domains: KnowledgeTreeDomainBranch[] = [];
  const domainOrder: string[] = [];
  const domainClusters = new Map<string, string[]>();

  for (const world of worlds) {
    const visibleConcepts = getWorldPathForGrade(world, grade);
    if (visibleConcepts.length === 0) {
      continue;
    }

    const domainLabel = world.category ?? "Learning worlds";
    if (!domainClusters.has(domainLabel)) {
      domainClusters.set(domainLabel, []);
      domainOrder.push(domainLabel);
    }

    const visibleIds = new Set(visibleConcepts.map((concept) => concept.id));
    const topics = filterTopicsForGrade(world.topics, grade);
    const usedIds = new Set<string>();

    const pushCluster = (
      cluster: KnowledgeTreeCluster,
      clusterConcepts: typeof visibleConcepts,
    ) => {
      if (clusterConcepts.length === 0) {
        return;
      }

      clusters.push(cluster);
      domainClusters.get(domainLabel)?.push(cluster.id);

      for (const concept of clusterConcepts) {
        if (conceptIds.has(concept.id)) {
          continue;
        }

        const lesson = getCompleteLesson(concept.id, grade);
        const prerequisiteIds = uniqueIds([
          ...(concept.prerequisites ?? []),
          ...(lesson?.prerequisites ?? []),
        ]);
        const relatedFromLesson = uniqueIds([
          ...(lesson?.nextConceptIds ?? []),
          ...(lesson?.coveredSkillIds ?? []),
          ...(lesson && lesson.conceptId !== concept.id ? [lesson.conceptId] : []),
          ...(subject === "english" && isCurriculumGrade(grade)
            ? getGrammarSiblingCatalogueIds(concept.id, grade)
            : []),
        ]);

        concepts.push({
          id: concept.id,
          title: lesson?.title ?? concept.title,
          hook: concept.hook,
          explainer: concept.explainer,
          subjectId: concept.subjectId,
          domainLabel,
          worldId: world.id,
          worldTitle: world.title,
          topicId:
            cluster.kind === "topic"
              ? cluster.id
              : concept.parentId !== world.id
                ? concept.parentId
                : undefined,
          topicTitle: cluster.kind === "topic" ? cluster.title : undefined,
          grades: concept.grades,
          prerequisiteIds,
          relatedIds: relatedFromLesson,
          skillTitles: concept.skills.map((skill) => skill.title),
          hasReadyExperience: Boolean(concept.experience || lesson),
        });
        conceptIds.add(concept.id);

        addUniqueEdge(edges, {
          fromId: cluster.id,
          toId: concept.id,
          kind: "parent",
        });

        for (const prerequisiteId of prerequisiteIds) {
          if (visibleIds.has(prerequisiteId) && prerequisiteId !== concept.id) {
            addUniqueEdge(edges, {
              fromId: prerequisiteId,
              toId: concept.id,
              kind: "prerequisite",
            });
          }
        }
      }

      for (let index = 0; index < cluster.conceptIds.length - 1; index += 1) {
        const fromId = cluster.conceptIds[index];
        const toId = cluster.conceptIds[index + 1];
        if (!fromId || !toId) {
          continue;
        }
        const alreadyLinked = edges.some(
          (edge) =>
            (edge.fromId === fromId && edge.toId === toId) ||
            (edge.fromId === toId && edge.toId === fromId),
        );
        if (!alreadyLinked) {
          addUniqueEdge(edges, {
            fromId,
            toId,
            kind: "related",
          });
        }
      }

      for (const concept of clusterConcepts) {
        const lesson = getCompleteLesson(concept.id, grade);
        for (const nextId of lesson?.nextConceptIds ?? []) {
          if (!visibleIds.has(nextId) || nextId === concept.id) {
            continue;
          }
          const alreadyLinked = edges.some(
            (edge) =>
              (edge.fromId === concept.id && edge.toId === nextId) ||
              (edge.fromId === nextId && edge.toId === concept.id),
          );
          if (!alreadyLinked) {
            addUniqueEdge(edges, {
              fromId: concept.id,
              toId: nextId,
              kind: "related",
            });
          }
        }
      }
    };

    for (const topic of topics) {
      const topicConcepts = visibleConcepts.filter(
        (concept) => concept.parentId === topic.id,
      );
      topicConcepts.forEach((concept) => usedIds.add(concept.id));
      pushCluster(
        {
          id: topic.id,
          kind: "topic",
          title: topic.title,
          hook: topic.hook,
          worldId: world.id,
          worldTitle: world.title,
          conceptIds: topicConcepts.map((concept) => concept.id),
        },
        topicConcepts,
      );
    }

    const directConcepts = visibleConcepts.filter(
      (concept) => !usedIds.has(concept.id),
    );
    pushCluster(
      {
        id: world.id,
        kind: "world",
        title: world.title,
        hook: world.hook,
        worldId: world.id,
        worldTitle: world.title,
        conceptIds: directConcepts.map((concept) => concept.id),
      },
      directConcepts,
    );
  }

  for (const label of domainOrder) {
    const clusterIds = domainClusters.get(label) ?? [];
    if (clusterIds.length > 0) {
      domains.push({ label, clusterIds });
    }
  }

  const relatedExtra = new Map<string, string[]>();
  for (const edge of edges) {
    if (edge.kind !== "related") {
      continue;
    }
    const current = relatedExtra.get(edge.fromId) ?? [];
    current.push(edge.toId);
    relatedExtra.set(edge.fromId, current);
  }
  for (const concept of concepts) {
    concept.relatedIds = uniqueIds([
      ...concept.relatedIds,
      ...(relatedExtra.get(concept.id) ?? []),
    ]);
  }

  return {
    grade,
    subject,
    concepts,
    edges,
    domains,
    clusters,
  };
}

export function findKnowledgeTreeConcept(
  graph: KnowledgeTreeGraph,
  conceptId: string,
): KnowledgeTreeConceptNode | undefined {
  return graph.concepts.find((concept) => concept.id === conceptId);
}
