import { AnimatePresence, motion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  valueKey: string;
  children: ReactNode;
  className?: string;
};

export default function LocalizedFade({ valueKey, children, className }: Props) {
  return (
    <span className={className}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={valueKey}
          initial={{ opacity: 0, y: 2 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -1 }}
          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "inline-block" }}
        >
          {children}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
