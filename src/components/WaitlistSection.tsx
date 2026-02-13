import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const WaitlistSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const name = (formData.get("name") as string).trim();
    const email = (formData.get("email") as string).trim();
    const whatsapp = (formData.get("whatsapp") as string)?.trim() || null;

    if (!name || !email) {
      setError("Preencha todos os campos obrigatórios.");
      setLoading(false);
      return;
    }

    const { error: dbError } = await supabase
      .from("waitlist")
      .insert({ name, email, whatsapp });

    if (dbError) {
      setError("Ocorreu um erro. Tente novamente.");
      setLoading(false);
      return;
    }

    setSubmitted(true);
    setLoading(false);
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
                name="name"
                placeholder="Seu nome"
                required
                maxLength={100}
                className="w-full px-5 py-3 bg-card border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Seu melhor e-mail"
                required
                maxLength={255}
                className="w-full px-5 py-3 bg-card border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors"
              />
              <input
                type="tel"
                name="whatsapp"
                placeholder="WhatsApp (opcional)"
                maxLength={20}
                className="w-full px-5 py-3 bg-card border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors"
              />
              {error && (
                <p className="text-sm text-destructive font-body">{error}</p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-gold-light transition-colors duration-300 gold-glow disabled:opacity-50"
              >
                {loading ? "Enviando..." : "Entrar para a Comunidade Connect"}
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
