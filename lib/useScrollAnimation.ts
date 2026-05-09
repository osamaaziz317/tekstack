import { useEffect, useRef, useState } from 'react';

/**
 * Hook to trigger animations when element comes into view
 * @param options - IntersectionObserver options
 * @returns ref to attach to element, and isVisible boolean
 */
export function useScrollAnimation(options = {}) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1,
      ...options,
    });

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return { elementRef, isVisible };
}

/**
 * Hook for staggered children animations
 */
export function useStaggerAnimation(itemCount: number, delay = 0.1) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1,
    });

    const currentElement = containerRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return {
    containerRef,
    isVisible,
    getItemStyle: (index: number) => ({
      transitionDelay: isVisible ? `${index * delay}s` : '0s',
    }),
  };
}
