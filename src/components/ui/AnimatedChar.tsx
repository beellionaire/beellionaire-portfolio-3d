import { motion, useTransform } from "framer-motion";

const AnimatedChar = ({
  char,
  progress,
  index,
  total,
}: {
  char: string;
  progress: any;
  index: number;
  total: number;
}) => {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="invisible">{char}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0">
        {char}
      </motion.span>
    </span>
  );
};

export default AnimatedChar;
