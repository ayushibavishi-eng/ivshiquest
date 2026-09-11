"use client";

import { IvshiButterfly } from "@/components/ivshi/IvshiButterfly";
import {
  cubicPath,
  cubicPoint,
  KNOWLEDGE_TREE_NODE_STATE_LABELS,
  type KnowledgeTreeFocus,
  type KnowledgeTreeFoliage,
  type KnowledgeTreeGraph,
  type KnowledgeTreeLayout,
  type KnowledgeTreeLeaf,
  type KnowledgeTreeNodeState,
  type KnowledgeTreePlacedLabel,
  type KnowledgeTreeWood,
} from "@/domain/knowledge-tree";
import {
  placeMagicalTreeLabels,
  type MagicalLabelMode,
} from "@/domain/living-tree-layout";
import { cn } from "@/lib/cn";
import "./living-tree.css";

type LivingTreeProps = {
  graphs: KnowledgeTreeGraph[];
  layout: KnowledgeTreeLayout;
  states: Record<string, KnowledgeTreeNodeState>;
  selectedId: string | null;
  focus: KnowledgeTreeFocus;
  labelMode: MagicalLabelMode;
  viewScale: number;
  visible?: { left: number; top: number; right: number; bottom: number };
  onSelectConcept: (conceptId: string) => void;
  onSelectSubject: (subject: KnowledgeTreeLeaf["subjectId"]) => void;
  onSelectDomain: (subject: KnowledgeTreeLeaf["subjectId"], label: string) => void;
  onSelectCluster: (clusterId: string) => void;
};

