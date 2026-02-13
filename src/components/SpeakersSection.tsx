import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import speakerMiguel from "@/assets/speaker-miguel.png";
import speakerEster from "@/assets/speaker-ester.png";
import speakerKelly from "@/assets/speaker-kelly.png";
import speakerAmanda from "@/assets/speaker-amanda.png";
import speakerNilton from "@/assets/speaker-nilton.png";
import speakerGabi from "@/assets/speaker-gabi.png";
import speakerBruna from "@/assets/speaker-bruna.png";

const speakers = [
  {
    name: "Miguel Kelson",
    role: "Mestre de Cerimônia",
    bio: "Especialista em conduzir experiências que conectam palco e audiência.",
    image: speakerMiguel,
  },
  {
    name: "Pra Ester Reis",
    role: "Palestrante",
    bio: "Referência em crescimento e posicionamento na área lash.",
    image: speakerEster,
  },
  {
    name: "Kelly Rodrigues",
    role: "Palestrante",
    bio: "Posicionamento & Imagem Profissional.",
    image: speakerKelly,
  },
  {
    name: "Amanda Mantovani",
    role: "Palestrante",
    bio: "Especialista em técnicas avançadas de lash design.",
    image: speakerAmanda,
  },
  {
    name: "Nilton Alves",
    role: "Palestrante",
    bio: "Referência em técnica e inovação no universo lash.",
    image: speakerNilton,
  },
  {
    name: "Gabi Alvares",
    role: "Embaixadora",
    bio: "Embaixadora Connect – Cesario Lange.",
    image: speakerGabi,
  },
  {
    name: "Bruna Padilia",
    role: "Embaixadora",
    bio: "Embaixadora Connect – Tatuí.",
    image: speakerBruna,
  },
  {
    name: "Aguarde...",
    role: "Palestrante",
    bio: "Em breve mais informações.",
    image: speakerBruna,
  },
  {
    name: "Aguarde...",
    role: "Palestrante",
    bio: "Em breve mais informações.",
    image: speakerBruna,
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {speakers.map((speaker, i) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.08 }}
              className="group relative bg-card rounded-sm overflow-hidden border border-border hover:border-primary/30 transition-all duration-500"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-xs font-body tracking-[0.3em] uppercase text-primary mb-1">
                  {speaker.role}
                </p>
                <h3 className="text-lg font-display font-bold text-foreground mb-1">
                  {speaker.name}
                </h3>
                <p className="text-xs font-body text-foreground/60 leading-relaxed">
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
