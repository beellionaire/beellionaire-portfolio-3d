import FadeIn from "../ui/FadeIn";

const servicesList = [
  {
    num: "01",
    name: "3D Modeling",
    desc: "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.",
  },
  {
    num: "02",
    name: "Rendering",
    desc: "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.",
  },
  {
    num: "03",
    name: "Motion Design",
    desc: "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.",
  },
  {
    num: "04",
    name: "Branding",
    desc: "Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.",
  },
  {
    num: "05",
    name: "Web Design",
    desc: "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.",
  },
];

const ServicesSection = () => {
  return (
    <section className="relative z-0 rounded-t-[40px] bg-[#FFFFFF] px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32">
      <FadeIn y={30}>
        <h2 className="mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none text-dark sm:mb-20 md:mb-28">
          Services
        </h2>
      </FadeIn>

      <div className="mx-auto flex max-w-5xl flex-col">
        {servicesList.map((srv, i) => (
          <FadeIn
            key={srv.num}
            delay={i * 0.1}
            y={30}
            className="flex border-b border-[rgba(12,12,12,0.15)] py-8 first:border-t sm:py-10 md:py-12"
          >
            <div className="flex w-full flex-col md:flex-row md:items-start md:gap-12 lg:gap-24">
              <span className="text-[clamp(3rem,10vw,140px)] font-black leading-none text-dark">
                {srv.num}
              </span>
              <div className="mt-4 flex flex-col md:mt-2">
                <h3 className="text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase text-dark">
                  {srv.name}
                </h3>
                <p className="mt-2 max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] font-light leading-relaxed text-dark opacity-60">
                  {srv.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
