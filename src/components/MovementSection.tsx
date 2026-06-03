import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const MovementSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-background to-secondary relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-2xl mx-auto text-center">
          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8 }}
            className="h-[1px] bg-primary mx-auto mb-12"
          />

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-8 leading-tight"
          >
            Mais do que um evento.{" "}
            <span className="text-gradient-gold">Uma virada de potência.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 text-foreground/70 font-body text-base md:text-lg leading-relaxed"
          >
            <p>
              The Lash Boss nasceu para reunir empreendedoras que desejam mais do que técnica.
              Aqui você encontra estratégia, mentalidade e conexões que aceleram crescimento real.
            </p>
            <p className="text-foreground/90 font-medium italic font-display text-xl">
              Não é apenas sobre extensão de cílios.
              <br />
              É sobre construir um império.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MovementSection;
