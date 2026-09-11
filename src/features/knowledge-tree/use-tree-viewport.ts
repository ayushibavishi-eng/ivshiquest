"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import type {
  KnowledgeTreeFocus,
  KnowledgeTreeLayout,
} from "@/domain/knowledge-tree";
import {
  fitLivingTreeView,
  livingTreeFocusBox,
} from "@/domain/knowledge-tree";

const MIN_SCALE = 0.16;
const MAX_SCALE = 2.6;

type View = {
  x: number;
  y: number;
  scale: number;
};

function clampScale(scale: number) {
  return Math.min(MAX_SCALE, Math.max(MIN_SCALE, scale));
}

const INITIAL_VIEW: View = { x: 0, y: 0, scale: 0.4 };

export function useTreeViewport(
  layout: KnowledgeTreeLayout,
  focus: KnowledgeTreeFocus,
  frame: "portrait" | "full" = "portrait",
) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<View>(INITIAL_VIEW);
  const [view, setViewState] = useState<View>(INITIAL_VIEW);
  const dragRef = useRef<{
    pointerId: number;
    startX: number;
    startY: number;
    originX: number;
    originY: number;
  } | null>(null);
  const pinchRef = useRef<{
    distance: number;
    view: View;
  } | null>(null);
  const pointersRef = useRef<Map<number, { x: number; y: number }>>(new Map());

  const setView = useCallback((next: View) => {
    const current = viewRef.current;
    if (
      current.x === next.x &&
      current.y === next.y &&
      current.scale === next.scale
    ) {
      return;
    }
    viewRef.current = next;
    setViewState(next);
  }, []);

  const fitFocus = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) {
      return;
    }
    setView(
      fitLivingTreeView(
        livingTreeFocusBox(layout, focus, frame),
        viewport.clientWidth,
        viewport.clientHeight,
        focus.kind === "tree" ? 20 : 28,
      ),
    );
  }, [focus, frame, layout, setView]);

  useEffect(() => {
    fitFocus();
  }, [fitFocus]);

  const zoomAt = useCallback(
    (clientX: number, clientY: number, nextScale: number) => {
      const viewport = viewportRef.current;
      if (!viewport) {
        return;
      }
      const rect = viewport.getBoundingClientRect();
      const cx = clientX - rect.left;
      const cy = clientY - rect.top;
      const scale = clampScale(nextScale);
      const current = viewRef.current;
      const contentX = (cx - current.x) / current.scale;
      const contentY = (cy - current.y) / current.scale;
      setView({
        scale,
        x: cx - contentX * scale,
        y: cy - contentY * scale,
      });
    },
    [setView],
  );

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) {
      return;
    }
    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      const factor = event.deltaY < 0 ? 1.08 : 0.92;
      zoomAt(event.clientX, event.clientY, viewRef.current.scale * factor);
    };
    viewport.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      viewport.removeEventListener("wheel", onWheel);
    };
  }, [zoomAt]);

  function onPointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    const target = event.target as HTMLElement | null;
    if (target?.closest("[data-tree-interactive]")) {
      return;
    }
    pointersRef.current.set(event.pointerId, {
      x: event.clientX,
      y: event.clientY,
    });
    if (pointersRef.current.size === 2) {
      const points = [...pointersRef.current.values()];
      const first = points[0];
      const second = points[1];
      if (first && second) {
        pinchRef.current = {
          distance: Math.hypot(second.x - first.x, second.y - first.y),
          view: { ...viewRef.current },
        };
      }
      dragRef.current = null;
      return;
    }
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      originX: viewRef.current.x,
      originY: viewRef.current.y,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function onPointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    if (pointersRef.current.has(event.pointerId)) {
      pointersRef.current.set(event.pointerId, {
        x: event.clientX,
        y: event.clientY,
      });
    }
    if (pointersRef.current.size === 2 && pinchRef.current) {
      const points = [...pointersRef.current.values()];
      const first = points[0];
      const second = points[1];
      if (!first || !second) {
        return;
      }
      const distance = Math.hypot(second.x - first.x, second.y - first.y);
      const midpointX = (first.x + second.x) / 2;
      const midpointY = (first.y + second.y) / 2;
      const viewport = event.currentTarget.getBoundingClientRect();
      const cx = midpointX - viewport.left;
      const cy = midpointY - viewport.top;
      const start = pinchRef.current.view;
      const scale = clampScale(
        start.scale * (distance / Math.max(pinchRef.current.distance, 1)),
      );
      const contentX = (cx - start.x) / start.scale;
      const contentY = (cy - start.y) / start.scale;
      setView({
        scale,
        x: cx - contentX * scale,
        y: cy - contentY * scale,
      });
      return;
    }
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) {
      return;
    }
    setView({
      x: drag.originX + (event.clientX - drag.startX),
      y: drag.originY + (event.clientY - drag.startY),
      scale: viewRef.current.scale,
    });
  }

  function onPointerUp(event: ReactPointerEvent<HTMLDivElement>) {
    pointersRef.current.delete(event.pointerId);
    if (dragRef.current?.pointerId === event.pointerId) {
      dragRef.current = null;
    }
    if (pointersRef.current.size < 2) {
      pinchRef.current = null;
    }
  }

  function zoomBy(factor: number) {
    const viewport = viewportRef.current;
    if (!viewport) {
      return;
    }
    const rect = viewport.getBoundingClientRect();
    zoomAt(
      rect.left + rect.width / 2,
      rect.top + rect.height / 2,
      viewRef.current.scale * factor,
    );
  }

  return {
    viewportRef,
    view,
    fitFocus,
    zoomBy,
    onPointerDown,
    onPointerMove,
    onPointerUp,
  };
}