function svgNumber(value: number) {
  return value.toFixed(4);
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function cubicTangent(
  cubic: KnowledgeTreeWood["cubic"],
  t: number,
) {
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

function hash01(value: string): number {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return ((hash >>> 0) % 1000) / 1000;
}

function ribbonPath(
  cubic: KnowledgeTreeWood["cubic"],
  startWidth: number,
  endWidth: number,
  samples = 16,
  seed = "",
) {
  const left: Array<{ x: number; y: number }> = [];
  const right: Array<{ x: number; y: number }> = [];
  for (let index = 0; index <= samples; index += 1) {
    const t = index / samples;
    const point = cubicPoint(cubic, t);
    const tangent = cubicTangent(cubic, t);
    const length = Math.sqrt(tangent.x * tangent.x + tangent.y * tangent.y) || 1;
    const nx = -tangent.y / length;
    const ny = tangent.x / length;
    const width = lerp(startWidth, endWidth, t) / 2;
    const wobble = seed
      ? (hash01(`${seed}:${String(index)}`) - 0.5) * width * 0.28
      : 0;
    left.push({
      x: point.x + nx * (width + wobble),
      y: point.y + ny * (width + wobble),
    });
    right.push({
      x: point.x - nx * (width - wobble * 0.35),
      y: point.y - ny * (width - wobble * 0.35),
    });
  }
  const start = left[0];
  if (!start) {
    return "";
  }
  const parts = [`M ${svgNumber(start.x)} ${svgNumber(start.y)}`];
  for (const point of left.slice(1)) {
    parts.push(`L ${svgNumber(point.x)} ${svgNumber(point.y)}`);
  }
  for (const point of [...right].reverse()) {
    parts.push(`L ${svgNumber(point.x)} ${svgNumber(point.y)}`);
  }
  parts.push("Z");
  return parts.join(" ");
}

export function LivingTree({
  graphs,
  layout,
  states,
  selectedId,
  focus,
  labelMode,
  viewScale,
  visible,
  onSelectConcept,
  onSelectSubject,
  onSelectDomain,
  onSelectCluster,
}: LivingTreeProps) {
  const perchLeaf =
    layout.leaves.find((leaf) => states[leaf.id] === "in_progress") ??
    layout.leaves.find((leaf) => states[leaf.id] === "mastered");
  const focusedSubject =
    focus.kind === "subject"
      ? focus.subject
      : focus.kind === "domain"
        ? focus.subject
        : focus.kind === "cluster"
          ? layout.leaves.find((leaf) => leaf.clusterId === focus.id)?.subjectId
          : undefined;
  const focusedDomain =
    focus.kind === "domain"
      ? focus.label
      : focus.kind === "cluster"
        ? layout.leaves.find((leaf) => leaf.clusterId === focus.id)?.domainLabel
        : undefined;
  const focusedClusterId = focus.kind === "cluster" ? focus.id : undefined;
  const labels = placeMagicalTreeLabels({
    layout,
    graphs,
    states,
    mode: labelMode,
    selectedId,
    focusedSubject,
    focusedDomain,
    focusedClusterId,
    visible,
  });
  const conceptsById = new Map(
    graphs.flatMap((graph) => graph.concepts).map((concept) => [concept.id, concept]),
  );

  return (
    <div
      className="relative"
      style={{ width: layout.width, height: layout.height }}
    >
      <svg
        width={layout.width}
        height={layout.height}
        viewBox={`0 0 ${layout.width} ${layout.height}`}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <defs>
          <linearGradient id="kt-sky" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#eef7fa" />
            <stop offset="32%" stopColor="#d5eef4" />
            <stop offset="62%" stopColor="#c5e4dc" />
            <stop offset="82%" stopColor="#ead9c2" />
            <stop offset="100%" stopColor="#dcc4a4" />
          </linearGradient>
          <linearGradient id="kt-water" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#8fc4ce" stopOpacity="0.22" />
            <stop offset="40%" stopColor="#4f93a6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#2a6276" stopOpacity="0.52" />
          </linearGradient>
          <linearGradient id="kt-sand" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#f0e0c8" />
            <stop offset="55%" stopColor="#e2c9a4" />
            <stop offset="100%" stopColor="#c9a87a" />
          </linearGradient>
          <linearGradient id="kt-bark" x1="0" x2="1" y1="0" y2="0.2">
            <stop offset="0%" stopColor="#2c1a12" />
            <stop offset="28%" stopColor="#5a3826" />
            <stop offset="58%" stopColor="#8a5a3c" />
            <stop offset="82%" stopColor="#6b432e" />
            <stop offset="100%" stopColor="#3a2418" />
          </linearGradient>
          <linearGradient id="kt-root" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#6a4330" />
            <stop offset="100%" stopColor="#2c1a12" />
          </linearGradient>
          <radialGradient id="kt-glow" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#fff6e0" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#fff6e0" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="kt-horizon" cx="50%" cy="100%" r="72%">
            <stop offset="0%" stopColor="#b7dde4" stopOpacity="0.38" />
            <stop offset="100%" stopColor="#b7dde4" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="kt-canopy-haze" cx="50%" cy="40%" r="62%">
            <stop offset="0%" stopColor="#dcead4" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#dcead4" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width={layout.width} height={layout.height} fill="url(#kt-sky)" />
        <ellipse
          cx={layout.trunkX}
          cy={layout.groundY - 240}
          rx={Math.min(layout.width * 0.48, 420)}
          ry="190"
          fill="url(#kt-horizon)"
        />
        <ellipse
          cx={layout.trunkX}
          cy={Math.max(layout.groundY - 420, 80)}
          rx={Math.min(layout.width * 0.36, 300)}
          ry="170"
          fill="url(#kt-canopy-haze)"
        />
        <Ground layout={layout} />

        {layout.motes.map((mote) => (
          <circle
            key={mote.id}
            cx={svgNumber(mote.x)}
            cy={svgNumber(mote.y)}
            r={svgNumber(mote.r)}
            fill="#fff8e8"
            opacity={mote.opacity}
          />
        ))}

        {layout.wood
          .filter((item) => item.kind === "root")
          .map((item) => (
            <WoodRibbon
              key={item.id}
              wood={item}
              fill="url(#kt-root)"
              muted={isWoodMuted(item, focus, focusedSubject, focusedDomain)}
              samples={18}
            />
          ))}

        {layout.wood
          .filter((item) => item.kind === "trunk")
          .map((item) => (
            <WoodRibbon
              key={item.id}
              wood={item}
              fill="url(#kt-bark)"
              muted={false}
              samples={22}
            />
          ))}

        {layout.foliage
          .filter((blob) => blob.layer !== "cluster")
          .map((blob) => (
            <FoliageBlob
              key={blob.id}
              blob={blob}
              muted={isPartMuted(
                blob.subjectId,
                blob.domainLabel,
                blob.clusterId,
                focus,
              )}
            />
          ))}

        {layout.wood
          .filter((item) => item.kind === "branch" || item.kind === "subbranch")
          .map((item) => (
            <WoodRibbon
              key={item.id}
              wood={item}
              fill="url(#kt-bark)"
              muted={isWoodMuted(item, focus, focusedSubject, focusedDomain)}
              samples={16}
            />
          ))}

        {layout.wood
          .filter((item) => item.kind === "twig")
          .map((item) => (
            <WoodRibbon
              key={item.id}
              wood={item}
              fill="#6a4330"
              muted={isWoodMuted(item, focus, focusedSubject, focusedDomain)}
              samples={12}
            />
          ))}

        {layout.foliage
          .filter((blob) => blob.layer === "cluster")
          .map((blob) => (
            <FoliageBlob
              key={blob.id}
              blob={blob}
              muted={isPartMuted(
                blob.subjectId,
                blob.domainLabel,
                blob.clusterId,
                focus,
              )}
            />
          ))}

        {layout.ornaments.map((item) => (
          <Ornament key={item.id} item={item} />
        ))}

        {layout.leaves.map((leaf) => {
          const state = states[leaf.id] ?? "content_not_ready";
          return (
            <g
              key={`stem-${leaf.id}`}
              opacity={
                isPartMuted(leaf.subjectId, leaf.domainLabel, leaf.clusterId, focus)
                  ? 0.2
                  : 0.8
              }
            >
              <line
                x1={svgNumber(leaf.stemX)}
                y1={svgNumber(leaf.stemY)}
                x2={svgNumber(leaf.x)}
                y2={svgNumber(leaf.y)}
                stroke="#6a4330"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
              {state === "mastered" ? (
                <circle
                  cx={svgNumber(leaf.x)}
                  cy={svgNumber(leaf.y)}
                  r="11"
                  fill="url(#kt-glow)"
                />
              ) : null}
            </g>
          );
        })}

        {layout.leaves.map((leaf) => {
          const state = states[leaf.id] ?? "content_not_ready";
          const concept = conceptsById.get(leaf.id);
          if (!concept) {
            return null;
          }
          return (
            <g
              key={leaf.id}
              transform={`translate(${svgNumber(leaf.x)} ${svgNumber(leaf.y)}) rotate(${svgNumber(leaf.rotation)})`}
              opacity={
                isPartMuted(leaf.subjectId, leaf.domainLabel, leaf.clusterId, focus)
                  ? 0.2
                  : 1
              }
            >
              <GrowthMark
                state={state}
                selected={selectedId === leaf.id}
              />
            </g>
          );
        })}
      </svg>

      <div className="absolute inset-0">
        {perchLeaf ? (
          <div
            className="pointer-events-none absolute z-[1]"
            style={{
              left: `${svgNumber(perchLeaf.x + 10)}px`,
              top: `${svgNumber(perchLeaf.y - 28)}px`,
            }}
          >
            <IvshiButterfly size={28} decorative />
          </div>
        ) : null}

        {layout.wood
          .filter((item) => {
            if (labelMode === "overview") {
              return item.kind === "branch";
            }
            if (labelMode === "domains") {
              return (
                item.kind === "subbranch" &&
                item.subjectId === focusedSubject
              );
            }
            if (labelMode === "topics") {
              return (
                item.kind === "twig" &&
                item.subjectId === focusedSubject &&
                item.domainLabel === focusedDomain
              );
            }
            return false;
          })
          .map((item) => (
            <button
              key={`hit-${item.id}`}
              type="button"
              data-tree-interactive="true"
              aria-hidden="true"
              tabIndex={-1}
              className="absolute h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                left: `${svgNumber(item.labelPoint.x)}px`,
                top: `${svgNumber(item.labelPoint.y)}px`,
              }}
              onPointerDown={(event) => {
                event.stopPropagation();
              }}
              onClick={() => {
                if (item.kind === "twig" && item.clusterId) {
                  onSelectCluster(item.clusterId);
                  return;
                }
                if (item.kind === "branch" && item.subjectId) {
                  onSelectSubject(item.subjectId);
                  return;
                }
                if (item.subjectId && item.domainLabel) {
                  onSelectDomain(item.subjectId, item.domainLabel);
                }
              }}
            />
          ))}

        {labelMode === "concepts"
          ? layout.leaves.map((leaf) => {
              const concept = conceptsById.get(leaf.id);
              const state = states[leaf.id] ?? "content_not_ready";
              if (!concept) {
                return null;
              }
              if (focusedClusterId && leaf.clusterId !== focusedClusterId) {
                return null;
              }
              if (focusedSubject && leaf.subjectId !== focusedSubject) {
                return null;
              }
              if (focusedDomain && leaf.domainLabel !== focusedDomain) {
                return null;
              }
              return (
                <button
                  key={`hit-leaf-${leaf.id}`}
                  type="button"
                  data-tree-interactive="true"
                  aria-current={selectedId === leaf.id ? "true" : undefined}
                  aria-label={`${concept.title}, ${KNOWLEDGE_TREE_NODE_STATE_LABELS[state]}`}
                  className="absolute z-[4] h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{
                    left: `${svgNumber(leaf.x)}px`,
                    top: `${svgNumber(leaf.y)}px`,
                  }}
                  onPointerDown={(event) => {
                    event.stopPropagation();
                  }}
                  onClick={() => {
                    onSelectConcept(leaf.id);
                  }}
                />
              );
            })
          : null}

        {labels.map((label) => (
          <TreeSignpost
            key={label.id}
            label={label}
            viewScale={viewScale}
            onActivate={() => {
              activateLabel(
                label,
                onSelectSubject,
                onSelectDomain,
                onSelectCluster,
                onSelectConcept,
              );
            }}
          />
        ))}
      </div>
    </div>
  );
}

