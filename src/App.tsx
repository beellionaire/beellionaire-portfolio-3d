import React, { Suspense } from "react";

// Lazy loading sections
const HeroSection = React.lazy(
  () => import("./components/sections/HeroSection"),
);
const MarqueeSection = React.lazy(
  () => import("./components/sections/MarqueeSection"),
);
const AboutSection = React.lazy(
  () => import("./components/sections/AboutSection"),
);
const ServicesSection = React.lazy(
  () => import("./components/sections/ServicesSection"),
);
const ProjectsSection = React.lazy(
  () => import("./components/sections/ProjectsSection"),
);

// Komponen loader sederhana saat chunk sedang didownload
const SectionLoader = () => (
  <div className="w-full h-screen flex items-center justify-center bg-dark">
    <div className="w-10 h-10 border-4 border-light/20 border-t-light rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <main className="w-full overflow-x-clip bg-dark text-white font-kanit">
      <Suspense fallback={<SectionLoader />}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <MarqueeSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <ServicesSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <ProjectsSection />
      </Suspense>
    </main>
  );
}
