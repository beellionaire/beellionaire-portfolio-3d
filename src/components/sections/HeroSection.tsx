import ContactButton from "../ui/ContactButton";
import FadeIn from "../ui/FadeIn";
import Magnet from "../ui/Magnet";

const HeroSection = () => {
  return (
    <section className="relative flex h-screen flex-col overflow-x-clip px-6 md:px-10">
      <FadeIn
        delay={0}
        y={-20}
        as="nav"
        className="flex items-center justify-between pt-6 md:pt-8 text-sm font-medium uppercase tracking-wider text-light md:text-lg lg:text-[1.4rem]"
      >
        {["About", "Price", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href="#"
            className="transition-opacity duration-200 hover:opacity-70"
          >
            {item}
          </a>
        ))}
      </FadeIn>

      <div className="mt-6 grow overflow-hidden sm:mt-4 md:-mt-5">
        <FadeIn delay={0.15} y={40} className="w-full">
          <h1 className="hero-heading w-full whitespace-nowrap text-[14vw] font-black uppercase leading-none tracking-tight sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
            Hi, i&apos;m jack
          </h1>
        </FadeIn>
      </div>

      <div className="flex items-end justify-between pb-7 sm:pb-8 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p className="max-w-40 text-[clamp(0.75rem,1.4vw,1.5rem)] font-light uppercase leading-snug tracking-wide text-light sm:max-w-55 md:max-w-65">
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      <FadeIn
        delay={0.6}
        y={30}
        className="pointer-events-none absolute left-1/2 top-1/2 z-10 w-70 -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:w-90 sm:translate-y-0 md:w-110 lg:w-130"
      >
        <div className="pointer-events-auto">
          <Magnet>
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
              alt="Jack Portrait"
              className="h-auto w-full object-contain drop-shadow-2xl"
            />
          </Magnet>
        </div>
      </FadeIn>
    </section>
  );
};

export default HeroSection;
