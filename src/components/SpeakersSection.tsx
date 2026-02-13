import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import speakerMiguel from "@/assets/speaker-miguel.jpg";
import speakerEster from "@/assets/speaker-ester.jpg";

const speakers = [
  {
    name: "Miguel Kelson",
    role: "Mestre de Cerimônia",
    bio: "Especialista em conduzir experiências que conectam palco e audiência.",
    image: speakerMiguel,
  },
  {
    name: "Pra Ester Reis",
    role: "Palestrante Convidada",
    bio: "Referência em crescimento e posicionamento na área lash.",
    image: speakerEster,
  },
];

const SpeakersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-body tracking-[0.4em] uppercase text-primary mb-4">
            Palestrantes
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            Quem sobe ao palco no <span className="text-gradient-gold">Connect</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {speakers.map((speaker, i) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
              className="group relative bg-card rounded-sm overflow-hidden border border-border hover:border-primary/30 transition-all duration-500"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-xs font-body tracking-[0.3em] uppercase text-primary mb-2">
                  {speaker.role}
                </p>
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                  {speaker.name}
                </h3>
                <p className="text-sm font-body text-foreground/60 leading-relaxed">
                  {speaker.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
