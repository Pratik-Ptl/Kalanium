import FadeUp from "./fade-up";
import ContactForm from "./contact-form";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-28 px-16">
      <div className="contact-grid grid grid-cols-2 gap-24 max-w-[1200px] mx-auto items-start">
        <FadeUp>
          <div className="section-tag">Get in Touch</div>
          <h2 className="section-title">
            Let&apos;s build something <em>worth making.</em>
          </h2>
          <p className="text-base font-light leading-[1.9] text-ash mb-10">
            Whether you&apos;re looking to hire talent, join our collective, or just want to know more about what we&apos;re building — we&apos;d love to hear from you.
          </p>
          <div className="flex flex-col gap-4 mb-10">
            <div className="flex items-center gap-4 text-[0.9rem] text-ash">
              <strong className="text-bark font-medium min-w-[60px]">Email</strong>
              <a href="mailto:contact@kalanium.com" className="text-ash no-underline hover:text-clay transition-colors">
                contact@kalanium.com
              </a>
            </div>
            <div className="flex items-center gap-4 text-[0.9rem] text-ash">
              <strong className="text-bark font-medium min-w-[60px]">Based</strong>
              <span>Regina, Saskatchewan — serving globally</span>
            </div>
          </div>
        </FadeUp>
        <FadeUp>
          <ContactForm />
        </FadeUp>
      </div>
    </section>
  );
}
