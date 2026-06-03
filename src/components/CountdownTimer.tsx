import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const EVENT_DATE = new Date("2026-06-22T09:00:00-03:00").getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  function calculateTimeLeft(): TimeLeft {
    const diff = Math.max(0, EVENT_DATE - Date.now());
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "Dias", value: timeLeft.days },
    { label: "Horas", value: timeLeft.hours },
    { label: "Min", value: timeLeft.minutes },
    { label: "Seg", value: timeLeft.seconds },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="flex items-center justify-center gap-3 sm:gap-5"
    >
      {units.map((unit, i) => (
        <div key={unit.label} className="flex items-center gap-3 sm:gap-5">
          <div className="text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center border border-primary/30 rounded-sm bg-white/80 backdrop-blur-sm relative overflow-hidden shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
              <span className="text-2xl sm:text-3xl font-display font-bold text-gradient-gold relative z-10">
                {String(unit.value).padStart(2, "0")}
              </span>
            </div>
            <p className="text-[10px] font-body text-muted-foreground mt-2 tracking-wider uppercase">
              {unit.label}
            </p>
          </div>
          {i < units.length - 1 && (
            <span className="text-primary/40 text-xl font-light mb-5">:</span>
          )}
        </div>
      ))}
    </motion.div>
  );
};

export default CountdownTimer;
