import React, { useState, useRef, useCallback } from "react";
import { cn } from "@/utils/cn";

interface CardContainerProps {
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}

export function CardContainer({
  className,
  containerClassName,
  children,
}: CardContainerProps) {
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsMouseEntered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  }, []);

  return (
    <div
      className={cn("flex items-center justify-center", containerClassName)}
      style={{ perspective: "1000px" }}
    >
      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "relative flex items-center justify-center transition-all duration-200 ease-linear",
          className,
        )}
        style={{ transformStyle: "preserve-3d" }}
      >
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child, { isMouseEntered } as any)
            : child,
        )}
      </div>
    </div>
  );
}
