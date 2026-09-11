import type { CurriculumProgressState } from "./curriculum";
import type { Subject } from "./types";
import { SUBJECT_LABELS } from "./types";

export const KNOWLEDGE_TREE_NODE_STATES = [
  "locked",
  "available",
  "in_progress",
  "mastered",
  "content_not_ready",
] as const;

export type KnowledgeTreeNodeState =
  (typeof KNOWLEDGE_TREE_NODE_STATES)[number];

export const KNOWLEDGE_TREE_NODE_STATE_LABELS: Record<
  KnowledgeTreeNodeState,
  string
> = {
  locked: "Locked",
  available: "Ready",
  in_progress: "Growing",
  mastered: "Mastered",
  content_not_ready: "Coming soon",
};

export const KNOWLEDGE_TREE_PROGRESS_LABELS: Record<
  CurriculumProgressState,
  string
> = {
  unvisited: "Not started",
  started: "Started",
  practiced: "Practiced",
  mastered: "Mastered",
};

export const KNOWLEDGE_TREE_RELATIONSHIP_KINDS = [
  "parent",
  "prerequisite",
  "related",
] as const;

export type KnowledgeTreeRelationshipKind =
  (typeof KNOWLEDGE_TREE_RELATIONSHIP_KINDS)[number];

export type KnowledgeTreeConceptNode = {
  id: string;
  title: string;
  hook: string;
  explainer: string;
  subjectId: Subject;
  domainLabel: string;
  worldId: string;
  worldTitle: string;
  topicId?: string;
  topicTitle?: string;
  grades: number[];
  prerequisiteIds: string[];
  relatedIds: string[];
  skillTitles: string[];
  hasReadyExperience: boolean;
};

export type KnowledgeTreeEdge = {
  fromId: string;
  toId: string;
  kind: KnowledgeTreeRelationshipKind;
};

export type KnowledgeTreeCluster = {
  id: string;
  kind: "world" | "topic";
  title: string;
  hook: string;
  worldId: string;
  worldTitle: string;
  conceptIds: string[];
};

export type KnowledgeTreeDomainBranch = {
  label: string;
  clusterIds: string[];
};

export type KnowledgeTreeGraph = {
  grade: number;
  subject: Subject;
  concepts: KnowledgeTreeConceptNode[];
  edges: KnowledgeTreeEdge[];
  domains: KnowledgeTreeDomainBranch[];
  clusters: KnowledgeTreeCluster[];
};

export type KnowledgeTreePoint = {
  x: number;
  y: number;
};

export type KnowledgeTreeCubic = {
  p0: KnowledgeTreePoint;
  p1: KnowledgeTreePoint;
  p2: KnowledgeTreePoint;
  p3: KnowledgeTreePoint;
};

export type KnowledgeTreeWood = {
  id: string;
  kind: "root" | "trunk" | "branch" | "subbranch" | "twig";
  cubic: KnowledgeTreeCubic;
  width: number;
  startWidth?: number;
  endWidth?: number;
  label: string;
  labelPoint: KnowledgeTreePoint;
  subjectId?: Subject;
  domainLabel?: string;
  clusterId?: string;
};

export type KnowledgeTreeLeaf = {
  id: string;
  clusterId: string;
  domainLabel: string;
  subjectId: Subject;
  x: number;
  y: number;
  stemX: number;
  stemY: number;
  rotation: number;
  depth: number;
  outwardX: number;
  outwardY: number;
};

export type KnowledgeTreePlacedLabel = {
  id: string;
  kind: "subject" | "domain" | "topic" | "concept" | "skill";
  text: string;
  x: number;
  y: number;
  anchor: "start" | "middle" | "end";
  fontSize: number;
  fill: string;
};

export type KnowledgeTreeFoliage = {
  id: string;
  x: number;
  y: number;
  rx: number;
  ry: number;
  rotation: number;
  fill: string;
  opacity: number;
  layer?: "crown" | "cluster";
  subjectId?: Subject;
  domainLabel?: string;
  clusterId?: string;
};

export type KnowledgeTreeOrnament = {
  id: string;
  kind: "moss" | "blossom" | "leaf";
  x: number;
  y: number;
  rotation: number;
  scale: number;
};

export type KnowledgeTreeMote = {
  id: string;
  x: number;
  y: number;
  r: number;
  opacity: number;
};

export type KnowledgeTreeSubjectLabel = {
  subject: Subject;
  label: string;
  x: number;
  y: number;
  side: "left" | "right";
};

export type KnowledgeTreeCanopy = {
  id: string;
  clusterId: string;
  domainLabel: string;
  x: number;
  y: number;
  rx: number;
  ry: number;
};

export type KnowledgeTreeFocus =
  | { kind: "tree" }
  | { kind: "subject"; subject: Subject }
  | { kind: "domain"; subject: Subject; label: string }
  | { kind: "cluster"; id: string }
  | { kind: "concept"; id: string };

export type KnowledgeTreeLayout = {
  width: number;
  height: number;
  groundY: number;
  trunkX: number;
  wood: KnowledgeTreeWood[];
  leaves: KnowledgeTreeLeaf[];
  canopies: KnowledgeTreeCanopy[];
  foliage: KnowledgeTreeFoliage[];
  ornaments: KnowledgeTreeOrnament[];
  motes: KnowledgeTreeMote[];
  subjectLabels: KnowledgeTreeSubjectLabel[];
  domainLabels: Array<{
    label: string;
    subject: Subject;
    x: number;
    y: number;
    side: "left" | "right";
  }>;
};

const MAX_CLUSTERS_PER_ARM = 8;
const PAD = 80;
const LEAF_MIN_DIST = 16;

