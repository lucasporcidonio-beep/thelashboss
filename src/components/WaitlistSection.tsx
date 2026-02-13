import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const WaitlistSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            Quer ser avisada primeiro sobre a{" "}
            <span className="text-gradient-gold">próxima edição?</span>
          </h2>

          <p className="text-sm font-body text-muted-foreground mb-10">
            Entre para a comunidade Connect e receba novidades em primeira mão.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Seu nome"
                required
                className="w-full px-5 py-3 bg-card border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors"
              />
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                required
                className="w-full px-5 py-3 bg-card border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors"
              />
              <input
                type="tel"
                placeholder="WhatsApp (opcional)"
                className="w-full px-5 py-3 bg-card border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors"
              />
              <button
                type="submit"
                className="w-full py-4 bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-gold-light transition-colors duration-300 gold-glow"
              >
                Entrar para a Comunidade Connect
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 bg-card border border-primary/20 rounded-sm"
            >
              <p className="text-lg font-display font-bold text-gradient-gold mb-2">
                Você está na lista! ✨
              </p>
              <p className="text-sm font-body text-muted-foreground">
                Em breve você receberá novidades sobre o Connect Tatuí.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default WaitlistSection;
