import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WaitlistSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="lista-espera" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-lg mx-auto text-center"
        >
          <div className="h-[1px] w-20 gold-line mx-auto mb-12" />

          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Quer ser avisada primeiro sobre a{
            <span className="text-gradient-gold">próxima edição?</span>
            }
          </h2>

          <p className="text-sm font-body text-muted-foreground mb-10">
            Entre para a comunidade Connect e receba novidades em primeira mão.
          </p>

          <a
            href="https://chat.whatsapp.com/DrZsbwanWX8Fo8004XcR0L"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-gold-light transition-colors duration-300 gold-glow"
          >
            Entrar para a Comunidade Connect
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WaitlistSection;
