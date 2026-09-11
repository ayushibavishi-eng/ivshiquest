import { cn } from "@/lib/cn";
import "./explore-investigation.css";

export const PLANT_KITCHEN_RECIPE = ["light", "water", "carbon-dioxide"] as const;

type PlantKitchenModelProps = {
  added: readonly string[];
  highlightStore?: boolean;
};

export function PlantKitchenModel({
  added,
  highlightStore = false,
}: PlantKitchenModelProps) {
  const has = (id: string) => added.includes(id);
  const cooking = PLANT_KITCHEN_RECIPE.every((id) => has(id));
  const storeOn = cooking || highlightStore;

  return (
    <svg
      className={cn("plant-kitchen", cooking && "is-cooking")}
      viewBox="0 0 280 320"
      role="img"
      aria-label={
        cooking
          ? "Sunlight, water, and carbon dioxide reach a green leaf. The leaf makes sugar, which is stored in a potato underground."
          : "A green leaf above ground and a potato stored in the soil below."
      }
    >
      <defs>
        <linearGradient id="plant-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#eef8fb" />
          <stop offset="58%" stopColor="#e7f2e8" />
          <stop offset="100%" stopColor="#eadcc8" />
        </linearGradient>
        <radialGradient id="plant-sun-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff6e0" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#fff6e0" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="280" height="320" rx="24" fill="url(#plant-sky)" />
      <rect x="0" y="214" width="280" height="106" fill="#e2d2b8" />
      <rect x="0" y="214" width="280" height="7" fill="#c5b396" opacity="0.45" />

      <circle cx="218" cy="44" r="34" fill="url(#plant-sun-glow)" />
      <circle cx="218" cy="44" r="15" fill="#f0c56d" />
      <text
        x="218"
        y="18"
        textAnchor="middle"
        fill="#8a6a28"
        fontSize="8"
        fontWeight="600"
        letterSpacing="0.16em"
      >
        SUNLIGHT
      </text>

      <g className={cn("plant-flow plant-beam", has("light") && "is-on")}>
        <line
          x1="200"
          y1="58"
          x2="168"
          y2="96"
          stroke="#e0b24a"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>

      <g className={cn("plant-flow", has("carbon-dioxide") && "is-on")}>
        <ellipse cx="46" cy="92" rx="20" ry="11" fill="#d7e8ee" />
        <ellipse cx="60" cy="86" rx="13" ry="8" fill="#e7f2f6" />
        <text
          x="50"
          y="74"
          textAnchor="middle"
          fill="#3d6e7a"
          fontSize="7"
          fontWeight="600"
          letterSpacing="0.06em"
        >
          CARBON DIOXIDE
        </text>
        <path
          d="M68 96 C 96 104, 118 112, 132 124"
          fill="none"
          stroke="#7aa0ac"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </g>

      <g className={cn("plant-flow", has("water") && "is-on")}>
        <path
          d="M44 168 C44 158 54 152 54 164 C54 174 44 178 44 168Z"
          fill="#6aa8b8"
        />
        <text
          x="44"
          y="190"
          textAnchor="middle"
          fill="#3d6e7a"
          fontSize="8"
          fontWeight="600"
          letterSpacing="0.16em"
        >
          WATER
        </text>
        <path
          d="M56 162 C 84 150, 112 138, 134 128"
          fill="none"
          stroke="#5a9eae"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </g>

      <ellipse
        className="plant-leaf-glow"
        cx="156"
        cy="128"
        rx="46"
        ry="38"
        fill="#fff6e0"
      />
      <path
        d="M156 86 C 198 104 206 142 176 164 C 164 174 148 172 138 160 C 116 132 124 98 156 86Z"
        fill="#5d9a78"
      />
      <path
        d="M156 90 C 154 118 150 146 148 168"
        fill="none"
        stroke="#3d6e58"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <text
        x="162"
        y="128"
        textAnchor="middle"
        fill="#f7fbf8"
        fontSize="8"
        fontWeight="700"
        letterSpacing="0.12em"
      >
        LEAF
      </text>
      <text
        x="162"
        y="140"
        textAnchor="middle"
        fill="#e7f4ea"
        fontSize="7"
        letterSpacing="0.14em"
      >
        KITCHEN
      </text>

      <line
        x1="148"
        y1="166"
        x2="148"
        y2="236"
        stroke="#4d7a5e"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <g className={cn("plant-sugar", cooking && "is-on")}>
        <rect
          x="178"
          y="118"
          width="36"
          height="20"
          rx="6"
          fill="#f7efe0"
          stroke="#c4a07a"
          strokeWidth="1"
        />
        <text
          x="196"
          y="132"
          textAnchor="middle"
          fill="#6a4e32"
          fontSize="8"
          fontWeight="700"
          letterSpacing="0.1em"
        >
          SUGAR
        </text>
      </g>

      <g className={cn("plant-store", storeOn && "is-on")}>
        <path
          d="M148 176 C 148 176 148 246 148 246"
          fill="none"
          stroke="#c4a07a"
          strokeWidth="2"
          strokeDasharray="4 6"
          strokeLinecap="round"
        />
      </g>

      <g className={cn("plant-soil", has("soil") && "is-on")}>
        <ellipse cx="148" cy="256" rx="72" ry="18" fill="#cbb892" opacity="0.7" />
      </g>

      <ellipse cx="112" cy="256" rx="16" ry="6" fill="#b08968" opacity="0.5" />
      <ellipse cx="184" cy="259" rx="14" ry="5" fill="#b08968" opacity="0.4" />
      <ellipse cx="148" cy="264" rx="30" ry="16" fill="#c4a07a" />
      <ellipse cx="148" cy="262" rx="20" ry="8" fill="#d8b896" opacity="0.45" />
      <text
        x="148"
        y="268"
        textAnchor="middle"
        fill="#5c3d28"
        fontSize="8"
        fontWeight="700"
        letterSpacing="0.1em"
      >
        POTATO
      </text>
      <text
        x="148"
        y="298"
        textAnchor="middle"
        fill="#6a5340"
        fontSize="8"
        fontWeight="600"
        letterSpacing="0.16em"
      >
        STORAGE
      </text>
    </svg>
  );
}
