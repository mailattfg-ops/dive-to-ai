"use client";
import { useTimelineScroll } from "@/hooks/useTimelineScroll";

export default function LearnTimeline({ steps }: any) {
  const { activeStep, dotPositions, containerRef, dotRefs } = useTimelineScroll(
    steps.length
  );

  return (
    <div
      ref={containerRef}
      className="relative mt-20 max-w-5xl mx-auto px-4 md:px-8 mb-8"
    >
      {/* Vertical line */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px] bg-[#EBD6FF]" />

      {/* Glow (active indicator) */}
      {dotPositions.length > 0 && (
        <div
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/4 md:-translate-x-1/2 md:-translate-y-1/3 transition-all duration-300"
          style={{ top: `${dotPositions[activeStep]}px` }}
        >
          <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#AB5DFF66]" />
        </div>
      )}

      {/* Timeline Items */}
      <div className="flex flex-col gap-12 relative z-10">
        {steps.map((s: any, i: number) => (
          <div
            key={i}
            className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-10"
          >
            {/* Days (Left Column) */}
            <div className="text-right text-[#A855F7] font-semibold text-sm md:text-lg leading-tight pr-2">
              {s.days}
            </div>

            {/* Dot */}
            <div
              ref={(el: any) => (dotRefs.current[i] = el)}
              className="w-4 h-4 bg-[#A855F7] rounded-full z-20 mx-auto"
            />

            {/* Content (Right Column) */}
            <div className="text-left pl-2">
              <h3 className="font-semibold font-sans text-lg md:text-2xl text-black">
                {s.title}
              </h3>
              {s.text && (
                <p className="text-sm md:text-base text-[#71717A] mt-1 leading-snug">
                  {s.text}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
