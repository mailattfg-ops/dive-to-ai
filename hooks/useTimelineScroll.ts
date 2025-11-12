"use client";
import { useEffect, useState, useRef } from "react";

export function useTimelineScroll(length: number) {
  const [activeStep, setActiveStep] = useState(0);
  const [dotPositions, setDotPositions] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const updateDotPositions = () => {
      const containerTop = containerRef.current?.getBoundingClientRect().top || 0;
      const positions = dotRefs.current.map((dot) => {
        if (!dot) return 0;
        const rect = dot.getBoundingClientRect();
        return rect.top - containerTop;
      });
      setDotPositions(positions);
    };

    updateDotPositions();
    window.addEventListener("resize", updateDotPositions);
    return () => window.removeEventListener("resize", updateDotPositions);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const section = containerRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.bottom < 0 || rect.top > windowHeight) return;

      const progress = Math.min(
        Math.max(windowHeight / 2 - rect.top, 0),
        rect.height
      );

      const stepHeight = rect.height / length;
      const currentStep = Math.min(
        length - 1,
        Math.floor(progress / stepHeight)
      );

      setActiveStep(currentStep);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [length]);

  return { activeStep, dotPositions, containerRef, dotRefs };
}
