"use client";

import { useEffect, useRef, useState, useMemo } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Hydration-safe hook to trigger animations when element enters viewport.
 * Uses primitive threshold/rootMargin dependencies to prevent infinite re-render loops.
 */
export function useScrollAnimation({
  threshold = 0.15,
  rootMargin = '0px',
  triggerOnce = true,
}: ScrollAnimationOptions = {}) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    // Check if user prefers reduced motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(currentElement);

    return () => {
      observer.disconnect();
    };
  }, [hasMounted, threshold, rootMargin, triggerOnce]);

  return { elementRef, isVisible: hasMounted ? isVisible : false };
}

/**
 * Hydration-safe hook for staggered item animations in grids.
 */
export function useStaggerAnimation(itemCount: number, delay = 0.08) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const currentElement = containerRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(currentElement);

    return () => {
      observer.disconnect();
    };
  }, [hasMounted]);

  const getItemStyle = useMemo(() => {
    return (index: number) => ({
      transitionDelay: isVisible ? `${Math.min(index * delay, 0.8)}s` : '0s',
      transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      transitionDuration: '500ms',
    });
  }, [isVisible, delay]);

  return {
    containerRef,
    isVisible: hasMounted ? isVisible : false,
    getItemStyle,
  };
}
