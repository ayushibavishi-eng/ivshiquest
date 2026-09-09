export type Point = { x: number; y: number };

export const FLYER_SIZE_DESKTOP = 96;
export const FLYER_SIZE_MOBILE = 72;
export const FLYER_ASPECT = 1261 / 1247;

export function flyerDisplaySize() {
  const vw = window.innerWidth;
  if (vw < 640) {
    return Math.round(Math.min(80, Math.max(64, vw * 0.2)));
  }
  return Math.round(Math.min(96, Math.max(80, vw * 0.072)));
}

function flyerHeight(size: number) {
  return size * FLYER_ASPECT;
}

const KEEP_CLEAR_SELECTORS = [
  "#main article",
  "#main section",
  "#main header",
  "#main h1",
  "#main h2",
  "#main h3",
  "#main p",
  "#main fieldset",
  "#main button",
  "#main a",
  "#main .shadow-card",
  "nav[aria-label='Student']",
  "[data-ivshi-ask-fab]",
  "a[aria-label='Notifications']",
  "a[aria-label$=\"'s profile\"]",
  "#ask-ivshi-input",
];

type Rect = { x: number; y: number; w: number; h: number };

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function flightBounds(size: number) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const height = flyerHeight(size);
  return {
    minX: 12,
    maxX: Math.max(12, vw - size - 12),
    minY: 10,
    maxY: Math.max(10, vh - height - 176),
    vw,
    vh,
  };
}

function toRect(box: DOMRect, pad = 0): Rect {
  return {
    x: box.x - pad,
    y: box.y - pad,
    w: box.width + pad * 2,
    h: box.height + pad * 2,
  };
}

function overlaps(a: Rect, b: Rect) {
  return !(a.x + a.w < b.x || a.x > b.x + b.w || a.y + a.h < b.y || a.y > b.y + b.h);
}

function flyerBox(point: Point, size: number): Rect {
  const pad = Math.max(16, Math.round(size * 0.18));
  return {
    x: point.x - pad,
    y: point.y - pad,
    w: size + pad * 2,
    h: flyerHeight(size) + pad * 2,
  };
}

function collectObstacles(size: number): Rect[] {
  const pad = Math.max(18, Math.round(size * 0.14));
  const rects: Rect[] = [];

  document.querySelectorAll(KEEP_CLEAR_SELECTORS.join(",")).forEach((node) => {
    if (!(node instanceof HTMLElement)) {
      return;
    }
    const box = node.getBoundingClientRect();
    if (box.width < 8 || box.height < 8) {
      return;
    }
    if (box.bottom < -40 || box.top > window.innerHeight + 40) {
      return;
    }
    rects.push(toRect(box, pad));
  });

  const column = contentColumn();
  if (column) {
    rects.push(toRect(column, Math.max(20, Math.round(size * 0.12))));
  }

  return rects;
}

function isOpen(point: Point, size: number, obstacles: Rect[], bounds: ReturnType<typeof flightBounds>) {
  if (
    point.x < bounds.minX ||
    point.x > bounds.maxX ||
    point.y < bounds.minY ||
    point.y > bounds.maxY
  ) {
    return false;
  }

  const body = flyerBox(point, size);
  return !obstacles.some((rect) => overlaps(body, rect));
}

function contentColumn() {
  const nodes = document.querySelectorAll(
    "#main header, #main article, #main section, #main .shadow-card, #main fieldset",
  );
  let x1 = Infinity;
  let y1 = Infinity;
  let x2 = -Infinity;
  let y2 = -Infinity;

  nodes.forEach((node) => {
    if (!(node instanceof HTMLElement)) {
      return;
    }
    const box = node.getBoundingClientRect();
    if (box.width < 8 || box.height < 8) {
      return;
    }
    x1 = Math.min(x1, box.left);
    y1 = Math.min(y1, box.top);
    x2 = Math.max(x2, box.right);
    y2 = Math.max(y2, box.bottom);
  });

  if (x1 === Infinity) {
    return document.getElementById("main")?.getBoundingClientRect();
  }

  return new DOMRect(x1, y1, x2 - x1, y2 - y1);
}

