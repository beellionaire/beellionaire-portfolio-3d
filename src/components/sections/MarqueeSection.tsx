import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const marqueeGifs = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

const MarqueeSection = () => {
  const { scrollY } = useScroll();
  const containerRef = useRef<HTMLDivElement>(null);
  const [sectionTop, setSectionTop] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      if (containerRef.current) {
        setSectionTop(containerRef.current.offsetTop);
      }
    };
    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  const offset = useTransform(
    scrollY,
    (y) => (y - sectionTop + window.innerHeight) * 0.3,
  );
  const x1 = useTransform(offset, (v) => v - 200);
  const x2 = useTransform(offset, (v) => -(v - 200));

  const row1 = [
    ...marqueeGifs.slice(0, 11),
    ...marqueeGifs.slice(0, 11),
    ...marqueeGifs.slice(0, 11),
  ];
  const row2 = [
    ...marqueeGifs.slice(11),
    ...marqueeGifs.slice(11),
    ...marqueeGifs.slice(11),
  ];

  return (
    <section
      ref={containerRef}
      className="overflow-hidden bg-dark pb-10 pt-24 sm:pt-32 md:pt-40"
    >
      <div className="flex flex-col gap-3">
        <motion.div
          style={{ x: x1, willChange: "transform" }}
          className="flex w-max gap-3"
        >
          {row1.map((src, i) => (
            <img
              key={`r1-${i}`}
              src={src}
              loading="lazy"
              alt="Project preview"
              className="h-67.5 w-105 rounded-2xl object-cover"
            />
          ))}
        </motion.div>
        <motion.div
          style={{ x: x2, willChange: "transform" }}
          className="flex w-max gap-3"
        >
          {row2.map((src, i) => (
            <img
              key={`r2-${i}`}
              src={src}
              loading="lazy"
              alt="Project preview"
              className="h-67.5 w-105 rounded-2xl object-cover"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MarqueeSection;
