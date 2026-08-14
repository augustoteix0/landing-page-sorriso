import { motion } from "framer-motion";

interface ButtonProps {
  texto?: string;
  href?: string;
  estilo?: string;
}

export function Button({ 
  texto = "VER PLANOS E ACESSO", 
  href = "#ofertas",
  estilo = "" 
}: ButtonProps) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.1, ease: "easeOut" }}
      className={`
        inline-flex items-center justify-center
        px-8 py-3.5 mt-6 
        rounded-full cursor-pointer 
        font-syne font-bold text-xs sm:text-sm md:text-base uppercase tracking-wider
        bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600
        text-zinc-950 
        shadow-[0_0_25px_rgba(249,115,22,0.35)]
        hover:shadow-[0_0_35px_rgba(249,115,22,0.6)]
        transition-all duration-300
        animate-pulse
        ${estilo}
      `}
    >
      {texto}
    </motion.a>
  );
}