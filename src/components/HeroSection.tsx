import { motion } from "framer-motion";
import { MapPin, CalendarDays } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(0,0%,4%)] via-[hsl(0,0%,7%)] to-background" />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c9a84c' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      {/* Gold decorative line top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] gold-line" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          {/* Tag line */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.3em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-sm font-body font-light tracking-[0.5em] uppercase text-primary mb-8"
          >
            Evento Presencial · Sorocaba
          </motion.p>

          {/* Event name */}
          <h1 className="font-display font-bold mb-6 leading-[1.1]">
            <span className="text-foreground/80 text-2xl md:text-3xl font-light tracking-[0.35em] uppercase block mb-1">
              The
            </span>
            <span className="text-6xl md:text-8xl lg:text-9xl shimmer-text">
              LASH
            </span>
            <br />
            <span className="text-foreground text-5xl md:text-7xl lg:text-8xl">
              BOSS
            </span>
          </h1>

          <p className="text-lg md:text-xl font-display font-light italic text-foreground/75 mb-3 max-w-xl mx-auto leading-relaxed">
            Transformando empreendedoras na sua potência máxima.
          </p>

          {/* Pillars */}
          <div className="flex items-center justify-center gap-3 mb-8 text-primary/80 text-xs font-body tracking-widest uppercase">
            <span>💡 Crescimento</span>
            <span className="w-1 h-1 rounded-full bg-primary/50" />
            <span>Propósito</span>
            <span className="w-1 h-1 rounded-full bg-primary/50" />
            <span>Estratégia</span>
          </div>

          {/* Event details */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 text-foreground/60 font-body text-sm">
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
              href="https://wa.me/5515974028094"
              className="px-10 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-gold-light transition-colors duration-300 gold-glow"
            >
              Quero Participar
            </a>
            <a
              href="https://chat.whatsapp.com/DrZsbwanWX8Fo8004XcR0L"
              className="px-10 py-4 border border-primary/40 text-primary font-body font-medium text-sm tracking-wider uppercase rounded-sm hover:border-primary hover:bg-primary/5 transition-all duration-300"
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
