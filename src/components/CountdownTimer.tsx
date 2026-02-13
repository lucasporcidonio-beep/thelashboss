import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const EVENT_DATE = new Date("2026-04-26T09:00:00-03:00").getTime();

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
            <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center border border-primary/20 rounded-sm bg-card/40 backdrop-blur-sm">
              <span className="text-2xl sm:text-3xl font-display font-bold text-gradient-gold">
                {String(unit.value).padStart(2, "0")}
              </span>
            </div>
            <p className="text-[10px] font-body text-muted-foreground mt-1.5 tracking-wider uppercase">
              {unit.label}
            </p>
          </div>
          {i < units.length - 1 && (
            <span className="text-primary/40 text-lg font-light mb-4">:</span>
          )}
        </div>
      ))}
    </motion.div>
  );
};

export default CountdownTimer;