function activateLabel(
  label: KnowledgeTreePlacedLabel,
  onSelectSubject: LivingTreeProps["onSelectSubject"],
  onSelectDomain: LivingTreeProps["onSelectDomain"],
  onSelectCluster: LivingTreeProps["onSelectCluster"],
  onSelectConcept: LivingTreeProps["onSelectConcept"],
) {
  if (label.kind === "subject") {
    const subject = label.id.slice("subject:".length);
    if (subject === "math" || subject === "science" || subject === "english") {
      onSelectSubject(subject);
    }
    return;
  }
  if (label.kind === "domain") {
    const rest = label.id.slice("domain:".length);
    const split = rest.indexOf(":");
    const subject = rest.slice(0, split);
    const domain = rest.slice(split + 1);
    if (subject === "math" || subject === "science" || subject === "english") {
      onSelectDomain(subject, domain);
    }
    return;
  }
  if (label.kind === "topic") {
    onSelectCluster(label.id.slice("topic:".length));
    return;
  }
  if (label.kind === "concept") {
    onSelectConcept(label.id.slice("concept:".length));
  }
}

function TreeSignpost({
  label,
  viewScale,
  onActivate,
}: {
  label: KnowledgeTreePlacedLabel;
  viewScale: number;
  onActivate: () => void;
}) {
  const inverse = Math.min(2.55, Math.max(1, 1 / Math.max(viewScale, 0.22)));
  const origin =
    label.anchor === "end"
      ? "right bottom"
      : label.anchor === "middle"
        ? "center bottom"
        : "left bottom";
  const shift =
    label.anchor === "end"
      ? "-100%"
      : label.anchor === "middle"
        ? "-50%"
        : "0";
  const tickSide =
    label.anchor === "end"
      ? "right-3"
      : label.anchor === "middle"
        ? "left-1/2 -translate-x-1/2"
        : "left-3";

  return (
    <button
      type="button"
      data-tree-interactive="true"
      aria-label={
        label.kind === "subject"
          ? `${label.text} branch`
          : label.kind === "domain"
            ? `${label.text} domain`
            : label.kind === "topic"
              ? `${label.text} topic`
              : label.text
      }
      onPointerDown={(event) => {
        event.stopPropagation();
      }}
      onClick={onActivate}
      className={cn(
        "absolute z-[6] max-w-[12.5rem] text-left leading-snug text-[#0e4450] backdrop-blur-[6px]",
        label.anchor === "end" ? "text-right" : "text-left",
        label.kind === "subject" &&
          "min-h-12 rounded-full bg-[#f4e6c8]/95 px-4 py-2 text-[1.12rem] font-semibold tracking-[0.16em] shadow-[0_10px_22px_rgb(42_26_18_/_0.22)] ring-1 ring-[#8a5a3c]/50",
        label.kind === "domain" &&
          "min-h-11 rounded-[1.2rem_0.65rem_1.2rem_0.65rem] bg-[#f3e4c4]/93 px-3.5 py-1.5 text-[1rem] font-semibold tracking-[0.03em] shadow-[0_8px_18px_rgb(42_26_18_/_0.16)] ring-1 ring-[#8a5a3c]/38",
        label.kind === "topic" &&
          "min-h-10 rounded-[0.85rem_1.2rem_0.85rem_1.2rem] bg-[#f7eedc]/92 px-3 py-1.5 text-[0.9rem] font-semibold shadow-[0_6px_14px_rgb(42_26_18_/_0.12)] ring-1 ring-[#8a5a3c]/30",
        label.kind === "concept" &&
          "min-h-10 rounded-full bg-[#fbf7ee]/92 px-2.5 py-1 text-[0.84rem] font-medium shadow-[0_4px_10px_rgb(42_26_18_/_0.1)] ring-1 ring-[#0e4450]/14",
      )}
      style={{
        left: `${svgNumber(label.x)}px`,
        top: `${svgNumber(label.y)}px`,
        transform: `translate(${shift}, -118%) scale(${svgNumber(inverse)})`,
        transformOrigin: origin,
      }}
    >
      {label.text}
      <span
        aria-hidden="true"
        className={cn(
          "absolute top-full h-0 w-0 border-x-[6px] border-x-transparent border-t-[7px] border-t-[#8a5a3c]/45",
          tickSide,
        )}
      />
    </button>
  );
}

