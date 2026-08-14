import { motion } from "framer-motion";
import { WhatsappLogoIcon, ArrowUpIcon, SparkleIcon } from "@phosphor-icons/react";

export function CallToActionSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-zinc-950 text-zinc-100 border-t border-zinc-900 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-orange-500/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="py-20 border-b border-zinc-900 relative z-10">
        <div className="MainContainer px-4 md:px-10 max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-orange-500 font-syne text-xs uppercase tracking-widest font-bold inline-flex items-center gap-1.5"
          >
            <SparkleIcon size={16} className="text-orange-500" /> Decisão Final
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-syne font-bold text-2xl sm:text-4xl text-zinc-100 mt-3 leading-tight uppercase"
          >
            PRONTO PARA TRANSFORMAR A SUA OPERAÇÃO DIGITAL?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto"
          >
            Escolha o treinamento ideal para o seu momento hoje ou leve a estrutura completa com garantia incondicional de 7 dias.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#ofertas"
              className="w-full sm:w-auto py-4 px-8 rounded-xl font-syne font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-orange-500 to-amber-500 text-zinc-950 shadow-[0_0_25px_rgba(249,115,22,0.3)] hover:scale-[1.02] transition-all duration-300 text-center"
            >
              VER PLANOS DE ACESSO
            </a>

            <a
              href="https://api.whatsapp.com/send/?phone=5511926295262&text=Ol%C3%A1%21+Vim+do+site+e+tenho+d%C3%BAvidas+sobre+os+cursos."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-4 px-8 rounded-xl font-syne font-bold text-xs uppercase tracking-wider bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 text-zinc-200 flex items-center justify-center gap-2 transition-all duration-300 group"
            >
              <WhatsappLogoIcon size={18} className="text-emerald-500 group-hover:scale-110 transition-transform" />
              <span>FALAR NO WHATSAPP</span>
            </a>
          </motion.div>
        </div>
      </div>

      <div className="py-12 relative z-10 bg-zinc-950/80">
        <div className="MainContainer px-4 md:px-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-zinc-500">
          
          <div className="text-center md:text-left space-y-1">
            <p className="font-syne font-bold text-zinc-300">
              SERVIR SEMPRE.
            </p>
            <p>© {new Date().getFullYear()} Todos os direitos reservados.</p>
          </div>

          <div className="flex items-center gap-6 font-mono text-[11px]">
            <a href="#termos" className="hover:text-zinc-300 transition-colors">
              Termos de Uso
            </a>
            <span>•</span>
            <a href="#privacidade" className="hover:text-zinc-300 transition-colors">
              Política de Privacidade
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 hover:text-orange-400 hover:border-orange-500/30 transition-all focus:outline-none"
            aria-label="Voltar ao topo"
          >
            <ArrowUpIcon size={16} weight="bold" />
          </button>
        </div>

        <div className="MainContainer px-4 md:px-10 max-w-6xl mx-auto mt-8 pt-6 border-t border-zinc-900/60 text-center text-[10px] text-zinc-600 leading-relaxed font-mono">
          <p>
            Este site não faz parte do Facebook, Instagram ou Meta, Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial da META, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}