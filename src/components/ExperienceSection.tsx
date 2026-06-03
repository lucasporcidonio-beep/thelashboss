import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Lightbulb, TrendingUp, Handshake, Sparkles, Crown } from "lucide-react";

const experiences = [
  { icon: Crown, label: "Mentalidade de Boss" },
  { icon: Lightbulb, label: "Conteúdo estratégico e aplicável" },
  { icon: TrendingUp, label: "Crescimento e autoridade" },
  { icon: Handshake, label: "Networking entre empreendedoras" },
  { icon: Users, label: "Conexão com profissionais de Sorocaba" },
  { icon: Sparkles, label: "Ambiente imersivo e inspirador" },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary to-background" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-body tracking-[0.4em] uppercase text-primary mb-4">
            Experiência
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            O que você vai <span className="text-gradient-gold">viver</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="flex items-center gap-4 p-5 rounded-sm bg-card/60 backdrop-blur-sm border border-border hover:border-primary/30 transition-colors duration-300"
            >
              <exp.icon className="w-5 h-5 text-primary shrink-0" />
              <span className="font-body text-sm text-foreground/80">{exp.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