function Ground({ layout }: { layout: KnowledgeTreeLayout }) {
  const y = layout.groundY;
  const x = layout.trunkX;
  return (
    <g>
      <ellipse
        cx={x}
        cy={y + 26}
        rx="132"
        ry="28"
        fill="#3a2418"
        opacity="0.2"
      />
      <path
        d={`M 0 ${y + 28} C ${layout.width * 0.18} ${y - 18} ${layout.width * 0.52} ${y + 56} ${layout.width} ${y + 12} L ${layout.width} ${layout.height} L 0 ${layout.height} Z`}
        fill="url(#kt-sand)"
      />
      <path
        d={`M 0 ${y + 72} C ${layout.width * 0.24} ${y + 44} ${layout.width * 0.6} ${y + 118} ${layout.width} ${y + 64} L ${layout.width} ${layout.height} L 0 ${layout.height} Z`}
        fill="url(#kt-water)"
      />
      <path
        d={`M 0 ${y + 118} C ${layout.width * 0.32} ${y + 92} ${layout.width * 0.7} ${y + 152} ${layout.width} ${y + 108} L ${layout.width} ${layout.height} L 0 ${layout.height} Z`}
        fill="#24586a"
        opacity="0.32"
      />
      <ellipse
        cx={x + 90}
        cy={y + 86}
        rx="70"
        ry="8"
        fill="#d7eef2"
        opacity="0.16"
      />
      <ellipse
        cx={x - 120}
        cy={y + 98}
        rx="54"
        ry="6"
        fill="#d7eef2"
        opacity="0.12"
      />
    </g>
  );
}

