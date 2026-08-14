import { ChartBarIcon, LightningIcon, MegaphoneIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";

const problems = [
  {
    icon: <MegaphoneIcon size={32} className="text-orange-500" weight="duotone" />,
    tag: "PILAR 01 • ATRAÇÃO",
    title: "Sua produção de conteúdo não atrai clientes?",
    description:
      "Se você publica com frequência mas não recebe mensagens de pessoas realmente interessadas em comprar, o seu gargalo é a falta de uma estratégia de atração voltada para conversão.",
    impact: "Solução: Curso de Conteúdo Estratégico",
  },
  {
    icon: <ChartBarIcon size={32} className="text-orange-500" weight="duotone" />,
    tag: "PILAR 02 • GESTÃO",
    title: "Sua equipe perde vendas por falta de organização?",
    description:
      "Se você não sabe em qual etapa da negociação o lead parou e perde contatos importantes por esquecer de fazer follow-up, sua operação precisa urgente de um processo claro de CRM.",
    impact: "Solução: Curso de Gestão e CRM de Vendas",
  },
  {
    icon: <LightningIcon size={32} className="text-orange-500" weight="duotone" />,
    tag: "PILAR 03 • ESCALA",
    title: "Você perde tempo com tarefas e mensagens manuais?",
    description:
      "Se sua equipe gasta horas em processos repetitivos ou pagando mensalidades absurdas de integradores como Zapier/Make, o n8n é a ferramenta que vai destravar sua escala.",
    impact: "Solução: Formação Prática em n8n",
  },
];

export function ProblemSection() {
  return (
    <section className="relative py-20 bg-zinc-950 text-zinc-100 overflow-hidden border-t border-zinc-900">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-orange-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="MainContainer px-4 md:px-10 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-orange-500 font-syne text-xs uppercase tracking-widest font-bold"
          >
            Diagnóstico da Operação
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-syne font-bold text-2xl sm:text-4xl text-zinc-100 mt-2 leading-tight"
          >
            QUAL É O MAIOR GARGALO DA SUA EMPRESA HOJE?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-sm sm:text-base mt-4"
          >
            Cada negócio vive um estágio diferente. Identifique a sua dor principal e escolha o treinamento ideal para resolver seu problema.
          </motion.p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-orange-500/40 transition-colors duration-300 relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700/50">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-syne font-bold text-lg text-zinc-100 mb-3 transition-colors">
                  {item.title}
                </h3>

                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800/60">
                <p className="text-xs font-semibold text-orange-400 font-mono">
                  {item.impact}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center bg-gradient-to-r from-zinc-900 via-zinc-900/80 to-zinc-900 border border-zinc-800 p-6 rounded-2xl max-w-3xl mx-auto"
        >
          <p className="text-sm sm:text-base text-zinc-200 font-medium">
            🎯 <strong className="text-orange-400">Treinamentos Direct-to-Point:</strong> Você pode adquirir cada curso de forma individual para resolver o desafio específico da sua operação.
          </p>
        </motion.div>
      </div>
    </section>
  );
}