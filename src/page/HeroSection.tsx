import { ChartBarIcon, LightningIcon, TargetIcon } from "@phosphor-icons/react";
import { Button } from "../components/Button";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-16 md:py-24">
      {/* Luzes de Fundo (Glow Effects) para Estética Dark */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[300px] bg-purple-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[250px] sm:w-[400px] h-[200px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="MainContainer px-4 md:px-10 flex flex-col items-center text-center z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-[10px] sm:text-xs font-medium text-zinc-300 mb-6 backdrop-blur-sm"
        >
          <span className="flex h-1 w-1 rounded-full bg-emerald-500 animate-pulse" />
          ECOSSISTEMA COMPLETO: CONTEÚDO + CRM + N8N
        </motion.div>

        {/* Headline Principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="font-syne font-bold text-2xl sm:text-3xl md:text-4xl text-zinc-100 max-w-4xl tracking-tight leading-[1.15] text-balance"
        >
          CONSTRUA UMA MÁQUINA DE VENDAS{" "}
          <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-black-400 bg-clip-text text-transparent">
            AUTOMÁTICA E PREVISÍVEL.
          </span>
        </motion.h1>

       
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          className="text-zinc-400 text-sm sm:text-base md:text-md max-w-2xl pt-5 font-normal leading-relaxed text-balance"
        >
          Atraia clientes qualificados com <strong className="text-zinc-200 font-semibold">Conteúdo Estratégico</strong>, organize suas oportunidades no <strong className="text-zinc-200 font-semibold">CRM</strong> e escala suas operações com <strong className="text-zinc-200 font-semibold">n8n</strong> sem pagar mensalidades absurdas.
        </motion.p>

        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-3 md:gap-6 my-8 text-xs md:text-sm text-zinc-300 font-medium"
        >
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-900/50 border border-zinc-800/80">
            <span className="text-orange-400"><TargetIcon/></span> Atração High-Ticket
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-900/50 border border-zinc-800/80">
            <span className="text-orange-400"><ChartBarIcon/></span> Gestão de Funil
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-900/50 border border-zinc-800/80">
            <span className="text-orange-400"><LightningIcon/></span> Automação Open-Source
          </div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="pt-2"
        >
          <a href="#ofertas">
            <Button />
          </a>
        </motion.div>

      </div>
    </section>
  );
}