function FoliageBlob({
  blob,
  muted,
}: {
  blob: KnowledgeTreeFoliage;
  muted: boolean;
}) {
  return (
    <ellipse
      cx={svgNumber(blob.x)}
      cy={svgNumber(blob.y)}
      rx={svgNumber(blob.rx)}
      ry={svgNumber(blob.ry)}
      transform={`rotate(${svgNumber(blob.rotation)} ${svgNumber(blob.x)} ${svgNumber(blob.y)})`}
      fill={blob.fill}
      opacity={muted ? blob.opacity * 0.16 : blob.opacity}
    />
  );
}

function WoodRibbon({
  wood,
  fill,
  muted,
  samples = 16,
}: {
  wood: KnowledgeTreeWood;
  fill: string;
  muted: boolean;
  samples?: number;
}) {
  const start = wood.startWidth ?? wood.width;
  const end = wood.endWidth ?? Math.max(wood.width * 0.45, 2);
  return (
    <g opacity={muted ? 0.14 : 1}>
      <path
        d={ribbonPath(wood.cubic, start, end, samples, wood.id)}
        fill={fill}
        stroke="#2a1a12"
        strokeWidth={wood.kind === "trunk" ? 1.4 : 0.55}
        strokeLinejoin="round"
      />
      {wood.kind === "trunk" ? (
        <path
          d={cubicPath(wood.cubic)}
          fill="none"
          stroke="#fff1d4"
          strokeWidth="2.1"
          opacity="0.2"
        />
      ) : null}
    </g>
  );
}

