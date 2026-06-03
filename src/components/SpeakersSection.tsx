import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import speakerMarianeSales from "@/assets/speaker-mariane-sales.png";
import speakerPatriciaArruda from "@/assets/speaker-patricia-arruda.png";
import speakerMarianeSalles from "@/assets/speaker-mariane-salles.png";
import speakerAmandaMantovani from "@/assets/speaker-amanda-mantovani.png";
import speakerFernandaAraujo from "@/assets/speaker-fernanda-araujo.png";
import speakerIasmineCleim from "@/assets/speaker-iasmine-cleim.png";

const placeholderImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

const speakers = [
  {
    name: "Mariane Sales",
    role: "Palestrante",
    bio: "Referência em crescimento e posicionamento na área lash.",
    image: speakerMarianeSales,
  },
  {
    name: "Patricia Arruda",
    role: "Palestrante",
    bio: "Especialista em posicionamento e imagem profissional.",
    image: speakerPatriciaArruda,
  },
  {
    name: "Mariane Salles",
    role: "Palestrante",
    bio: "Estratégia e mentalidade empreendedora no universo lash.",
    image: speakerMarianeSalles,
  },
  {
    name: "Amanda Mantovani",
    role: "Palestrante",
    bio: "Especialista em técnicas avançadas e empreendedorismo lash.",
    image: speakerAmandaMantovani,
  },
  {
    name: "Fernanda Araújo",
    role: "Idealizadora",
    bio: "Co-criadora do The Lash Boss Sorocaba.",
    image: speakerFernandaAraujo,
  },
  {
    name: "Iasmine Cleim",
    role: "Idealizadora",
    bio: "Co-criadora do The Lash Boss Sorocaba.",
    image: speakerIasmineCleim,
  },
  {
    name: "Aguarde...",
    role: "Palestrante",
    bio: "Em breve mais informações.",
    image: placeholderImage,
  },
  {
    name: "Aguarde...",
    role: "Palestrante",
    bio: "Em breve mais informações.",
    image: placeholderImage,
  },
];

const SpeakersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 relative bg-gradient-section">
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Quem sobe ao palco no{" "}
            <span className="text-gradient-gold">Lash Boss</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {speakers.map((speaker, i) => (
            <motion.div
              key={`${speaker.name}-${i}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.08 }}
              className="group relative bg-white rounded-sm overflow-hidden border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-500"
              style={{ boxShadow: "0 2px 20px hsl(38 20% 60% / 0.08)" }}
            >
              <div className="aspect-[3/4] overflow-hidden bg-[hsl(40,15%,92%)]">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                {/* Light gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-white via-white/95 to-transparent pt-12">
                <p className="text-xs font-body tracking-[0.3em] uppercase text-primary mb-1">
                  {speaker.role}
                </p>
                <h3 className="text-base font-display font-bold text-foreground mb-1">
                  {speaker.name}
                </h3>
                <p className="text-xs font-body text-muted-foreground leading-relaxed">
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
