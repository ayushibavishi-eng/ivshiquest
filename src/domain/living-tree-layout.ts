import type { Subject } from "./types";
import { SUBJECT_LABELS, SUBJECTS } from "./types";
import {
  conceptPrerequisiteDepth,
  cubicPoint,
  type KnowledgeTreeCubic,
  type KnowledgeTreeFoliage,
  type KnowledgeTreeGraph,
  type KnowledgeTreeLayout,
  type KnowledgeTreeLeaf,
  type KnowledgeTreeMote,
  type KnowledgeTreeNodeState,
  type KnowledgeTreeOrnament,
  type KnowledgeTreePlacedLabel,
  type KnowledgeTreePoint,
  type KnowledgeTreeSubjectLabel,
  type KnowledgeTreeWood,
} from "./knowledge-tree";

const PAD = 150;
const LEAF_MIN_DIST = 20;
const MAX_TWIGS_PER_ARM = 8;
const FOLIAGE_GREENS = [
  "#2c4a38",
  "#3a5f45",
  "#4a7354",
  "#5d8a68",
  "#6f9a72",
  "#86ad80",
  "#9cbe92",
  "#b5d0a4",
] as const;

type MagicalLabelMode = "overview" | "domains" | "topics" | "concepts";

function hash01(value: string): number {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return ((hash >>> 0) % 1000) / 1000;
}

function quantize(value: number, places = 4): number {
  const factor = 10 ** places;
  return Math.round(value * factor) / factor;
}

function quantizePoint(point: KnowledgeTreePoint): KnowledgeTreePoint {
  return { x: quantize(point.x), y: quantize(point.y) };
}

function add(
  a: KnowledgeTreePoint,
  b: KnowledgeTreePoint,
): KnowledgeTreePoint {
  return { x: a.x + b.x, y: a.y + b.y };
}