function Ornament({
  item,
}: {
  item: KnowledgeTreeLayout["ornaments"][number];
}) {
  return (
    <g
      transform={`translate(${svgNumber(item.x)} ${svgNumber(item.y)}) rotate(${svgNumber(item.rotation)}) scale(${svgNumber(item.scale)})`}
    >
      {item.kind === "moss" ? (
        <ellipse cx="0" cy="0" rx="5.5" ry="2.4" fill="#4f7d5c" opacity="0.55" />
      ) : null}
      {item.kind === "leaf" ? (
        <path
          d="M0 5 C4 2 5 -2 0 -7 C-5 -2 -4 2 0 5 Z"
          fill="#5d8a68"
          opacity="0.7"
        />
      ) : null}
      {item.kind === "blossom" ? (
        <g>
          <circle cx="0" cy="-2.2" r="2.1" fill="#e7b7c8" />
          <circle cx="2" cy="1" r="2.1" fill="#f0c9d4" />
          <circle cx="-2" cy="1" r="2.1" fill="#e7b7c8" />
          <circle cx="0" cy="0" r="1.3" fill="#f7e7c6" />
        </g>
      ) : null}
    </g>
  );
}

function GrowthMark({
  state,
  selected,
}: {
  state: KnowledgeTreeNodeState;
  selected: boolean;
}) {
  const stroke = selected ? "#c05632" : "#3a2418";
  const width = selected ? 1.5 : 0.85;

  return (
    <g transform="scale(1.35)">
      {state === "content_not_ready" ? (
        <ellipse
          cx="0"
          cy="-1"
          rx="2.2"
          ry="3.4"
          fill="#d5cbb8"
          stroke="#b7ad9a"
          strokeWidth={width}
          opacity="0.7"
        />
      ) : null}
      {state === "locked" ? (
        <ellipse
          cx="0"
          cy="-1.2"
          rx="2.8"
          ry="4.6"
          fill="#8a7a6a"
          stroke={stroke}
          strokeWidth={width}
        />
      ) : null}
      {state === "available" ? (
        <g>
          <circle cx="0" cy="-1" r="6.5" fill="#fff6e0" opacity="0.35" />
          <ellipse
            cx="0"
            cy="-1.4"
            rx="3.4"
            ry="5.6"
            fill="#2f8f7c"
            stroke={stroke}
            strokeWidth={width}
          />
          <ellipse cx="0" cy="-2.2" rx="1.2" ry="2.2" fill="#7fd0b8" />
        </g>
      ) : null}
      {state === "in_progress" ? (
        <g>
          <path
            d="M-7 3 C-6 -2 -2 -6 0 -1 C2 -6 6 -2 7 3"
            fill="#7eab7c"
            stroke={stroke}
            strokeWidth={width}
          />
          <path d="M-3.5 -1 C-4 -6 0 -9 0 -2 Z" fill="#e7b7c8" stroke={stroke} strokeWidth={width} />
          <path d="M3.5 -1 C4 -6 0 -9 0 -2 Z" fill="#f0c9d4" stroke={stroke} strokeWidth={width} />
          <path d="M0 1 C-2 -5 2 -5 0 1 Z" fill="#f4d4c4" stroke={stroke} strokeWidth={width} />
          <circle cx="0" cy="-0.4" r="1.5" fill="#f7e7c6" />
        </g>
      ) : null}
      {state === "mastered" ? (
        <g>
          <circle cx="0" cy="0" r="8.5" fill="#fff6e0" opacity="0.28" />
          <ellipse cx="0" cy="1.8" rx="4.6" ry="5.4" fill="#c05632" stroke={stroke} strokeWidth={width} />
          <ellipse cx="0" cy="1.2" rx="2.8" ry="3.4" fill="#db7a4e" />
          <path d="M0 -4 C1.4 -1 1.4 2 0 5" fill="none" stroke="#fff6e0" strokeWidth="0.9" opacity="0.7" />
        </g>
      ) : null}
    </g>
  );
}

