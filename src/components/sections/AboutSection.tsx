import AnimatedText from "../ui/AnimatedText";
import ContactButton from "../ui/ContactButton";
import FadeIn from "../ui/FadeIn";

const AboutSection = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 py-20 sm:px-8 md:px-10">
      {/* Decorative 3D Elements */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute left-[1%] top-[4%] sm:left-[2%] md:left-[4%]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="Moon 3D"
          className="w-30 sm:w-40 md:w-52.5"
        />
      </FadeIn>

      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3D Object"
          className="w-25 sm:w-35 md:w-45"
        />
      </FadeIn>

      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute right-[1%] top-[4%] sm:right-[2%] md:right-[4%]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="Lego 3D"
          className="w-30 sm:w-40 md:w-52.5"
        />
      </FadeIn>

      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D Group"
          className="w-32.5 sm:w-42.5 md:w-55"
        />
      </FadeIn>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight">
            About me
          </h2>
        </FadeIn>

        <AnimatedText
          text="With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!"
          className="mt-10 max-w-140 text-center text-[clamp(1rem,2vw,1.35rem)] font-medium leading-relaxed text-light sm:mt-14 md:mt-16"
        />

        <FadeIn delay={0.2} y={20} className="mt-16 sm:mt-20 md:mt-24">
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;