function allowedRanges(size: number, bounds: ReturnType<typeof flightBounds>) {
  const main = contentColumn();
  const gap = Math.max(22, Math.round(size * 0.16));
  const ranges: { minX: number; maxX: number; minY: number; maxY: number }[] = [];

  if (main) {
    const leftMaxX = Math.min(bounds.maxX, main.left - gap - size);
    if (leftMaxX - bounds.minX >= 8) {
      ranges.push({
        minX: bounds.minX,
        maxX: leftMaxX,
        minY: bounds.minY,
        maxY: bounds.maxY,
      });
    }

    const rightMinX = Math.max(bounds.minX, main.right + gap);
    if (bounds.maxX - rightMinX >= 8) {
      ranges.push({
        minX: rightMinX,
        maxX: bounds.maxX,
        minY: bounds.minY,
        maxY: bounds.maxY,
      });
    }

    const oceanMinY = Math.max(bounds.minY, Math.min(bounds.maxY, main.bottom + gap));
    if (bounds.maxY - oceanMinY >= 8) {
      ranges.push({
        minX: bounds.minX,
        maxX: bounds.maxX,
        minY: oceanMinY,
        maxY: bounds.maxY,
      });
    }

    const skyMaxY = Math.min(bounds.maxY, main.top - gap - flyerHeight(size));
    if (skyMaxY - bounds.minY >= 8) {
      ranges.push({
        minX: bounds.minX,
        maxX: bounds.maxX,
        minY: bounds.minY,
        maxY: skyMaxY,
      });
    }
  }

  return ranges;
}

function sampleRange(range: { minX: number; maxX: number; minY: number; maxY: number }): Point {
  return {
    x: range.minX + Math.random() * Math.max(0, range.maxX - range.minX),
    y: range.minY + Math.random() * Math.max(0, range.maxY - range.minY),
  };
}

function nearestSafePoint(point: Point, size: number): Point {
  const bounds = flightBounds(size);
  const obstacles = collectObstacles(size);
  const clamped = {
    x: clamp(point.x, bounds.minX, bounds.maxX),
    y: clamp(point.y, bounds.minY, bounds.maxY),
  };

  if (isOpen(clamped, size, obstacles, bounds)) {
    return clamped;
  }

  const ranges = allowedRanges(size, bounds);
  let best = clamped;
  let bestDist = Number.POSITIVE_INFINITY;

  ranges.forEach((range) => {
    const candidate = {
      x: clamp(point.x, range.minX, range.maxX),
      y: clamp(point.y, range.minY, range.maxY),
    };
    if (!isOpen(candidate, size, obstacles, bounds)) {
      return;
    }
    const dist = Math.hypot(candidate.x - point.x, candidate.y - point.y);
    if (dist < bestDist) {
      best = candidate;
      bestDist = dist;
    }
  });

  if (bestDist < Number.POSITIVE_INFINITY) {
    return best;
  }

  const pockets = skyPockets(size, bounds, obstacles);
  if (pockets.length > 0) {
    return pockets.reduce((closest, candidate) => {
      const closestDist = Math.hypot(closest.x - point.x, closest.y - point.y);
      const candidateDist = Math.hypot(candidate.x - point.x, candidate.y - point.y);
      return candidateDist < closestDist ? candidate : closest;
    });
  }

  return leastOverlapPoint(size, bounds, obstacles);
}

function overlapArea(a: Rect, b: Rect) {
  const x = Math.max(0, Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x));
  const y = Math.max(0, Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y));
  return x * y;
}

function leastOverlapPoint(
  size: number,
  bounds: ReturnType<typeof flightBounds>,
  obstacles: Rect[],
): Point {
  let best: Point = { x: bounds.minX, y: bounds.maxY };
  let bestArea = Number.POSITIVE_INFINITY;

  for (let col = 0; col <= 7; col += 1) {
    for (let row = 0; row <= 6; row += 1) {
      const candidate = {
        x: bounds.minX + ((bounds.maxX - bounds.minX) * col) / 7,
        y: bounds.minY + ((bounds.maxY - bounds.minY) * row) / 6,
      };
      const body = flyerBox(candidate, size);
      const area = obstacles.reduce((sum, rect) => sum + overlapArea(body, rect), 0);
      if (area < bestArea) {
        best = candidate;
        bestArea = area;
      }
    }
  }

  return best;
}

function skyPockets(
  size: number,
  bounds: ReturnType<typeof flightBounds>,
  obstacles: Rect[],
): Point[] {
  const ranges = allowedRanges(size, bounds);
  const points: Point[] = [];

  ranges.forEach((range) => {
    points.push({ x: range.minX, y: range.minY + (range.maxY - range.minY) * 0.2 });
    points.push({ x: range.minX, y: range.minY + (range.maxY - range.minY) * 0.55 });
    points.push({ x: range.maxX, y: range.minY + (range.maxY - range.minY) * 0.35 });
    points.push({ x: (range.minX + range.maxX) / 2, y: (range.minY + range.maxY) / 2 });
    points.push({ x: range.minX + 8, y: range.maxY });
    points.push({ x: range.maxX, y: range.maxY });
    for (let i = 0; i < 6; i += 1) {
      points.push(sampleRange(range));
    }
  });

  return points.filter((point) => isOpen(point, size, obstacles, bounds));
}

export function evadeContent(point: Point, size: number): Point {
  return nearestSafePoint(point, size);
}

