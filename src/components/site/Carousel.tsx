import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  items: React.ReactNode[];
  className?: string;
}

export function Carousel({ items, className = "" }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const next = () => {
    setIndex((prev) => (prev + 1) % items.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className={`relative group ${className}`}>
      <div className="overflow-hidden rounded-[2rem]">
        <motion.div
          className="flex"
          animate={{ x: `-${index * 100}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {items.map((item, i) => (
            <div key={i} className="min-w-full px-4">
              {item}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={prev}
          className="p-3 rounded-full bg-card border border-border hover:border-primary/40 text-navy transition-all hover:scale-110 active:scale-95 shadow-soft"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === i ? "w-8 bg-primary" : "w-1.5 bg-border"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="p-3 rounded-full bg-card border border-border hover:border-primary/40 text-navy transition-all hover:scale-110 active:scale-95 shadow-soft"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export function HorizontalScroll({ items }: { items: React.ReactNode[] }) {
  const targetRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full">
      <div
        ref={targetRef}
        className="flex gap-6 overflow-x-auto pb-12 scrollbar-hide snap-x snap-mandatory px-6"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((item, i) => (
          <div key={i} className="min-w-[300px] md:min-w-[450px] snap-center">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
