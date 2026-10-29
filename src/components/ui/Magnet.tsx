import { useEffect, useRef, useState, type ReactNode } from "react";

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  className?: string;
}

const Magnet = ({
  children,
  padding = 150,
  strength = 3,
  className = "",
}: MagnetProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const isWithinBounds =
        e.clientX > left - padding &&
        e.clientX < left + width + padding &&
        e.clientY > top - padding &&
        e.clientY < top + height + padding;

      if (isWithinBounds) {
        setIsActive(true);
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        setPosition({ x: distanceX / strength, y: distanceY / strength });
      } else {
        setIsActive(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [padding, strength]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: isActive
          ? "transform 0.3s ease-out"
          : "transform 0.6s ease-in-out",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
};

export default Magnet;
