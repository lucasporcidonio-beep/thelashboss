import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const tickets = [
  {
    name: "Lash Elite",
    price: "R$ 247",
    description: "Para quem quer participar, aprender e começar a se posicionar.",
    features: [
      "Acesso completo ao evento",
      "Conteúdo exclusivo",
      "Certificado de participação",
      "Coffee break",
    ],
    featured: false,
  },
  {
    name: "Lash VIP",
    price: "R$ 347",
    description: "Para quem quer proximidade, destaque e networking estratégico.",
    features: [
      "Tudo do Lash Elite",
      "Lugar reservado nas primeiras filas",
      "Networking exclusivo com palestrantes",
      "Kit VIP Connect",
      "Acesso ao grupo VIP pós-evento",
    ],
    featured: true,
  },
];

const TicketsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ingressos" className="py-24 md:py-32 bg-gradient-section relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-body tracking-[0.4em] uppercase text-primary mb-4">
            Ingressos
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            Garanta seu <span className="text-gradient-gold">lugar</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {tickets.map((ticket, i) => (
            <motion.div
              key={ticket.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
              className={`relative rounded-sm p-8 border transition-all duration-300 ${
                ticket.featured
                  ? "bg-card border-primary/40 gold-glow"
                  : "bg-card/60 border-border hover:border-primary/20"
              }`}
            >
              {ticket.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-body font-semibold tracking-wider uppercase rounded-sm">
                  Mais Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  {ticket.name}
                </h3>
                <p className="text-sm font-body text-muted-foreground mb-4">
                  {ticket.description}
                </p>
                <p className="text-4xl font-display font-bold text-gradient-gold">
                  {ticket.price}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {ticket.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm font-body text-foreground/70">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/5515974028094"
                className={`block text-center py-3 px-6 font-body font-semibold text-sm tracking-wider uppercase rounded-sm transition-all duration-300 ${
                  ticket.featured
                    ? "bg-primary text-primary-foreground hover:bg-gold-light"
                    : "border border-primary/30 text-primary hover:bg-primary/5 hover:border-primary/50"
                }`}
              >
                Garantir Ingresso
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TicketsSection;