function isPartMuted(
  subjectId: KnowledgeTreeLeaf["subjectId"] | undefined,
  domainLabel: string | undefined,
  clusterId: string | undefined,
  focus: KnowledgeTreeFocus,
) {
  if (focus.kind === "tree") {
    return false;
  }
  if (focus.kind === "subject") {
    return subjectId !== focus.subject;
  }
  if (focus.kind === "domain") {
    return subjectId !== focus.subject || domainLabel !== focus.label;
  }
  if (focus.kind === "cluster") {
    return clusterId !== focus.id;
  }
  return false;
}

function isWoodMuted(
  wood: KnowledgeTreeWood,
  focus: KnowledgeTreeFocus,
  focusedSubject?: KnowledgeTreeLeaf["subjectId"],
  focusedDomain?: string,
) {
  if (focus.kind === "tree" || wood.kind === "trunk" || wood.kind === "root") {
    return false;
  }
  if (focus.kind === "subject") {
    return wood.subjectId !== focus.subject;
  }
  if (focus.kind === "domain") {
    if (wood.kind === "branch") {
      return wood.subjectId !== focus.subject;
    }
    return wood.subjectId !== focus.subject || wood.domainLabel !== focus.label;
  }
  if (focus.kind === "cluster") {
    if (wood.kind === "branch") {
      return Boolean(focusedSubject) && wood.subjectId !== focusedSubject;
    }
    if (wood.kind === "subbranch") {
      return Boolean(focusedDomain) && wood.domainLabel !== focusedDomain;
    }
    return wood.clusterId !== focus.id;
  }
  return false;
}
