const ContactButton = () => (
  <button
    className="contact-btn-shadow rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-white transition-transform hover:scale-105 active:scale-95"
    style={{
      background:
        "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
      outline: "2px solid white",
      outlineOffset: "-3px",
    }}
  >
    Contact Me
  </button>
);

export default ContactButton;
