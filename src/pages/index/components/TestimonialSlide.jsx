import { forwardRef, useState } from 'react';
import { AnimatePresence, motion, usePresenceData, wrap } from 'motion/react';
import Arrow from '../../../assets/icons/arrow.svg?react';
import { TestimonialCard } from '../../../components/molecules/TestimonialCard';

export function TestimonialSlide({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  function setSlide(newDirection) {
    const nextItem = wrap(0, items.length, currentIndex + newDirection);
    setCurrentIndex(nextItem);
    setDirection(newDirection);
  }
  const data = items[currentIndex];
  return (
    <div className="relative mx-auto">
      <AnimatePresence custom={direction} initial={false} mode="popLayout">
        <Slide key={currentIndex} data={data} />
      </AnimatePresence>

      <div className="absolute bottom-0 left-1/2 pt-4 flex gap-4 translate-y-full -translate-x-1/2">
        <button title="Previous" onClick={() => setSlide(-1)} className="p-2 cursor-pointer">
          <Arrow aria-hidden="true" className="rotate-180" />
        </button>
        <button title="Next" onClick={() => setSlide(1)} className="p-2 cursor-pointer">
          <Arrow aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

const Slide = forwardRef(function Slide({ data }, ref) {
  const direction = usePresenceData();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: direction * 50 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.2,
          type: 'spring',
          visualDuration: 0.3,
          bounce: 0.4,
        },
      }}
      exit={{ opacity: 0, y: direction * -50 }}
    >
      <TestimonialCard {...data} />
    </motion.div>
  );
});
