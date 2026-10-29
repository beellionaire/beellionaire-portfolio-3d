import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import LiveProjectButton from "../ui/LiveProjectButton";

const ProjectCard = ({
  project,
  index,
  total,
}: {
  project: any;
  index: number;
  total: number;
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 768 : false;
  const baseTop = isMobile ? "6rem" : "8rem";

  return (
    <div ref={containerRef} className="h-[85vh] w-full">
      <motion.div
        className="sticky w-full rounded-[40px] border-2 border-light bg-dark p-4 origin-top shadow-2xl sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
        style={{
          top: `calc(${baseTop} + ${index * 28}px)`,
          scale,
        }}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 sm:pb-8 md:pb-10">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="text-[clamp(3rem,10vw,140px)] font-black leading-none text-light">
              {project.num}
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-light uppercase tracking-wider text-light/60 sm:text-base">
                {project.client}
              </span>
              <h3 className="text-[clamp(1.5rem,3vw,3rem)] font-bold uppercase leading-tight text-light">
                {project.name}
              </h3>
            </div>
          </div>
          <div className="self-start md:self-center">
            <LiveProjectButton />
          </div>
        </div>

        <div className="flex gap-4 sm:gap-6">
          <div className="flex w-[40%] flex-col gap-4 sm:gap-6">
            <img
              src={project.images.c1_1}
              alt={`${project.name} detail 1`}
              loading="lazy"
              className="h-[clamp(130px,16vw,230px)] w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
            />
            <img
              src={project.images.c1_2}
              alt={`${project.name} detail 2`}
              loading="lazy"
              className="h-[clamp(160px,22vw,340px)] w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
          <div className="w-[60%]">
            <img
              src={project.images.c2}
              alt={`${project.name} main preview`}
              loading="lazy"
              className="h-full w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
