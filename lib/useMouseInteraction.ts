"use client";

import { useRef, useCallback, useEffect, useState } from "react";

function isTouchDevice() {
  if (typeof window === "undefined") return false;
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useParallaxMouse(intensity = 0.02) {
  const ref = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (isTouchDevice() || prefersReducedMotion()) return;
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) * intensity;
        const dy = (e.clientY - cy) * intensity;
        el.style.setProperty("--mouse-x", `${dx}px`);
        el.style.setProperty("--mouse-y", `${dy}px`);
      });
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("mousemove", handleMove);
    };
  }, [intensity]);

  return ref;
}

export function useTiltCard(maxRotate = 4) {
  const ref = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>(0);

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isTouchDevice() || prefersReducedMotion()) return;
      const el = ref.current;
      if (!el) return;

      cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        el.style.transform = `perspective(800px) rotateY(${x * maxRotate}deg) rotateX(${-y * maxRotate}deg) translateY(-4px)`;
      });
    },
    [maxRotate]
  );

  const handleLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(frameRef.current);
    el.style.transform = "";
  }, []);

  return { ref, handleMove, handleLeave };
}

export function useMagneticButton(strength = 0.3) {
  const ref = useRef<HTMLButtonElement>(null);
  const frameRef = useRef<number>(0);

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (isTouchDevice() || prefersReducedMotion()) return;
      const el = ref.current;
      if (!el) return;

      cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) * strength;
        const dy = (e.clientY - cy) * strength;
        el.style.transform = `translate(${dx}px, ${dy}px)`;
      });
    },
    [strength]
  );

  const handleLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(frameRef.current);
    el.style.transform = "";
  }, []);

  return { ref, handleMove, handleLeave };
}

export function useMouseGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || isTouchDevice() || prefersReducedMotion()) return;
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty("--glow-x", `${x}px`);
      el.style.setProperty("--glow-y", `${y}px`);
    };

    el.addEventListener("mousemove", handleMove, { passive: true });
    return () => el.removeEventListener("mousemove", handleMove);
  }, [mounted]);

  return ref;
}
