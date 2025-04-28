import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Rocket, Sparkles, PhoneCall, MoveRight } from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { cn } from "@/lib/utils";

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const staticText = "Digitale Lösungen für";
  const animatedWords = useMemo(() => [
    "Ihren Erfolg",
    "Ihre Zukunft",
    "Ihr Wachstum",
    "Ihre Vision",
    "Ihre Ziele"
  ], []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setWordIndex((current) => (current + 1) % animatedWords.length);
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [wordIndex, animatedWords.length]);

  return (
    <div className="w-full bg-gradient-to-b from-transparent to-gray-50/50">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <RainbowButton className="gap-2">
              Unsere Mission <Sparkles className="w-4 h-4" />
            </RainbowButton>
          </motion.div>

          <div className="flex gap-6 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-4xl tracking-tighter text-center font-bold">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {staticText}
              </motion.span>
              <span className="block h-[1.2em] relative">
                {animatedWords.map((word, index) => (
                  <motion.span
                    key={word}
                    className={cn(
                      "absolute inset-0 flex justify-center items-center gradient-text",
                      index === wordIndex ? "pointer-events-auto" : "pointer-events-none"
                    )}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{
                      opacity: index === wordIndex ? 1 : 0,
                      y: index === wordIndex ? 0 : -40
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut"
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </h1>

            <motion.p 
              className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Wir entwickeln maßgeschneiderte digitale Lösungen, die nicht nur begeistern, 
              sondern messbare Ergebnisse liefern. Von der Strategie bis zur Umsetzung - 
              alles aus einer Hand.
            </motion.p>
          </div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <RainbowButton href="/kontakt" className="gap-2">
              Termin vereinbaren <PhoneCall className="w-4 h-4" />
            </RainbowButton>
            <RainbowButton href="/services" variant="outline" className="gap-2">
              Projekt starten <MoveRight className="w-4 h-4" />
            </RainbowButton>
          </motion.div>
        </div>
      </div>
    </div>
  );
}