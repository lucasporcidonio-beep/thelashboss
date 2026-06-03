import { motion } from "framer-motion";
import { MapPin, CalendarDays } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Light cream background with subtle gold wave */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(40,25%,95%)] via-[hsl(40,20%,97%)] to-background" />

      {/* Decorative silk/wave SVG background */}
      <div className="absolute inset-0 opacity-[0.06]">
        <svg viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
          <defs>
            <linearGradient id="waveGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(38,58%,50%)" />
              <stop offset="100%" stopColor="hsl(40,65%,65%)" />
            </linearGradient>
          </defs>
          <path d="M0,400 C200,300 400,500 600,380 C800,260 1000,480 1200,360 C1300,300 1380,340 1440,320 L1440,0 L0,0 Z" fill="url(#waveGold)" />
          <path d="M0,600 C300,500 500,700 700,580 C900,460 1100,660 1300,540 C1380,500 1420,530 1440,520 L1440,800 L0,800 Z" fill="url(#waveGold)" />
        </svg>
      </div>

      {/* Gold decorative line top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] gold-line" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          {/* Tag */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.3em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-sm font-body font-medium tracking-[0.5em] uppercase text-primary mb-8"
          >
            Evento Presencial · Sorocaba
          </motion.p>

          {/* Logo image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex justify-center mb-6"
          >
            <img
              src={logo}
              alt="The Lash Boss"
              className="w-48 md:w-64 lg:w-72 drop-shadow-sm"
            />
          </motion.div>

          <p className="text-lg md:text-xl font-display font-light italic text-foreground/65 mb-3 max-w-xl mx-auto leading-relaxed">
            Transformando empreendedoras na sua potência máxima.
          </p>

          {/* Pillars */}
          <div className="flex items-center justify-center gap-3 mb-8 text-primary text-xs font-body tracking-widest uppercase">
            <span>💡 Crescimento</span>
            <span className="w-1 h-1 rounded-full bg-primary/50" />
            <span>Propósito</span>
            <span className="w-1 h-1 rounded-full bg-primary/50" />
            <span>Estratégia</span>
          </div>

          {/* Event details */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 text-foreground/50 font-body text-sm">
            <div className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-primary" />
              <span>22 de Junho de 2026</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Sorocaba – SP</span>
            </div>
          </div>

          {/* Countdown */}
          <div className="mb-10">
            <CountdownTimer />
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/5515997707464"
              className="px-10 py-4 bg-primary text-white font-body font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-gold-light transition-colors duration-300 gold-glow"
            >
              Quero Participar
            </a>
            <a
              href="https://chat.whatsapp.com/DrZsbwanWX8Fo8004XcR0L"
              className="px-10 py-4 border border-primary/50 text-primary font-body font-medium text-sm tracking-wider uppercase rounded-sm hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              Entrar para o Grupo VIP
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
