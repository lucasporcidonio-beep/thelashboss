import { motion } from "framer-motion";
import { MapPin, CalendarDays } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import CountdownTimer from "./CountdownTimer";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Connect Tatuí palco" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero opacity-85" />
      </div>

      {/* Gold decorative line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] gold-line" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          {/* Logo / Event name */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.3em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-sm font-body font-light tracking-[0.5em] uppercase text-primary mb-8"
          >
            Evento Presencial
          </motion.p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-[1.1]">
            <span className="text-gradient-gold">CONNECT</span>
            <br />
            <span className="text-foreground">TATUÍ</span>
          </h1>

          <p className="text-lg md:text-xl font-body font-light text-foreground/80 mb-4 max-w-xl mx-auto leading-relaxed">
            O encontro que está elevando lash designers para o próximo nível.
          </p>

          {/* Pillars */}
          <div className="flex items-center justify-center gap-3 mb-8 text-primary/80 text-sm font-body tracking-widest uppercase">
            <span>Propósito</span>
            <span className="w-1 h-1 rounded-full bg-primary" />
            <span>Conexão</span>
            <span className="w-1 h-1 rounded-full bg-primary" />
            <span>Crescimento</span>
          </div>

          {/* Event details */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 text-foreground/60 font-body text-sm">
            <div className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-primary" />
              <span>26 de Abril de 2026</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Hotel Del Fiol – Tatuí</span>
            </div>
          </div>

          {/* Countdown */}
          <div className="mb-10">
            <CountdownTimer />
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/5515974028094"
              className="px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-gold-light transition-colors duration-300 gold-glow"
            >
              Quero Participar
            </a>
            <a
              href="chat.whatsapp.com/DrZsbwanWX8Fo8004XcROL"
              className="px-8 py-4 border border-primary/30 text-primary font-body font-medium text-sm tracking-wider uppercase rounded-sm hover:border-primary/60 hover:bg-primary/5 transition-all duration-300"
            >
              Entrar para o Grupo VIP
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
