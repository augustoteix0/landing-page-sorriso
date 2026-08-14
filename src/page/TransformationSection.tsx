import { motion } from "framer-motion";
import { XCircle, CheckCircle, Warning, Sparkle } from "@phosphor-icons/react";

export function TransformationSection() {
  return (
    <section className="relative py-24 bg-zinc-950 text-zinc-100 overflow-hidden border-t border-zinc-900">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-orange-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="MainContainer px-4 md:px-10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-orange-500 font-syne text-xs uppercase tracking-widest font-bold"
          >
            A Mudança Real
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-syne font-bold text-2xl sm:text-4xl text-zinc-100 mt-2 leading-tight uppercase"
          >
            O QUE MUDA NA SUA ROTINA QUANDO VOCÊ APLICA NOSSOS MÉTODOS?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-sm sm:text-base mt-4"
          >
            Veja o impacto direto de sair de uma operação manual para uma estrutura automatizada e lucrativa.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-900/30 border border-red-500/20 rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-800">
                <div className="p-2.5 bg-red-500/10 rounded-xl text-red-400 border border-red-500/20">
                  <Warning size={24} weight="duotone" />
                </div>
                <h3 className="font-syne font-bold text-lg text-red-400">
                  Operação Caótica (Sem Processo)
                </h3>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm text-zinc-400">
                <li className="flex items-start gap-3">
                  <XCircle size={20} className="text-red-500 shrink-0 mt-0.5" weight="fill" />
                  <span>
                    <strong className="text-zinc-200">Perda contínua de contatos:</strong> Leads esquecidos no WhatsApp por falta de organização no CRM.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle size={20} className="text-red-500 shrink-0 mt-0.5" weight="fill" />
                  <span>
                    <strong className="text-zinc-200">Trabalho braçal repetitivo:</strong> Horas gastas enviando mensagens e copiando dados manualmente.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle size={20} className="text-red-500 shrink-0 mt-0.5" weight="fill" />
                  <span>
                    <strong className="text-zinc-200">Custos fixos elevados:</strong> Mensalidades caras em plataformas como Zapier e Make corroendo a margem.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle size={20} className="text-red-500 shrink-0 mt-0.5" weight="fill" />
                  <span>
                    <strong className="text-zinc-200">Incerteza de faturamento:</strong> Falta de previsibilidade de quantas vendas vão fechar no mês.
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-900/60 border border-orange-500/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_0_30px_rgba(249,115,22,0.05)]"
          >
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-800">
                <div className="p-2.5 bg-orange-500/10 rounded-xl text-orange-400 border border-orange-500/20">
                  <Sparkle size={24} weight="duotone" />
                </div>
                <h3 className="font-syne font-bold text-lg text-orange-400">
                  Operação Escalonável (Com Nossos Métodos)
                </h3>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm text-zinc-300">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-orange-500 shrink-0 mt-0.5" weight="fill" />
                  <span>
                    <strong className="text-zinc-100">Pipeline sob controle:</strong> Cada lead é rastreado automaticamente em tempo real do primeiro oi até o contrato.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-orange-500 shrink-0 mt-0.5" weight="fill" />
                  <span>
                    <strong className="text-zinc-100">Atendimento 24/7 no piloto automático:</strong> Fluxos no n8n rodando nutrição, avisos e cobranças sem você.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-orange-500 shrink-0 mt-0.5" weight="fill" />
                  <span>
                    <strong className="text-zinc-100">Economia real de caixa:</strong> Infraestrutura própria de automação ilimitada sem taxas por execução.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-orange-500 shrink-0 mt-0.5" weight="fill" />
                  <span>
                    <strong className="text-zinc-100">Métricas e previsibilidade:</strong> Clareza exata das taxas de conversão e do faturamento futuro.
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center max-w-2xl mx-auto"
        >
          <p className="font-syne text-base sm:text-lg text-zinc-200 font-medium italic">
            "Sua empresa não precisa de mais horas de trabalho, precisa dos processos e automações certas."
          </p>
        </motion.div>
      </div>
    </section>
  );
}