export function pickOpenPoint(size: number, previous?: Point | null): Point {
  const bounds = flightBounds(size);
  const obstacles = collectObstacles(size);
  const minTravel = Math.max(120, size * 1.1);
  const ranges = allowedRanges(size, bounds);
  const candidates = skyPockets(size, bounds, obstacles);

  ranges.forEach((range) => {
    for (let i = 0; i < 8; i += 1) {
      candidates.push(sampleRange(range));
    }
  });

  const open = candidates.filter((point) => {
    if (!isOpen(point, size, obstacles, bounds)) {
      return false;
    }
    if (!previous) {
      return true;
    }
    return Math.hypot(point.x - previous.x, point.y - previous.y) >= minTravel;
  });

  const pool = open.length > 0 ? open : skyPockets(size, bounds, obstacles);

  if (pool.length > 0) {
    return pool[Math.floor(Math.random() * pool.length)] ?? pool[0];
  }

  return {
    x: bounds.minX,
    y: bounds.maxY,
  };
}

export function pickSupportPoint(size: number): Point {
  const bounds = flightBounds(size);
  const obstacles = collectObstacles(size);
  const anchor = document.querySelector<HTMLElement>(
    "[data-ivshi-anchor='task'], [data-ivshi-anchor='success']",
  );

  if (!anchor) {
    return pickOpenPoint(size);
  }

  const box = anchor.getBoundingClientRect();
  const nearby = [
    { x: box.right + 20, y: box.top - size * 0.45 },
    { x: box.left - size - 20, y: box.top - size * 0.25 },
    { x: bounds.maxX, y: clamp(box.top - 10, bounds.minY, bounds.maxY) },
    { x: bounds.minX, y: clamp(box.top - 10, bounds.minY, bounds.maxY) },
    { x: bounds.minX, y: bounds.maxY },
    { x: bounds.maxX, y: bounds.maxY },
  ];

  const clear = nearby.find((point) => isOpen(point, size, obstacles, bounds));
  return clear ?? pickOpenPoint(size);
}

export type FlightCurve = {
  from: Point;
  control: Point;
  to: Point;
};

function curveHitsContent(curve: FlightCurve, size: number, obstacles: Rect[], bounds: ReturnType<typeof flightBounds>) {
  for (let i = 1; i < 8; i += 1) {
    const point = bezierPoint(curve, i / 8);
    if (!isOpen(point, size, obstacles, bounds)) {
      return true;
    }
  }
  return false;
}

export function makeCurve(from: Point, to: Point, size: number): FlightCurve {
  const bounds = flightBounds(size);
  const obstacles = collectObstacles(size);
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const len = Math.hypot(dx, dy) || 1;
  const nx = -dy / len;
  const ny = dx / len;
  const bulge = (0.16 + Math.random() * 0.28) * len * (Math.random() > 0.5 ? 1 : -1);
  const control = nearestSafePoint(
    {
      x: (from.x + to.x) / 2 + nx * bulge,
      y: (from.y + to.y) / 2 + ny * bulge,
    },
    size,
  );

  let curve: FlightCurve = { from, control, to };
  if (curveHitsContent(curve, size, obstacles, bounds)) {
    const viaOcean = nearestSafePoint({ x: (from.x + to.x) / 2, y: bounds.maxY }, size);
    const viaSky = nearestSafePoint({ x: (from.x + to.x) / 2, y: bounds.minY }, size);
    const oceanCurve = { from, control: viaOcean, to };
    const skyCurve = { from, control: viaSky, to };
    if (!curveHitsContent(oceanCurve, size, obstacles, bounds)) {
      curve = oceanCurve;
    } else if (!curveHitsContent(skyCurve, size, obstacles, bounds)) {
      curve = skyCurve;
    } else {
      curve = { from, control: nearestSafePoint(from, size), to: nearestSafePoint(to, size) };
    }
  }

  return curve;
}

export function bezierPoint(curve: FlightCurve, t: number): Point {
  const u = 1 - t;
  return {
    x: u * u * curve.from.x + 2 * u * t * curve.control.x + t * t * curve.to.x,
    y: u * u * curve.from.y + 2 * u * t * curve.control.y + t * t * curve.to.y,
  };
}

export function bezierHeading(curve: FlightCurve, t: number) {
  const dx =
    2 * (1 - t) * (curve.control.x - curve.from.x) + 2 * t * (curve.to.x - curve.control.x);
  const dy =
    2 * (1 - t) * (curve.control.y - curve.from.y) + 2 * t * (curve.to.y - curve.control.y);
  return clamp((Math.atan2(dy, dx) * 180) / Math.PI * 0.55, -26, 26);
}

export function easeInOut(t: number) {
  return t * t * (3 - 2 * t);
}

export function cruiseDuration(from: Point, to: Point) {
  const distance = Math.hypot(to.x - from.x, to.y - from.y);
  return clamp(2800 + distance * 7.5, 3200, 7200);
}

export function restDuration() {
  return 1200 + Math.random() * 1600;
}
