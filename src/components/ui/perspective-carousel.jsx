"use client";;
import * as React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const DEFAULT_TRANSITION = {
  type: "spring",
  bounce: 0.14,
  duration: 0.9,
};

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export function PerspectiveCarousel({
  items,
  activeIndex,
  defaultActiveIndex = 0,
  onActiveIndexChange,
  loop = false,
  slideWidth = 200,
  rotationStep = 60,
  inactiveScale = 0.85,
  transition = DEFAULT_TRANSITION,
  showControls = true,
  showDots = true,
  autoPlay = false,
  autoPlayInterval = 3000,
  autoPlayDirection = "forward",
  autoPlayDelay = 0,
  viewportClassName,
  slideClassName,
  imageClassName,
  labelClassName,
  controlsClassName,
  className,
  onKeyDown,
  tabIndex,
  ...props
}) {
  const maxIndex = Math.max(0, items.length - 1);
  const [uncontrolledIndex, setUncontrolledIndex] = React.useState(() => defaultActiveIndex);
  const currentIndex = activeIndex ?? uncontrolledIndex;
  const safeSlideWidth = Math.max(96, slideWidth);
  const safeInactiveScale = clamp(inactiveScale, 0.5, 1);

  const selectSlide = React.useCallback((nextIndex) => {
    if (!items.length) {
      return;
    }

    const resolvedIndex = loop
      ? nextIndex
      : clamp(nextIndex, 0, maxIndex);

    if (activeIndex === undefined) {
      setUncontrolledIndex(resolvedIndex);
    }

    onActiveIndexChange?.(resolvedIndex);
  }, [activeIndex, items.length, loop, maxIndex, onActiveIndexChange]);

  const currentIndexRef = React.useRef(currentIndex);
  React.useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  React.useEffect(() => {
    if (!autoPlay) return;
    
    let timer;
    const startInterval = () => {
      timer = setInterval(() => {
        if (autoPlayDirection === "backward") {
          selectSlide(currentIndexRef.current - 1);
        } else {
          selectSlide(currentIndexRef.current + 1);
        }
      }, autoPlayInterval);
    };

    let timeout;
    if (autoPlayDelay > 0) {
      timeout = setTimeout(() => {
        startInterval();
      }, autoPlayDelay);
    } else {
      startInterval();
    }

    return () => {
      if (timeout) clearTimeout(timeout);
      if (timer) clearInterval(timer);
    };
  }, [autoPlay, autoPlayInterval, autoPlayDelay, selectSlide, autoPlayDirection]);

  if (!items.length) {
    return null;
  }

  const isPreviousDisabled = !loop && currentIndex === 0;
  const isNextDisabled = !loop && currentIndex === maxIndex;
  const handleKeyDown = (event) => {
    onKeyDown?.(event);

    if (event.defaultPrevented) {
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      selectSlide(currentIndex - 1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      selectSlide(currentIndex + 1);
    }
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Perspective image carousel"
      tabIndex={tabIndex ?? 0}
      onKeyDown={handleKeyDown}
      className={cn("relative isolate h-full w-full overflow-hidden", className)}
      {...props}>
      <div
        className={cn("absolute inset-0 overflow-hidden", viewportClassName)}
        style={{ perspective: "1200px" }}>
        <div className="absolute left-1/2 top-1/2 flex h-full w-full items-center justify-center -translate-x-1/2 -translate-y-1/2">
          {Array.from({ length: 15 }).map((_, i) => {
            const offset = i - 7;
            const absoluteIndex = currentIndex + offset;
            
            if (!loop && (absoluteIndex < 0 || absoluteIndex > maxIndex)) return null;

            const itemIndex = ((absoluteIndex % items.length) + items.length) % items.length;
            const item = items[itemIndex];
            const isActive = offset === 0;

            return (
              <motion.div
                key={`slide-${absoluteIndex}`}
                className={cn("absolute flex w-fit flex-col items-center gap-3 will-change-transform", slideClassName)}
                initial={{ 
                  x: offset * safeSlideWidth, 
                  rotateY: -offset * rotationStep, 
                  scale: safeInactiveScale,
                  opacity: 0
                }}
                animate={{
                  x: offset * safeSlideWidth,
                  rotateY: -offset * rotationStep,
                  scale: isActive ? 1 : safeInactiveScale,
                  opacity: 1,
                  zIndex: 100 - Math.abs(offset)
                }}
                transition={transition}
                style={{ width: safeSlideWidth, transformStyle: "preserve-3d" }}>
                <button
                  type="button"
                  aria-label={`Show ${item.title}`}
                  aria-current={isActive ? "true" : undefined}
                  className="aspect-[3/4] w-full cursor-pointer"
                  onClick={() => selectSlide(absoluteIndex)}>
                  <img
                    src={item.src}
                    alt={item.alt ?? item.title}
                    draggable={false}
                    className={cn("h-full w-full select-none rounded-lg object-cover shadow-xl", imageClassName)} />
                </button>

                <motion.p
                  className={cn("whitespace-nowrap text-sm", labelClassName)}
                  animate={{
                    filter: isActive ? "blur(0px)" : "blur(2px)",
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={transition}>
                  {item.title}
                </motion.p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {showControls && (
        <div
          className={cn(
            "absolute inset-x-4 bottom-5 z-10 mx-auto flex w-fit items-center justify-center gap-3 rounded-full border border-neutral-300/80 bg-neutral-200/70 px-2 text-neutral-700 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-neutral-900/70 dark:text-neutral-100",
            controlsClassName
          )}>
          <button
            type="button"
            aria-label="Show previous slide"
            disabled={isPreviousDisabled}
            className="inline-flex size-9 items-center justify-center rounded-full transition-colors hover:bg-white/70 disabled:cursor-not-allowed disabled:opacity-35 dark:hover:bg-white/10"
            onClick={() => selectSlide(currentIndex - 1)}>
            <ChevronLeft className="size-5" />
          </button>

          {showDots && (
            <div className="flex items-center justify-center gap-2">
              {items.map((item, index) => {
                const currentModulo = ((currentIndex % items.length) + items.length) % items.length;
                const isDotActive = currentModulo === index;
                
                return (
                  <button
                    key={`${item.title}-${index}`}
                    type="button"
                    aria-label={`Show slide ${index + 1}: ${item.title}`}
                    aria-current={isDotActive ? "true" : undefined}
                    className={cn(
                      "h-2 rounded-full bg-current transition-[width,opacity] duration-300",
                      isDotActive ? "w-7 opacity-100" : "w-2 opacity-30"
                    )}
                    onClick={() => {
                      const diff = index - currentModulo;
                      let optimalDiff = diff;
                      if (loop) {
                        if (diff > items.length / 2) optimalDiff -= items.length;
                        else if (diff < -items.length / 2) optimalDiff += items.length;
                      }
                      selectSlide(currentIndex + optimalDiff);
                    }} />
                );
              })}
            </div>
          )}

          <button
            type="button"
            aria-label="Show next slide"
            disabled={isNextDisabled}
            className="inline-flex size-9 items-center justify-center rounded-full transition-colors hover:bg-white/70 disabled:cursor-not-allowed disabled:opacity-35 dark:hover:bg-white/10"
            onClick={() => selectSlide(currentIndex + 1)}>
            <ChevronRight className="size-5" />
          </button>
        </div>
      )}
    </div>
  );
}

export default PerspectiveCarousel;