export function resolveKnowledgeTreeNodeState(input: {
  progress: CurriculumProgressState;
  hasReadyExperience: boolean;
  blockingPrerequisiteIds: string[];
}): KnowledgeTreeNodeState {
  if (input.progress === "mastered") {
    return "mastered";
  }
  if (input.progress === "started" || input.progress === "practiced") {
    return "in_progress";
  }
  if (input.blockingPrerequisiteIds.length > 0) {
    return "locked";
  }
  if (!input.hasReadyExperience) {
    return "content_not_ready";
  }
  return "available";
}

export function blockingPrerequisiteIds(
  prerequisiteIds: string[],
  visibleConceptIds: Set<string>,
  progress: Record<string, CurriculumProgressState | undefined>,
): string[] {
  return prerequisiteIds.filter((id) => {
    if (!visibleConceptIds.has(id)) {
      return false;
    }
    return (progress[id] ?? "unvisited") !== "mastered";
  });
}

function hasEdge(
  edges: KnowledgeTreeEdge[],
  fromId: string,
  toId: string,
  kind?: KnowledgeTreeRelationshipKind,
) {
  return edges.some(
    (edge) =>
      edge.fromId === fromId &&
      edge.toId === toId &&
      (kind === undefined || edge.kind === kind),
  );
}

export function addUniqueEdge(
  edges: KnowledgeTreeEdge[],
  edge: KnowledgeTreeEdge,
) {
  if (hasEdge(edges, edge.fromId, edge.toId, edge.kind)) {
    return;
  }
  edges.push(edge);
}

export function cubicPath(cubic: KnowledgeTreeCubic): string {
  const { p0, p1, p2, p3 } = cubic;
  return `M ${p0.x.toFixed(1)} ${p0.y.toFixed(1)} C ${p1.x.toFixed(1)} ${p1.y.toFixed(1)} ${p2.x.toFixed(1)} ${p2.y.toFixed(1)} ${p3.x.toFixed(1)} ${p3.y.toFixed(1)}`;
}

export function cubicPoint(
  cubic: KnowledgeTreeCubic,
  t: number,
): KnowledgeTreePoint {
  const u = 1 - t;
  const uu = u * u;
  const tt = t * t;
  return {
    x:
      uu * u * cubic.p0.x +
      3 * uu * t * cubic.p1.x +
      3 * u * tt * cubic.p2.x +
      tt * t * cubic.p3.x,
    y:
      uu * u * cubic.p0.y +
      3 * uu * t * cubic.p1.y +
      3 * u * tt * cubic.p2.y +
      tt * t * cubic.p3.y,
  };
}

function cubicTangent(
  cubic: KnowledgeTreeCubic,
  t: number,
): KnowledgeTreePoint {
  const u = 1 - t;
  return {
    x:
      3 * u * u * (cubic.p1.x - cubic.p0.x) +
      6 * u * t * (cubic.p2.x - cubic.p1.x) +
      3 * t * t * (cubic.p3.x - cubic.p2.x),
    y:
      3 * u * u * (cubic.p1.y - cubic.p0.y) +
      6 * u * t * (cubic.p2.y - cubic.p1.y) +
      3 * t * t * (cubic.p3.y - cubic.p2.y),
  };
}

function vectorLength(x: number, y: number) {
  const length = Math.sqrt(x * x + y * y);
  return length > 0 ? length : 1;
}

function hypotPoint(point: KnowledgeTreePoint) {
  return vectorLength(point.x, point.y);
}

function normalize(point: KnowledgeTreePoint): KnowledgeTreePoint {
  const length = hypotPoint(point);
  return { x: point.x / length, y: point.y / length };
}

function quantize(value: number, places = 4): number {
  const factor = 10 ** places;
  return Math.round(value * factor) / factor;
}

function quantizePoint(point: KnowledgeTreePoint): KnowledgeTreePoint {
  return { x: quantize(point.x), y: quantize(point.y) };
}

function quantizeCubic(cubic: KnowledgeTreeCubic): KnowledgeTreeCubic {
  return {
    p0: quantizePoint(cubic.p0),
    p1: quantizePoint(cubic.p1),
    p2: quantizePoint(cubic.p2),
    p3: quantizePoint(cubic.p3),
  };
}

/**
 * Portable atan2 in degrees. Uses only +, -, *, / so the result is
 * bit-identical across JS engines for the same inputs. Math.atan2 is not.
 */
function portableAtan2Degrees(y: number, x: number): number {
  if (x === 0 && y === 0) {
    return 0;
  }
  const absX = Math.abs(x);
  const absY = Math.abs(y);
  const longer = Math.max(absX, absY);
  const shorter = Math.min(absX, absY);
  const ratio = shorter / longer;
  const squared = ratio * ratio;
  let degrees =
    (((-0.0464964749 * squared + 0.15931422) * squared - 0.327622764) *
      squared *
      ratio +
      ratio) *
    57.29577951308232;
  if (absY > absX) {
    degrees = 90 - degrees;
  }
  if (x < 0) {
    degrees = 180 - degrees;
  }
  if (y < 0) {
    degrees = -degrees;
  }
  return degrees;
}

function leafRotationDegrees(conceptId: string, grow: KnowledgeTreePoint) {
  const facing = portableAtan2Degrees(grow.y, grow.x);
  const jitter = (hash01(`${conceptId}:r`) - 0.5) * 8;
  return quantize(facing + jitter);
}

function addPoints(
  a: KnowledgeTreePoint,
  b: KnowledgeTreePoint,
): KnowledgeTreePoint {
  return { x: a.x + b.x, y: a.y + b.y };
}