function scale(
  point: KnowledgeTreePoint,
  amount: number,
): KnowledgeTreePoint {
  return { x: point.x * amount, y: point.y * amount };
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function lengthOf(point: KnowledgeTreePoint) {
  const length = Math.sqrt(point.x * point.x + point.y * point.y);
  return length > 0 ? length : 1;
}

function normalize(point: KnowledgeTreePoint): KnowledgeTreePoint {
  const length = lengthOf(point);
  return { x: point.x / length, y: point.y / length };
}

function polar(degrees: number, distance: number): KnowledgeTreePoint {
  const radians = (degrees * Math.PI) / 180;
  return {
    x: Math.cos(radians) * distance,
    y: Math.sin(radians) * distance,
  };
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function towardCanopy(degrees: number, fan: number) {
  return clamp(lerp(degrees, -92, 0.38) + fan, -168, -20);
}

function organicCubic(
  origin: KnowledgeTreePoint,
  degrees: number,
  distance: number,
  seed: string,
): KnowledgeTreeCubic {
  const sway = (hash01(seed) - 0.5) * 42;
  const lift = (hash01(`${seed}:lift`) - 0.38) * 48;
  const curl = (hash01(`${seed}:curl`) - 0.5) * 22;
  const tip = add(origin, polar(degrees + curl * 0.25, distance));
  const mid = add(origin, polar(degrees + sway * 0.22, distance * 0.5));
  return {
    p0: origin,
    p1: add(origin, polar(degrees + sway * 0.55, distance * 0.26)),
    p2: add(mid, { x: lift * 0.18, y: -Math.abs(lift) * 0.42 }),
    p3: add(tip, { x: sway * 0.1, y: lift * 0.06 }),
  };
}

function pickGreen(seed: string, offset = 0) {
  const index =
    (Math.floor(hash01(seed) * FOLIAGE_GREENS.length) + offset) %
    FOLIAGE_GREENS.length;
  return FOLIAGE_GREENS[index] ?? "#6f9a72";
}

function pushCloud(
  foliage: KnowledgeTreeFoliage[],
  input: {
    id: string;
    origin: KnowledgeTreePoint;
    seed: string;
    count: number;
    radius: number;
    layer: "crown" | "cluster";
    subjectId?: Subject;
    domainLabel?: string;
    clusterId?: string;
  },
) {
  for (let index = 0; index < input.count; index += 1) {
    const seed = `${input.seed}:${String(index)}`;
    const reach = input.radius * (0.28 + hash01(`${seed}:r`) * 0.82);
    const offset = polar(
      -180 + hash01(`${seed}:a`) * 220,
      reach,
    );
    const rx = input.radius * (0.42 + hash01(`${seed}:rx`) * 0.55);
    const ry = rx * (0.62 + hash01(`${seed}:ry`) * 0.32);
    foliage.push({
      id: `${input.id}:${String(index)}`,
      x: input.origin.x + offset.x,
      y: input.origin.y + offset.y - input.radius * 0.12,
      rx,
      ry,
      rotation: (hash01(`${seed}:rot`) - 0.5) * 50,
      fill: pickGreen(seed, index),
      opacity: input.layer === "crown" ? 0.78 + hash01(`${seed}:o`) * 0.16 : 0.62 + hash01(`${seed}:o`) * 0.22,
      layer: input.layer,
      subjectId: input.subjectId,
      domainLabel: input.domainLabel,
      clusterId: input.clusterId,
    });
  }
}

function chunkIds(ids: string[], size: number): string[][] {
  const chunks: string[][] = [];
  for (let index = 0; index < ids.length; index += size) {
    chunks.push(ids.slice(index, index + size));
  }
  return chunks.length > 0 ? chunks : [[]];
}

function cubicSamples(cubic: KnowledgeTreeCubic): KnowledgeTreePoint[] {
  return [0, 0.25, 0.5, 0.75, 1].map((t) => cubicPoint(cubic, t));
}

const SUBJECT_GROWTH: Record<
  Subject,
  { t: number; degrees: number; length: number; startWidth: number; endWidth: number }
> = {
  math: { t: 0.4, degrees: -140, length: 0.92, startWidth: 40, endWidth: 16 },
  science: { t: 0.66, degrees: -94, length: 0.86, startWidth: 38, endWidth: 15 },
  english: { t: 0.48, degrees: -46, length: 0.94, startWidth: 39, endWidth: 16 },
};

export function layoutMagicalKnowledgeTree(
  graphs: KnowledgeTreeGraph[],
): KnowledgeTreeLayout {
  const ordered = SUBJECTS.map((subject) =>
    graphs.find((graph) => graph.subject === subject),
  ).filter((graph): graph is KnowledgeTreeGraph => Boolean(graph));

  const wood: KnowledgeTreeWood[] = [];
  const leaves: KnowledgeTreeLeaf[] = [];
  const foliage: KnowledgeTreeFoliage[] = [];
  const ornaments: KnowledgeTreeOrnament[] = [];
  const motes: KnowledgeTreeMote[] = [];
  const subjectLabels: KnowledgeTreeSubjectLabel[] = [];
  const domainLabels: KnowledgeTreeLayout["domainLabels"] = [];

  const trunk: KnowledgeTreeCubic = {
    p0: { x: 0, y: 12 },
    p1: { x: -56, y: -196 },
    p2: { x: 48, y: -372 },
    p3: { x: 4, y: -560 },
  };
  wood.push({
    id: "trunk:knowledge",
    kind: "trunk",
    cubic: trunk,
    width: 96,
    startWidth: 118,
    endWidth: 34,
    label: "Knowledge",
    labelPoint: cubicPoint(trunk, 0.38),
  });

  const buttresses = [
    { degrees: 152, length: 102, width: 44, x: -10 },
    { degrees: 126, length: 78, width: 30, x: -6 },
    { degrees: 24, length: 98, width: 42, x: 12 },
    { degrees: 54, length: 74, width: 28, x: 8 },
  ] as const;
  buttresses.forEach((spec, index) => {
    const cubic = organicCubic(
      { x: spec.x, y: 10 },
      spec.degrees,
      spec.length,
      `buttress:${String(index)}`,
    );
    wood.push({
      id: `buttress:${String(index)}`,
      kind: "root",
      cubic,
      width: spec.width,
      startWidth: spec.width + 8,
      endWidth: spec.width * 0.32,
      label: "Foundations",
      labelPoint: cubicPoint(cubic, 0.7),
    });
  });

  const rootSpecs = [
    { degrees: 108, length: 196, width: 20 },
    { degrees: 122, length: 248, width: 24 },
    { degrees: 138, length: 226, width: 18 },
    { degrees: 154, length: 204, width: 16 },
    { degrees: 170, length: 176, width: 14 },
    { degrees: 186, length: 148, width: 12 },
    { degrees: 18, length: 188, width: 19 },
    { degrees: 36, length: 242, width: 23 },
    { degrees: 52, length: 214, width: 17 },
    { degrees: 68, length: 186, width: 15 },
    { degrees: 84, length: 158, width: 13 },
  ] as const;

  rootSpecs.forEach((spec, index) => {
    const cubic = organicCubic(
      { x: (index - 5) * 5.5, y: 14 },
      spec.degrees,
      spec.length,
      `root:${String(index)}`,
    );
    wood.push({
      id: `root:${String(index)}`,
      kind: "root",
      cubic,
      width: spec.width,
      startWidth: spec.width + 6,
      endWidth: spec.width * 0.34,
      label: "Foundations",
      labelPoint: cubicPoint(cubic, 0.72),
    });
    const sproutCount = 2 + Math.floor(hash01(`rootlet:${String(index)}`) * 2);
    for (let sprout = 0; sprout < sproutCount; sprout += 1) {
      const t = 0.34 + sprout * 0.2;
      const fork = cubicPoint(cubic, t);
      const side = sprout % 2 === 0 ? -22 : 20;
      const child = organicCubic(
        fork,
        spec.degrees + side,
        spec.length * (0.28 + hash01(`rootlet:${String(index)}:${String(sprout)}`) * 0.22),
        `rootlet:${String(index)}:${String(sprout)}`,
      );
      wood.push({
        id: `rootlet:${String(index)}:${String(sprout)}`,
        kind: "root",
        cubic: child,
        width: spec.width * 0.4,
        startWidth: spec.width * 0.46,
        endWidth: 2.2,
        label: "Foundations",
        labelPoint: cubicPoint(child, 0.7),
      });
    }
  });

  for (const t of [0.12, 0.28, 0.46, 0.64]) {
    const point = cubicPoint(trunk, t);
    ornaments.push({
      id: `moss:trunk:${t.toFixed(2)}`,
      kind: "moss",
      x: point.x + (hash01(`mossx:${t}`) - 0.5) * 18,
      y: point.y + 6,
      rotation: (hash01(`mossr:${t}`) - 0.5) * 30,
      scale: 1.1 + hash01(`mosss:${t}`) * 0.7,
    });
  }

  ordered.forEach((graph) => {
    const growth = SUBJECT_GROWTH[graph.subject];
    const fork = cubicPoint(trunk, growth.t);
    const domainCount = Math.max(graph.domains.length, 1);
    const branchLen =
      (156 + Math.min(domainCount, 8) * 32) * growth.length +
      hash01(graph.subject) * 14;
    const branch = organicCubic(
      fork,
      growth.degrees,
      branchLen,
      `subject:${graph.subject}`,
    );
    wood.push({
      id: `branch:${graph.subject}`,
      kind: "branch",
      cubic: branch,
      width: 22,
      startWidth: growth.startWidth,
      endWidth: growth.endWidth,
      label: SUBJECT_LABELS[graph.subject],
      labelPoint: cubicPoint(branch, 0.34),
      subjectId: graph.subject,
    });
    const labelPoint = cubicPoint(branch, graph.subject === "science" ? 0.5 : 0.46);
    const side: "left" | "right" = graph.subject === "english" ? "right" : "left";
    subjectLabels.push({
      subject: graph.subject,
      label: SUBJECT_LABELS[graph.subject],
      x: labelPoint.x + (side === "left" ? -34 : 34),
      y: labelPoint.y - (graph.subject === "science" ? 30 : 18),
      side,
    });

    pushCloud(foliage, {
      id: `crown:${graph.subject}`,
      origin: cubicPoint(branch, 0.72),
      seed: `crown:${graph.subject}`,
      count: 7,
      radius: 78 + domainCount * 6,
      layer: "crown",
      subjectId: graph.subject,
    });
    pushCloud(foliage, {
      id: `crown-tip:${graph.subject}`,
      origin: cubicPoint(branch, 0.9),
      seed: `crown-tip:${graph.subject}`,
      count: 5,
      radius: 56 + domainCount * 4,
      layer: "crown",
      subjectId: graph.subject,
    });

    const conceptsById = new Map(
      graph.concepts.map((concept) => [concept.id, concept]),
    );
    const clustersById = new Map(
      graph.clusters.map((cluster) => [cluster.id, cluster]),
    );
    const visibleIds = new Set(graph.concepts.map((concept) => concept.id));

    graph.domains.forEach((domain, domainIndex) => {
      const domainT = lerp(
        0.22,
        0.9,
        domainCount === 1 ? 0.58 : domainIndex / Math.max(domainCount - 1, 1),
      );
      const attach = cubicPoint(branch, domainT);
      const fan =
        (domainIndex - (domainCount - 1) / 2) *
        (14 + hash01(`${graph.subject}:${domain.label}`) * 6);
      const domainDegrees = towardCanopy(growth.degrees, fan);
      const clusterCount = Math.max(domain.clusterIds.length, 1);
      const domainLen = 78 + Math.min(clusterCount, 6) * 18;
      const domainCubic = organicCubic(
        attach,
        domainDegrees,
        domainLen,
        `domain:${graph.subject}:${domain.label}`,
      );
      wood.push({
        id: `domain:${graph.subject}:${domain.label}`,
        kind: "subbranch",
        cubic: domainCubic,
        width: 11,
        startWidth: 14,
        endWidth: 6.5,
        label: domain.label,
        labelPoint: cubicPoint(domainCubic, 0.44),
        subjectId: graph.subject,
        domainLabel: domain.label,
      });
      const domainLabelPoint = cubicPoint(domainCubic, 0.58);
      const domainSide: "left" | "right" =
        domainLabelPoint.x < fork.x ? "left" : "right";
      const stagger = ((domainIndex % 3) - 1) * 18;
      domainLabels.push({
        label: domain.label,
        subject: graph.subject,
        x: domainLabelPoint.x + (domainSide === "left" ? -26 : 26),
        y: domainLabelPoint.y - 16 + stagger,
        side: domainSide,
      });

      pushCloud(foliage, {
        id: `domain-crown:${graph.subject}:${domain.label}`,
        origin: cubicPoint(domainCubic, 0.78),
        seed: `domain-crown:${graph.subject}:${domain.label}`,
        count: 4,
        radius: 36 + clusterCount * 3,
        layer: "crown",
        subjectId: graph.subject,
        domainLabel: domain.label,
      });

      const arms = chunkIds(domain.clusterIds, MAX_TWIGS_PER_ARM);
      arms.forEach((armIds, armIndex) => {
        const host =
          arms.length === 1
            ? domainCubic
            : organicCubic(
                cubicPoint(
                  domainCubic,
                  lerp(0.24, 0.8, armIndex / Math.max(arms.length - 1, 1)),
                ),
                towardCanopy(
                  domainDegrees,
                  (armIndex - (arms.length - 1) / 2) * 16,
                ),
                domainLen * 0.52,
                `arm:${graph.subject}:${domain.label}:${String(armIndex)}`,
              );
        if (arms.length > 1) {
          wood.push({
            id: `arm:${graph.subject}:${domain.label}:${String(armIndex)}`,
            kind: "subbranch",
            cubic: host,
            width: 7.5,
            startWidth: 8.5,
            endWidth: 4.6,
            label: domain.label,
            labelPoint: cubicPoint(host, 0.5),
            subjectId: graph.subject,
            domainLabel: domain.label,
          });
        }

        armIds.forEach((clusterId, clusterIndex) => {
          const cluster = clustersById.get(clusterId);
          if (!cluster) {
            return;
          }
          const twigT = lerp(
            0.16,
            0.92,
            armIds.length === 1
              ? 0.62
              : clusterIndex / Math.max(armIds.length - 1, 1),
          );
          const twigOrigin = cubicPoint(host, twigT);
          const twigFan =
            (clusterIndex - (armIds.length - 1) / 2) * 12 +
            (clusterIndex % 2 === 0 ? -6 : 6);
          const orderedIds = [...cluster.conceptIds].sort((a, b) => {
            const depthDelta =
              conceptPrerequisiteDepth(a, conceptsById, visibleIds) -
              conceptPrerequisiteDepth(b, conceptsById, visibleIds);
            if (depthDelta !== 0) {
              return depthDelta;
            }
            return cluster.conceptIds.indexOf(a) - cluster.conceptIds.indexOf(b);
          });
          const twigLen = 32 + orderedIds.length * 10 + hash01(cluster.id) * 8;
          const twig = organicCubic(
            twigOrigin,
            towardCanopy(domainDegrees, twigFan),
            twigLen,
            `twig:${cluster.id}`,
          );
          wood.push({
            id: `twig:${cluster.id}`,
            kind: "twig",
            cubic: twig,
            width: 4.8,
            startWidth: 5.6,
            endWidth: 2.3,
            label: cluster.title,
            labelPoint: cubicPoint(twig, 0.7),
            subjectId: graph.subject,
            domainLabel: domain.label,
            clusterId: cluster.id,
          });

          const canopyCenter = cubicPoint(twig, 0.82);
          pushCloud(foliage, {
            id: `cluster:${cluster.id}`,
            origin: canopyCenter,
            seed: `cluster:${cluster.id}`,
            count: 5 + Math.floor(hash01(cluster.id) * 3),
            radius: 22 + orderedIds.length * 3.2,
            layer: "cluster",
            subjectId: graph.subject,
            domainLabel: domain.label,
            clusterId: cluster.id,
          });

          orderedIds.forEach((conceptId, leafIndex) => {
            const concept = conceptsById.get(conceptId);
            if (!concept) {
              return;
            }
            const count = orderedIds.length;
            const leafT = lerp(
              count === 1 ? 0.86 : 0.4,
              0.98,
              count === 1 ? 1 : leafIndex / Math.max(count - 1, 1),
            );
            const stem = cubicPoint(twig, leafT);
            const grow = normalize(
              polar(
                towardCanopy(domainDegrees, twigFan + (leafIndex % 2 === 0 ? -10 : 10)),
                1,
              ),
            );
            const radial =
              11 +
              conceptPrerequisiteDepth(conceptId, conceptsById, visibleIds) * 2.2 +
              hash01(conceptId) * 4;
            let position = add(stem, scale(grow, radial));
            for (const other of leaves) {
              const dx = position.x - other.x;
              const dy = position.y - other.y;
              const dist = lengthOf({ x: dx, y: dy });
              if (dist > 0 && dist < LEAF_MIN_DIST) {
                position = add(
                  position,
                  scale(grow, LEAF_MIN_DIST - dist + 1.6),
                );
              }
            }
            leaves.push({
              id: conceptId,
              clusterId: cluster.id,
              domainLabel: domain.label,
              subjectId: graph.subject,
              x: position.x,
              y: position.y,
              stemX: stem.x,
              stemY: stem.y,
              rotation: (hash01(`${conceptId}:rot`) - 0.5) * 40,
              depth: conceptPrerequisiteDepth(
                conceptId,
                conceptsById,
                visibleIds,
              ),
              outwardX: grow.x,
              outwardY: grow.y,
            });
          });
        });
      });
    });

  });

  for (const item of wood) {
    if (item.kind === "twig") {
      continue;
    }
    for (const t of [0.2, 0.46, 0.72]) {
      const seed = `${item.id}:orn:${t.toFixed(2)}`;
      const roll = hash01(seed);
      if (item.kind === "root" && roll < 0.55) {
        continue;
      }
      if (item.kind !== "root" && roll < 0.48) {
        continue;
      }
      const point = cubicPoint(item.cubic, t);
      const kind: KnowledgeTreeOrnament["kind"] =
        item.kind === "root"
          ? "moss"
          : roll > 0.86
            ? "blossom"
            : roll > 0.68
              ? "moss"
              : "leaf";
      ornaments.push({
        id: seed,
        kind,
        x: point.x + (hash01(`${seed}:x`) - 0.5) * 12,
        y: point.y + (hash01(`${seed}:y`) - 0.5) * 9,
        rotation: (hash01(`${seed}:r`) - 0.5) * 50,
        scale: 0.75 + hash01(`${seed}:s`) * 0.55,
      });
    }
  }

  for (let index = 0; index < 22; index += 1) {
    const seed = `mote:${String(index)}`;
    motes.push({
      id: seed,
      x: (hash01(`${seed}:x`) - 0.5) * 520,
      y: -70 - hash01(`${seed}:y`) * 460,
      r: 0.7 + hash01(`${seed}:r`) * 1.8,
      opacity: 0.1 + hash01(`${seed}:o`) * 0.18,
    });
  }

  const points: KnowledgeTreePoint[] = [];
  for (const item of wood) {
    points.push(...cubicSamples(item.cubic));
  }
  for (const leaf of leaves) {
    points.push({ x: leaf.x, y: leaf.y });
  }
  for (const blob of foliage) {
    points.push({ x: blob.x - blob.rx, y: blob.y - blob.ry });
    points.push({ x: blob.x + blob.rx, y: blob.y + blob.ry });
  }
  if (points.length === 0) {
    points.push({ x: 0, y: 0 }, { x: 160, y: -240 });
  }

  const minX = Math.min(...points.map((point) => point.x));
  const maxX = Math.max(...points.map((point) => point.x));
  const minY = Math.min(...points.map((point) => point.y));
  const maxY = Math.max(...points.map((point) => point.y));
  const dx = PAD - minX;
  const dy = PAD - minY;
  const shift = (point: KnowledgeTreePoint) =>
    quantizePoint({ x: point.x + dx, y: point.y + dy });

  return {
    width: quantize(maxX - minX + PAD * 2),
    height: quantize(maxY - minY + PAD * 2 + 48),
    groundY: quantize(dy),
    trunkX: quantize(dx),
    wood: wood.map((item) => ({
      ...item,
      width: quantize(item.width),
      startWidth: item.startWidth ? quantize(item.startWidth) : undefined,
      endWidth: item.endWidth ? quantize(item.endWidth) : undefined,
      cubic: {
        p0: shift(item.cubic.p0),
        p1: shift(item.cubic.p1),
        p2: shift(item.cubic.p2),
        p3: shift(item.cubic.p3),
      },
      labelPoint: shift(item.labelPoint),
    })),
    leaves: leaves.map((leaf) => ({
      ...leaf,
      x: quantize(leaf.x + dx),
      y: quantize(leaf.y + dy),
      stemX: quantize(leaf.stemX + dx),
      stemY: quantize(leaf.stemY + dy),
      rotation: quantize(leaf.rotation),
      outwardX: quantize(leaf.outwardX),
      outwardY: quantize(leaf.outwardY),
    })),
    canopies: [],
    foliage: foliage.map((blob) => ({
      ...blob,
      x: quantize(blob.x + dx),
      y: quantize(blob.y + dy),
      rx: quantize(blob.rx),
      ry: quantize(blob.ry),
      rotation: quantize(blob.rotation),
      opacity: quantize(blob.opacity),
    })),
    ornaments: ornaments.map((item) => ({
      ...item,
      x: quantize(item.x + dx),
      y: quantize(item.y + dy),
      rotation: quantize(item.rotation),
      scale: quantize(item.scale),
    })),
    motes: motes.map((item) => ({
      ...item,
      x: quantize(item.x + dx),
      y: quantize(item.y + dy),
      r: quantize(item.r),
      opacity: quantize(item.opacity),
    })),
    subjectLabels: subjectLabels.map((label) => ({
      ...label,
      x: quantize(label.x + dx),
      y: quantize(label.y + dy),
    })),
    domainLabels: domainLabels.map((label) => ({
      ...label,
      x: quantize(label.x + dx),
      y: quantize(label.y + dy),
    })),
  };
}

type LabelBox = {
  left: number;
  top: number;
  right: number;
  bottom: number;
};

function estimateLabelWidth(text: string, fontSize: number) {
  return Math.max(text.length * fontSize * 0.56, fontSize * 2);
}

function makeLabelBox(label: KnowledgeTreePlacedLabel): LabelBox {
  const width = estimateLabelWidth(label.text, label.fontSize) + 42;
  const height =
    label.kind === "subject"
      ? 48
      : label.kind === "domain"
        ? 42
        : label.kind === "topic"
          ? 38
          : 34;
  const left =
    label.anchor === "end"
      ? label.x - width
      : label.anchor === "middle"
        ? label.x - width / 2
        : label.x;
  return {
    left,
    top: label.y - height,
    right: left + width,
    bottom: label.y + 8,
  };
}

function boxesOverlap(a: LabelBox, b: LabelBox, pad: number) {
  return !(
    a.right + pad < b.left ||
    a.left - pad > b.right ||
    a.bottom + pad < b.top ||
    a.top - pad > b.bottom
  );
}

export function placeMagicalTreeLabels(input: {
  layout: KnowledgeTreeLayout;
  graphs: KnowledgeTreeGraph[];
  states: Record<string, KnowledgeTreeNodeState>;
  mode: MagicalLabelMode;
  selectedId: string | null;
  focusedSubject?: Subject;
  focusedDomain?: string;
  focusedClusterId?: string;
  visible?: LabelBox;
}): KnowledgeTreePlacedLabel[] {
  const { layout, graphs, states, mode, selectedId } = input;
  const conceptsById = new Map(
    graphs.flatMap((graph) => graph.concepts).map((concept) => [concept.id, concept]),
  );
  const clustersById = new Map(
    graphs.flatMap((graph) => graph.clusters).map((cluster) => [cluster.id, cluster]),
  );
  const placed: KnowledgeTreePlacedLabel[] = [];
  const boxes: LabelBox[] = [];
  void input.visible;

  function tryPlace(label: KnowledgeTreePlacedLabel, requireGap = true) {
    const box = makeLabelBox(label);
    if (requireGap && boxes.some((item) => boxesOverlap(box, item, 14))) {
      return false;
    }
    placed.push(label);
    boxes.push(box);
    return true;
  }

  function placeOrNudge(label: KnowledgeTreePlacedLabel) {
    const offsets = [0, -30, 32, -58, 60, -88, 90, -118, 120];
    for (const dy of offsets) {
      if (tryPlace({ ...label, y: label.y + dy })) {
        return;
      }
    }
    tryPlace(label, false);
  }

  if (mode === "overview") {
    for (const label of layout.subjectLabels) {
      tryPlace({
        id: `subject:${label.subject}`,
        kind: "subject",
        text: label.label,
        x: label.x,
        y: label.y,
        anchor: label.side === "left" ? "end" : "start",
        fontSize: 22,
        fill: "#0e4450",
      });
    }
    return placed;
  }

  if (mode === "domains") {
    for (const label of layout.subjectLabels) {
      if (input.focusedSubject && label.subject !== input.focusedSubject) {
        continue;
      }
      tryPlace({
        id: `subject:${label.subject}`,
        kind: "subject",
        text: label.label,
        x: label.x,
        y: label.y,
        anchor: label.side === "left" ? "end" : "start",
        fontSize: 18,
        fill: "#0e4450",
      });
    }
    for (const label of layout.domainLabels) {
      if (input.focusedSubject && label.subject !== input.focusedSubject) {
        continue;
      }
      placeOrNudge({
        id: `domain:${label.subject}:${label.label}`,
        kind: "domain",
        text: label.label,
        x: label.x,
        y: label.y,
        anchor: label.side === "left" ? "end" : "start",
        fontSize: 16,
        fill: "#0e4450",
      });
    }
    return placed;
  }

  if (mode === "topics") {
    for (const twig of layout.wood.filter((item) => item.kind === "twig")) {
      if (input.focusedSubject && twig.subjectId !== input.focusedSubject) {
        continue;
      }
      if (input.focusedDomain && twig.domainLabel !== input.focusedDomain) {
        continue;
      }
      const cluster = twig.clusterId ? clustersById.get(twig.clusterId) : undefined;
      if (!cluster) {
        continue;
      }
      placeOrNudge({
        id: `topic:${cluster.id}`,
        kind: "topic",
        text: cluster.title,
        x: twig.labelPoint.x,
        y: twig.labelPoint.y - 8,
        anchor: twig.labelPoint.x < layout.trunkX ? "end" : "start",
        fontSize: 14,
        fill: "#14343d",
      });
    }
    return placed;
  }

  for (const twig of layout.wood.filter((item) => item.kind === "twig")) {
    if (input.focusedClusterId && twig.clusterId !== input.focusedClusterId) {
      continue;
    }
    if (input.focusedSubject && twig.subjectId !== input.focusedSubject) {
      continue;
    }
    if (input.focusedDomain && twig.domainLabel !== input.focusedDomain) {
      continue;
    }
    const cluster = twig.clusterId ? clustersById.get(twig.clusterId) : undefined;
    if (!cluster) {
      continue;
    }
    placeOrNudge({
      id: `topic:${cluster.id}`,
      kind: "topic",
      text: cluster.title,
      x: twig.labelPoint.x,
      y: twig.labelPoint.y - 10,
      anchor: twig.labelPoint.x < layout.trunkX ? "end" : "start",
      fontSize: 15,
      fill: "#0e4450",
    });
  }

  const ranked = [...layout.leaves].sort((a, b) => {
    const rank = (id: string) => {
      if (id === selectedId) {
        return 0;
      }
      const state = states[id] ?? "content_not_ready";
      if (state === "in_progress") {
        return 1;
      }
      if (state === "mastered") {
        return 2;
      }
      if (state === "available") {
        return 3;
      }
      return 4;
    };
    return rank(a.id) - rank(b.id);
  });
  for (const leaf of ranked) {
    const concept = conceptsById.get(leaf.id);
    if (!concept) {
      continue;
    }
    if (input.focusedSubject && leaf.subjectId !== input.focusedSubject) {
      continue;
    }
    if (input.focusedDomain && leaf.domainLabel !== input.focusedDomain) {
      continue;
    }
    if (input.focusedClusterId && leaf.clusterId !== input.focusedClusterId) {
      continue;
    }
    placeOrNudge({
      id: `concept:${leaf.id}`,
      kind: "concept",
      text: concept.title,
      x: leaf.x + leaf.outwardX * 16,
      y: leaf.y + leaf.outwardY * 14 - 4,
      anchor: leaf.x < layout.trunkX ? "end" : "start",
      fontSize: leaf.id === selectedId ? 14 : 13,
      fill: leaf.id === selectedId ? "#0e4450" : "#14343d",
    });
  }

  return placed;
}

export function magicalTreeLabelMode(input: {
  scale: number;
  focusKind: "tree" | "subject" | "domain" | "cluster" | "concept";
}): MagicalLabelMode {
  void input.scale;
  if (input.focusKind === "cluster" || input.focusKind === "concept") {
    return "concepts";
  }
  if (input.focusKind === "domain") {
    return "topics";
  }
  if (input.focusKind === "subject") {
    return "domains";
  }
  return "overview";
}

export type { MagicalLabelMode };