function scalePoint(
  point: KnowledgeTreePoint,
  amount: number,
): KnowledgeTreePoint {
  return { x: point.x * amount, y: point.y * amount };
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function hash01(value: string): number {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return ((hash >>> 0) % 1000) / 1000;
}

function chunkIds(ids: string[], size: number): string[][] {
  const chunks: string[][] = [];
  for (let index = 0; index < ids.length; index += size) {
    chunks.push(ids.slice(index, index + size));
  }
  return chunks.length > 0 ? chunks : [[]];
}

export function conceptPrerequisiteDepth(
  conceptId: string,
  conceptsById: Map<string, KnowledgeTreeConceptNode>,
  visibleIds: Set<string>,
): number {
  const seen = new Set<string>();

  function walk(id: string): number {
    if (seen.has(id)) {
      return 0;
    }
    seen.add(id);
    const concept = conceptsById.get(id);
    if (!concept) {
      return 0;
    }
    const prereqs = concept.prerequisiteIds.filter((item) =>
      visibleIds.has(item),
    );
    if (prereqs.length === 0) {
      return 0;
    }
    return 1 + Math.max(...prereqs.map(walk));
  }

  return walk(conceptId);
}

function translateCubic(
  cubic: KnowledgeTreeCubic,
  dx: number,
  dy: number,
): KnowledgeTreeCubic {
  const move = (point: KnowledgeTreePoint) => ({
    x: point.x + dx,
    y: point.y + dy,
  });
  return {
    p0: move(cubic.p0),
    p1: move(cubic.p1),
    p2: move(cubic.p2),
    p3: move(cubic.p3),
  };
}

function cubicBounds(cubic: KnowledgeTreeCubic): KnowledgeTreePoint[] {
  return [0, 0.33, 0.66, 1].map((t) => cubicPoint(cubic, t));
}

export function livingTreeFullBox(layout: KnowledgeTreeLayout): {
  x: number;
  y: number;
  width: number;
  height: number;
} {
  return { x: 0, y: 0, width: layout.width, height: layout.height };
}

export function livingTreePortraitBox(layout: KnowledgeTreeLayout): {
  x: number;
  y: number;
  width: number;
  height: number;
} {
  const points: KnowledgeTreePoint[] = [
    { x: layout.trunkX, y: layout.groundY + 80 },
    { x: layout.trunkX, y: 24 },
  ];
  for (const leaf of layout.leaves) {
    points.push({ x: leaf.x, y: leaf.y });
  }
  for (const wood of layout.wood) {
    points.push(wood.labelPoint);
    points.push(wood.cubic.p0);
    points.push(wood.cubic.p3);
  }
  for (const label of layout.subjectLabels) {
    points.push({ x: label.x, y: label.y });
  }
  const xs = points.map((point) => point.x);
  const ys = points.map((point) => point.y);
  if (xs.length === 0 || ys.length === 0) {
    return { x: 0, y: 0, width: layout.width, height: layout.height };
  }
  const minX = Math.max(0, Math.min(...xs) - 96);
  const maxX = Math.min(layout.width, Math.max(...xs) + 96);
  const minY = Math.max(0, Math.min(...ys) - 72);
  const maxY = Math.min(layout.height, Math.max(layout.groundY + 90, Math.max(...ys) + 36));
  return {
    x: minX,
    y: minY,
    width: Math.max(maxX - minX, 320),
    height: Math.max(maxY - minY, 340),
  };
}

function boxFromPoints(
  points: KnowledgeTreePoint[],
  pad: number,
): { x: number; y: number; width: number; height: number } {
  const xs = points.map((point) => point.x);
  const ys = points.map((point) => point.y);
  const minX = Math.min(...xs) - pad;
  const maxX = Math.max(...xs) + pad;
  const minY = Math.min(...ys) - pad;
  const maxY = Math.max(...ys) + pad;
  return {
    x: minX,
    y: minY,
    width: Math.max(maxX - minX, 160),
    height: Math.max(maxY - minY, 160),
  };
}

function expandTowardFull(
  tight: { x: number; y: number; width: number; height: number },
  full: { x: number; y: number; width: number; height: number },
  keep: number,
): { x: number; y: number; width: number; height: number } {
  const x = tight.x + (full.x - tight.x) * keep;
  const y = tight.y + (full.y - tight.y) * keep;
  const right =
    tight.x +
    tight.width +
    (full.x + full.width - (tight.x + tight.width)) * keep;
  const bottom =
    tight.y +
    tight.height +
    (full.y + full.height - (tight.y + tight.height)) * keep;
  return {
    x,
    y,
    width: Math.max(right - x, 160),
    height: Math.max(bottom - y, 160),
  };
}

export function livingTreeFocusBox(
  layout: KnowledgeTreeLayout,
  focus: KnowledgeTreeFocus,
  frame: "portrait" | "full" = "portrait",
): { x: number; y: number; width: number; height: number } {
  if (focus.kind === "tree") {
    return frame === "full"
      ? livingTreeFullBox(layout)
      : livingTreePortraitBox(layout);
  }

  const points: KnowledgeTreePoint[] = [];

  if (focus.kind === "subject") {
    for (const wood of layout.wood) {
      if (
        wood.subjectId === focus.subject &&
        (wood.kind === "branch" || wood.kind === "subbranch")
      ) {
        points.push(...cubicBounds(wood.cubic));
      }
    }
    const branch = layout.wood.find(
      (item) => item.kind === "branch" && item.subjectId === focus.subject,
    );
    if (branch) {
      points.push(branch.cubic.p0);
    }
    const subjectLabel = layout.subjectLabels.find(
      (label) => label.subject === focus.subject,
    );
    if (subjectLabel) {
      points.push({ x: subjectLabel.x, y: subjectLabel.y });
    }
    for (const label of layout.domainLabels) {
      if (label.subject === focus.subject) {
        points.push({ x: label.x, y: label.y });
      }
    }
  }

  if (focus.kind === "domain") {
    for (const wood of layout.wood) {
      if (
        wood.domainLabel === focus.label &&
        (wood.subjectId === undefined || wood.subjectId === focus.subject)
      ) {
        points.push(...cubicBounds(wood.cubic));
      }
    }
    const branch = layout.wood.find(
      (item) => item.kind === "branch" && item.subjectId === focus.subject,
    );
    if (branch) {
      points.push(cubicPoint(branch.cubic, 0.42));
    }
    for (const label of layout.domainLabels) {
      if (label.subject === focus.subject && label.label === focus.label) {
        points.push({ x: label.x, y: label.y });
      }
    }
    for (const blob of layout.foliage) {
      if (
        blob.domainLabel === focus.label &&
        blob.subjectId === focus.subject
      ) {
        points.push({ x: blob.x, y: blob.y });
      }
    }
  }

  if (focus.kind === "cluster") {
    const sample = layout.leaves.find((leaf) => leaf.clusterId === focus.id);
    for (const wood of layout.wood) {
      if (wood.clusterId === focus.id) {
        points.push(...cubicBounds(wood.cubic));
      }
    }
    if (sample) {
      const host = layout.wood.find(
        (item) =>
          item.kind === "subbranch" &&
          item.subjectId === sample.subjectId &&
          item.domainLabel === sample.domainLabel,
      );
      if (host) {
        points.push(...cubicBounds(host.cubic));
      }
    }
    for (const leaf of layout.leaves) {
      if (leaf.clusterId === focus.id) {
        points.push({ x: leaf.x, y: leaf.y });
      }
    }
    for (const blob of layout.foliage) {
      if (blob.clusterId === focus.id) {
        points.push({ x: blob.x, y: blob.y });
      }
    }
  }

  if (focus.kind === "concept") {
    const leaf = layout.leaves.find((item) => item.id === focus.id);
    if (leaf) {
      points.push({ x: leaf.x, y: leaf.y });
    }
  }

  if (points.length === 0) {
    return { x: 0, y: 0, width: layout.width, height: layout.height };
  }

  const pad =
    focus.kind === "concept"
      ? 96
      : focus.kind === "cluster"
        ? 88
        : focus.kind === "domain"
          ? 76
          : 64;
    const keep =
    focus.kind === "concept"
      ? 0.06
      : focus.kind === "cluster"
        ? 0.08
        : focus.kind === "domain"
          ? 0.1
          : 0.08;

  return expandTowardFull(
    boxFromPoints(points, pad),
    livingTreeFullBox(layout),
    keep,
  );
}

export function fitLivingTreeView(
  box: { x: number; y: number; width: number; height: number },
  viewportWidth: number,
  viewportHeight: number,
  padding = 24,
): { x: number; y: number; scale: number } {
  const innerWidth = Math.max(viewportWidth - padding * 2, 120);
  const innerHeight = Math.max(viewportHeight - padding * 2, 120);
  const scale = Math.min(
    innerWidth / Math.max(box.width, 1),
    innerHeight / Math.max(box.height, 1),
    2.4,
  );
  return {
    scale,
    x: padding + (innerWidth - box.width * scale) / 2 - box.x * scale,
    y: padding + (innerHeight - box.height * scale) / 2 - box.y * scale,
  };
}

/**
 * Botanical layout: roots (foundations) → trunk (subject) →
 * domain boughs → topic twigs → concept leaves.
 * Parent/child is encoded in the wood. Prerequisite depth
 * pushes a leaf farther along its twig. No decorative edges.
 */
export function layoutLivingKnowledgeTree(
  graph: KnowledgeTreeGraph,
): KnowledgeTreeLayout {
  const clustersById = new Map(
    graph.clusters.map((cluster) => [cluster.id, cluster]),
  );
  const conceptsById = new Map(
    graph.concepts.map((concept) => [concept.id, concept]),
  );
  const visibleIds = new Set(graph.concepts.map((concept) => concept.id));
  const wood: KnowledgeTreeWood[] = [];
  const leaves: KnowledgeTreeLeaf[] = [];
  const canopies: KnowledgeTreeCanopy[] = [];
  const domainLabels: KnowledgeTreeLayout["domainLabels"] = [];

  const trunkLen = 92 + graph.domains.length * 24;
  const trunkLean = 14;
  const trunk: KnowledgeTreeCubic = {
    p0: { x: 0, y: 0 },
    p1: { x: -trunkLean * 0.4, y: -trunkLen * 0.32 },
    p2: { x: trunkLean * 0.45, y: -trunkLen * 0.68 },
    p3: { x: trunkLean * 0.1, y: -trunkLen },
  };

  wood.push({
    id: `trunk:${graph.subject}`,
    kind: "trunk",
    cubic: trunk,
    width: 24,
    label: graph.subject,
    labelPoint: cubicPoint(trunk, 0.38),
  });

  graph.domains.forEach((domain, domainIndex) => {
    const side: 1 | -1 = domainIndex % 2 === 0 ? -1 : 1;
    const rank = Math.floor(domainIndex / 2);
    const vary = hash01(domain.label);
    const attachT = lerp(
      0.1,
      0.93,
      graph.domains.length === 1
        ? 0.55
        : domainIndex / Math.max(graph.domains.length - 1, 1),
    );
    const attach = cubicPoint(trunk, attachT);
    const clusterCount = domain.clusterIds.length;
    const reach = 58 + Math.min(clusterCount, 8) * 6 + vary * 8;
    const lift = 14 + (1 - attachT) * 22 + Math.min(clusterCount, 6) * 3;
    const branch: KnowledgeTreeCubic = {
      p0: attach,
      p1: {
        x: attach.x + side * (36 + vary * 14),
        y: attach.y + 8,
      },
      p2: {
        x: attach.x + side * (reach * 0.52),
        y: attach.y - lift * 0.7,
      },
      p3: {
        x: attach.x + side * reach,
        y: attach.y - lift,
      },
    };

    wood.push({
      id: `branch:${graph.subject}:${domain.label}`,
      kind: "branch",
      cubic: branch,
      width: 8 + Math.min(clusterCount, 8) * 0.35,
      label: domain.label,
      labelPoint: cubicPoint(branch, 0.52),
      domainLabel: domain.label,
    });

    const labelAt = cubicPoint(branch, 0.34);
    const labelTan = normalize(cubicTangent(branch, 0.34));
    let labelUp = { x: -labelTan.y, y: labelTan.x };
    if (labelUp.y > 0) {
      labelUp = { x: -labelUp.x, y: -labelUp.y };
    }
    domainLabels.push({
      label: domain.label,
      subject: graph.subject,
      x: labelAt.x + labelUp.x * 18 + side * 6,
      y: labelAt.y + labelUp.y * 18 - 2,
      side: side < 0 ? "left" : "right",
    });

    const rootReach = 64 + (rank % 3) * 16 + vary * 14;
    const root: KnowledgeTreeCubic = {
      p0: { x: side * 6, y: 6 },
      p1: { x: side * (20 + vary * 12), y: 24 },
      p2: { x: side * (rootReach * 0.62), y: 48 + rank * 6 },
      p3: { x: side * rootReach, y: 72 + rank * 10 + vary * 8 },
    };
    wood.push({
      id: `root:${graph.subject}:${domain.label}`,
      kind: "root",
      cubic: root,
      width: 5.2,
      label: domain.label,
      labelPoint: cubicPoint(root, 0.82),
      domainLabel: domain.label,
    });

    const arms = chunkIds(domain.clusterIds, MAX_CLUSTERS_PER_ARM);
    arms.forEach((armClusterIds, armIndex) => {
      const armCount = arms.length;
      const forkT = lerp(
        0.12,
        0.78,
        armCount === 1 ? 0.42 : armIndex / Math.max(armCount - 1, 1),
      );
      const fork = cubicPoint(branch, forkT);
      const forkTan = normalize(cubicTangent(branch, forkT));
      const armDir = normalize({
        x: side * 0.82 + forkTan.x * 0.28,
        y: forkTan.y - 0.42 - (armIndex % 2) * 0.18,
      });
      const armLen =
        36 + armClusterIds.length * 12 + hash01(`${domain.label}:${armIndex}`) * 10;
      const arm: KnowledgeTreeCubic =
        armCount === 1
          ? branch
          : {
              p0: fork,
              p1: addPoints(fork, scalePoint(armDir, armLen * 0.28)),
              p2: addPoints(fork, {
                x: armDir.x * armLen * 0.6 + side * 10,
                y: armDir.y * armLen * 0.6 - 16,
              }),
              p3: addPoints(fork, {
                x: armDir.x * armLen + side * 4,
                y: armDir.y * armLen - 24,
              }),
            };

      if (armCount > 1) {
        wood.push({
          id: `arm:${graph.subject}:${domain.label}:${armIndex}`,
          kind: "branch",
          cubic: arm,
          width: 6.2,
          label: domain.label,
          labelPoint: cubicPoint(arm, 0.48),
          domainLabel: domain.label,
        });
      }

      armClusterIds.forEach((clusterId, clusterIndex) => {
        const cluster = clustersById.get(clusterId);
        if (!cluster) {
          return;
        }
        const twigT = lerp(
          0.04,
          0.94,
          armClusterIds.length === 1
            ? 0.4
            : clusterIndex / Math.max(armClusterIds.length - 1, 1),
        );
        const attachTwig = cubicPoint(arm, twigT);
        const tan = normalize(cubicTangent(arm, twigT));
        const twigHash = hash01(cluster.id);
        const above = clusterIndex % 2 === 0;
        const growDir = normalize({
          x: side * 0.72 + tan.x * 0.22,
          y: (above ? -0.82 : 0.38) - 0.12,
        });
        const orderedIds = [...cluster.conceptIds].sort((a, b) => {
          const depthDelta =
            conceptPrerequisiteDepth(a, conceptsById, visibleIds) -
            conceptPrerequisiteDepth(b, conceptsById, visibleIds);
          if (depthDelta !== 0) {
            return depthDelta;
          }
          return cluster.conceptIds.indexOf(a) - cluster.conceptIds.indexOf(b);
        });
        const twigLen =
          (orderedIds.length <= 1 ? 18 : 16 + orderedIds.length * 9) +
          twigHash * 5;
        const twig: KnowledgeTreeCubic = {
          p0: attachTwig,
          p1: addPoints(attachTwig, {
            x: tan.x * 6 + growDir.x * 8,
            y: tan.y * 6 + growDir.y * 8,
          }),
          p2: addPoints(attachTwig, {
            x: growDir.x * twigLen * 0.62 + tan.x * 4,
            y: growDir.y * twigLen * 0.62 + tan.y * 3,
          }),
          p3: addPoints(attachTwig, {
            x: growDir.x * twigLen,
            y: growDir.y * twigLen,
          }),
        };

        wood.push({
          id: `twig:${cluster.id}`,
          kind: "subbranch",
          cubic: twig,
          width: 2.8,
          label: cluster.title,
          labelPoint: cubicPoint(twig, 0.78),
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
            count === 1 ? 0.92 : 0.42,
            0.98,
            count === 1 ? 1 : leafIndex / Math.max(count - 1, 1),
          );
          const stem = cubicPoint(twig, leafT);
          const leafTan = normalize(cubicTangent(twig, leafT));
          const sideFlip = leafIndex % 2 === 0 ? 1 : -1;
          const grow = normalize({
            x: growDir.x * 0.82 + leafTan.x * 0.18 + sideFlip * leafTan.y * 0.28,
            y: growDir.y * 0.82 + leafTan.y * 0.12 - 0.28,
          });
          const radial =
            8 +
            conceptPrerequisiteDepth(conceptId, conceptsById, visibleIds) * 2 +
            hash01(conceptId) * 3 +
            (count === 1 ? 4 : 0);
          let position = addPoints(stem, scalePoint(grow, radial));
          for (const other of leaves) {
            const dx = position.x - other.x;
            const dy = position.y - other.y;
            const dist = vectorLength(dx, dy);
            if (dist > 0 && dist < LEAF_MIN_DIST) {
              position = addPoints(
                position,
                scalePoint(grow, LEAF_MIN_DIST - dist + 1.5),
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
            rotation: leafRotationDegrees(conceptId, grow),
            depth: conceptPrerequisiteDepth(conceptId, conceptsById, visibleIds),
            outwardX: grow.x,
            outwardY: grow.y,
          });
        });
      });
    });
  });

  for (let index = 0; index < leaves.length; index += 1) {
    const leaf = leaves[index];
    if (!leaf) {
      continue;
    }
    for (let otherIndex = 0; otherIndex < index; otherIndex += 1) {
      const other = leaves[otherIndex];
      if (!other) {
        continue;
      }
      const dx = leaf.x - other.x;
      const dy = leaf.y - other.y;
      const dist = vectorLength(dx, dy);
      if (dist > 0 && dist < LEAF_MIN_DIST) {
        const push = (LEAF_MIN_DIST - dist) / 2 + 1;
        const dir = {
          x: dx / dist || leaf.outwardX,
          y: dy / dist || leaf.outwardY,
        };
        leaf.x += dir.x * push;
        leaf.y += dir.y * push;
        other.x -= dir.x * push;
        other.y -= dir.y * push;
      }
    }
  }

  const points: KnowledgeTreePoint[] = [];
  for (const item of wood) {
    points.push(...cubicBounds(item.cubic));
  }
  for (const leaf of leaves) {
    points.push({ x: leaf.x, y: leaf.y });
  }
  for (const canopy of canopies) {
    points.push({ x: canopy.x - canopy.rx, y: canopy.y - canopy.ry });
    points.push({ x: canopy.x + canopy.rx, y: canopy.y + canopy.ry });
  }
  if (points.length === 0) {
    points.push({ x: 0, y: 0 }, { x: 120, y: -200 });
  }

  const minX = Math.min(...points.map((point) => point.x));
  const maxX = Math.max(...points.map((point) => point.x));
  const minY = Math.min(...points.map((point) => point.y));
  const maxY = Math.max(...points.map((point) => point.y));
  const dx = PAD - minX;
  const dy = PAD - minY;

  return {
    width: quantize(maxX - minX + PAD * 2),
    height: quantize(maxY - minY + PAD * 2),
    groundY: quantize(dy),
    trunkX: quantize(dx),
    wood: wood.map((item) => ({
      ...item,
      subjectId: graph.subject,
      width: quantize(item.width),
      cubic: quantizeCubic(translateCubic(item.cubic, dx, dy)),
      labelPoint: quantizePoint(addPoints(item.labelPoint, { x: dx, y: dy })),
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
    canopies: canopies.map((canopy) => ({
      ...canopy,
      x: quantize(canopy.x + dx),
      y: quantize(canopy.y + dy),
      rx: quantize(canopy.rx),
      ry: quantize(canopy.ry),
    })),
    foliage: [],
    ornaments: [],
    motes: [],
    subjectLabels: [
      {
        subject: graph.subject,
        label: SUBJECT_LABELS[graph.subject],
        x: quantize(dx + 18),
        y: quantize(dy - 22),
        side: "right",
      },
    ],
    domainLabels: domainLabels.map((label) => ({
      ...label,
      x: quantize(label.x + dx),
      y: quantize(label.y + dy),
    })),
  };
}

export function layoutKnowledgeTree(
  graph: KnowledgeTreeGraph,
): KnowledgeTreeLayout {
  return layoutLivingKnowledgeTree(graph);
}

type LabelBox = {
  left: number;
  top: number;
  right: number;
  bottom: number;
};

function estimateLabelWidth(text: string, fontSize: number) {
  return Math.max(text.length * fontSize * 0.57, fontSize * 2);
}

function makeLabelBox(
  x: number,
  y: number,
  text: string,
  fontSize: number,
  anchor: KnowledgeTreePlacedLabel["anchor"],
): LabelBox {
  const width = estimateLabelWidth(text, fontSize);
  const height = fontSize * 1.2;
  const left =
    anchor === "end" ? x - width : anchor === "middle" ? x - width / 2 : x;
  return {
    left,
    top: y - fontSize * 0.85,
    right: left + width,
    bottom: y + height * 0.35,
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

function conceptLabelPriority(state: KnowledgeTreeNodeState, selected: boolean) {
  if (selected) {
    return 0;
  }
  switch (state) {
    case "in_progress":
      return 1;
    case "mastered":
      return 2;
    case "available":
      return 3;
    case "locked":
      return 4;
    default:
      return 5;
  }
}

export function placeLivingTreeLabels(input: {
  layout: KnowledgeTreeLayout;
  graph: KnowledgeTreeGraph;
  states: Record<string, KnowledgeTreeNodeState>;
  mode: "overview" | "topics" | "concepts";
  selectedId: string | null;
  viewScale: number;
  focusedDomain?: string;
  focusedClusterId?: string;
  visible?: LabelBox;
}): KnowledgeTreePlacedLabel[] {
  const { layout, graph, states, mode, selectedId, viewScale } = input;
  const conceptsById = new Map(
    graph.concepts.map((concept) => [concept.id, concept]),
  );
  const placed: KnowledgeTreePlacedLabel[] = [];
  const boxes: LabelBox[] = [];
  const overlapPad = mode === "concepts" ? 2.4 : 2.6;

  const inset = 12;
  const world: LabelBox = {
    left: Math.max(inset, input.visible?.left ?? inset),
    top: Math.max(inset, input.visible?.top ?? inset),
    right: Math.min(layout.width - inset, input.visible?.right ?? layout.width - inset),
    bottom: Math.min(
      layout.height - inset,
      input.visible?.bottom ?? layout.height - inset,
    ),
  };

  if (world.right - world.left < 40 || world.bottom - world.top < 40) {
    return [];
  }

  function inView(x: number, y: number, pad = 28) {
    return (
      x >= world.left - pad &&
      x <= world.right + pad &&
      y >= world.top - pad &&
      y <= world.bottom + pad
    );
  }

  for (const item of layout.wood) {
    if (item.kind !== "trunk") {
      continue;
    }
    for (const t of [0.2, 0.5, 0.8]) {
      const point = cubicPoint(item.cubic, t);
      if (!inView(point.x, point.y, 40)) {
        continue;
      }
      boxes.push({
        left: point.x - 14,
        top: point.y - 14,
        right: point.x + 14,
        bottom: point.y + 14,
      });
    }
  }

  function fits(box: LabelBox) {
    if (
      box.left < world.left ||
      box.right > world.right ||
      box.top < world.top ||
      box.bottom > world.bottom
    ) {
      return false;
    }
    return !boxes.some((item) => boxesOverlap(box, item, overlapPad));
  }

  function tryPlace(label: KnowledgeTreePlacedLabel) {
    const next = {
      ...label,
      x: quantize(label.x),
      y: quantize(label.y),
      fontSize: quantize(label.fontSize, 2),
    };
    const box = makeLabelBox(
      next.x,
      next.y,
      next.text,
      next.fontSize,
      next.anchor,
    );
    if (!fits(box)) {
      return false;
    }
    placed.push(next);
    boxes.push(box);
    return true;
  }

  const domainFont = mode === "overview" ? 13 : 11.5;
  if (mode !== "concepts") {
    for (const label of layout.domainLabels) {
      if (input.focusedDomain && label.label !== input.focusedDomain) {
        continue;
      }
      if (!inView(label.x, label.y, 36)) {
        continue;
      }
      const anchor = label.side === "left" ? "end" : "start";
      const fill = "#1a6c76";
      const shift = label.side === "left" ? -10 : 10;
      const candidates: Array<{ x: number; y: number }> = [
        { x: label.x, y: label.y },
        { x: label.x, y: label.y - domainFont },
        { x: label.x + shift, y: label.y - 6 },
        { x: label.x, y: label.y + domainFont * 0.9 },
        { x: label.x + shift * 1.6, y: label.y - domainFont * 1.2 },
      ];
      const placedDomain = candidates.some((candidate) =>
        tryPlace({
          id: `domain:${label.label}`,
          kind: "domain",
          text: label.label,
          x: candidate.x,
          y: candidate.y,
          anchor,
          fontSize: domainFont,
          fill,
        }),
      );
      if (!placedDomain) {
        tryPlace({
          id: `domain:${label.label}`,
          kind: "domain",
          text: label.label,
          x: label.x + shift,
          y: label.y - domainFont * 1.5,
          anchor,
          fontSize: domainFont * 0.88,
          fill,
        });
      }
    }
  }

  for (const item of layout.wood) {
    if (item.kind === "trunk") {
      continue;
    }
    const radius = item.kind === "branch" ? 6 : 3.5;
    for (const t of [0.15, 0.5, 0.85]) {
      const point = cubicPoint(item.cubic, t);
      if (!inView(point.x, point.y, 36)) {
        continue;
      }
      boxes.push({
        left: point.x - radius,
        top: point.y - radius,
        right: point.x + radius,
        bottom: point.y + radius,
      });
    }
  }

  for (const leaf of layout.leaves) {
    if (!inView(leaf.x, leaf.y, 24)) {
      continue;
    }
    boxes.push({
      left: leaf.x - 6,
      top: leaf.y - 7,
      right: leaf.x + 6,
      bottom: leaf.y + 7,
    });
  }

  if (mode !== "overview") {
    const topicFont = mode === "concepts" ? 8.6 : 9.1;
    for (const cluster of graph.clusters) {
      if (input.focusedDomain) {
        const sample = layout.leaves.find((leaf) => leaf.clusterId === cluster.id);
        if (sample && sample.domainLabel !== input.focusedDomain) {
          continue;
        }
      }
      if (input.focusedClusterId && cluster.id !== input.focusedClusterId) {
        continue;
      }
      const clusterLeaves = layout.leaves.filter(
        (leaf) => leaf.clusterId === cluster.id,
      );
      if (clusterLeaves.length < 2) {
        continue;
      }
      const cx =
        clusterLeaves.reduce((sum, leaf) => sum + leaf.x, 0) /
        clusterLeaves.length;
      const cy =
        clusterLeaves.reduce((sum, leaf) => sum + leaf.y, 0) /
        clusterLeaves.length;
      if (!inView(cx, cy, 20)) {
        continue;
      }
      const ox =
        clusterLeaves.reduce((sum, leaf) => sum + leaf.outwardX, 0) /
        clusterLeaves.length;
      const oy =
        clusterLeaves.reduce((sum, leaf) => sum + leaf.outwardY, 0) /
        clusterLeaves.length;
      const dist = clusterLeaves.length === 1 ? 15 : 11;
      const anchor: KnowledgeTreePlacedLabel["anchor"] =
        cx + ox * dist < layout.trunkX ? "end" : "start";
      const candidates = [
        { x: cx + ox * dist, y: cy + oy * dist - 4 },
        { x: cx + ox * dist, y: cy + oy * dist - topicFont },
        { x: cx, y: cy - dist - 6 },
        { x: cx + (cx < layout.trunkX ? -dist : dist), y: cy - 4 },
      ];
      candidates.some((candidate) =>
        tryPlace({
          id: `topic:${cluster.id}`,
          kind: "topic",
          text: cluster.title,
          x: candidate.x,
          y: candidate.y,
          anchor,
          fontSize: topicFont,
          fill: "#3b5d67",
        }),
      );
    }
  }

  const conceptFont =
    mode === "overview" ? 8.6 : mode === "topics" ? 9.6 : 11;
  const rankedLeaves = [...layout.leaves].sort((a, b) => {
    const stateA = states[a.id] ?? "content_not_ready";
    const stateB = states[b.id] ?? "content_not_ready";
    return (
      conceptLabelPriority(stateA, selectedId === a.id) -
      conceptLabelPriority(stateB, selectedId === b.id)
    );
  });
  const placedConceptIds = new Set<string>();

  for (const leaf of rankedLeaves) {
    const concept = conceptsById.get(leaf.id);
    if (!concept) {
      continue;
    }
    const state = states[leaf.id] ?? "content_not_ready";
    const selected = selectedId === leaf.id;
    const important =
      selected ||
      state === "in_progress" ||
      state === "mastered" ||
      state === "available";
    const clusterSize = layout.leaves.filter(
      (item) => item.clusterId === leaf.clusterId,
    ).length;
    if (mode === "overview" && !important) {
      continue;
    }
    if (
      mode === "topics" &&
      !important &&
      clusterSize > 1
    ) {
      continue;
    }
    if (input.focusedDomain && leaf.domainLabel !== input.focusedDomain) {
      continue;
    }
    if (input.focusedClusterId && leaf.clusterId !== input.focusedClusterId) {
      continue;
    }
    if (!inView(leaf.x, leaf.y, 18)) {
      continue;
    }

    const dist = 12 + conceptFont * 0.5;
    const ox = leaf.outwardX || 1;
    const oy = leaf.outwardY || -0.4;
    const anchorFor = (x: number): KnowledgeTreePlacedLabel["anchor"] =>
      x < leaf.x - 2 ? "end" : x > leaf.x + 2 ? "start" : "middle";
    const candidates = [
      { x: leaf.x + ox * dist, y: leaf.y + oy * dist - 2 },
      { x: leaf.x + ox * dist, y: leaf.y + oy * dist - conceptFont },
      { x: leaf.x - ox * (dist * 0.7), y: leaf.y + oy * dist },
      { x: leaf.x + ox * (dist + 8), y: leaf.y - conceptFont * 0.15 },
      { x: leaf.x, y: leaf.y - dist - 3 },
      { x: leaf.x, y: leaf.y + dist + 2 },
      { x: leaf.x + ox * dist * 1.45, y: leaf.y + oy * dist * 0.35 },
    ];

    const placedConcept = candidates.some((candidate) =>
      tryPlace({
        id: `concept:${leaf.id}`,
        kind: "concept",
        text: concept.title,
        x: candidate.x,
        y: candidate.y,
        anchor: anchorFor(candidate.x),
        fontSize: selected ? conceptFont + 0.5 : conceptFont,
        fill: selected ? "#0e4450" : "#14343d",
      }),
    );

    if (!placedConcept && selected) {
      tryPlace({
        id: `concept:${leaf.id}`,
        kind: "concept",
        text: concept.title,
        x: leaf.x + ox * (dist + 14),
        y: leaf.y - 5,
        anchor: anchorFor(leaf.x + ox * (dist + 14)),
        fontSize: conceptFont,
        fill: "#0e4450",
      });
    }

    if (placed.some((label) => label.id === `concept:${leaf.id}`)) {
      placedConceptIds.add(leaf.id);
    }
  }

  if (mode === "concepts" && viewScale >= 1.15) {
    const skillFont = 7.8;
    for (const leaf of rankedLeaves) {
      if (!placedConceptIds.has(leaf.id)) {
        continue;
      }
      const concept = conceptsById.get(leaf.id);
      if (!concept || concept.skillTitles.length === 0) {
        continue;
      }
      const selected = selectedId === leaf.id;
      const state = states[leaf.id] ?? "content_not_ready";
      if (!selected && state !== "in_progress" && state !== "mastered") {
        continue;
      }
      const ox = leaf.outwardX || 1;
      const oy = leaf.outwardY || -0.4;
      concept.skillTitles.slice(0, 3).forEach((title, skillIndex) => {
        tryPlace({
          id: `skill:${leaf.id}:${skillIndex}`,
          kind: "skill",
          text: title,
          x: leaf.x + ox * (18 + skillIndex * 2),
          y: leaf.y + oy * 18 + 10 + skillIndex * (skillFont + 2),
          anchor: leaf.x + ox * 18 < leaf.x ? "end" : "start",
          fontSize: skillFont,
          fill: "#5a7480",
        });
      });
    }
  }

  return placed;
}

export function nearestConceptInDirection(
  fromId: string,
  direction: "ArrowUp" | "ArrowDown" | "ArrowLeft" | "ArrowRight",
  layout: KnowledgeTreeLayout,
): string | undefined {
  const origin = layout.leaves.find((leaf) => leaf.id === fromId);
  if (!origin) {
    return undefined;
  }

  let bestId: string | undefined;
  let bestDistance = Number.POSITIVE_INFINITY;

  for (const leaf of layout.leaves) {
    if (leaf.id === fromId) {
      continue;
    }

    const dx = leaf.x - origin.x;
    const dy = leaf.y - origin.y;
    const aligned =
      direction === "ArrowLeft"
        ? dx < -8
        : direction === "ArrowRight"
          ? dx > 8
          : direction === "ArrowUp"
            ? dy < -8
            : dy > 8;

    if (!aligned) {
      continue;
    }

    const primary =
      direction === "ArrowLeft" || direction === "ArrowRight"
        ? Math.abs(dx) + Math.abs(dy) * 2
        : Math.abs(dy) + Math.abs(dx) * 2;

    if (primary < bestDistance) {
      bestDistance = primary;
      bestId = leaf.id;
    }
  }

  return bestId;
}
