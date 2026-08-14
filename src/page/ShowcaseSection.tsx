import { motion } from "framer-motion";
import { CpuIcon, FunnelIcon, MegaphoneIcon, CheckCircleIcon, LightningIcon } from "@phosphor-icons/react";

const showcases = [
  {
    icon: <CpuIcon size={28} className="text-orange-500" weight="duotone" />,
    tag: "FORMAÇÃO N8N",
    title: "Fluxos de Automação Sem Limites",
    description:
      "Aprenda a montar workflows no n8n que integram formulários, CRMs e WhatsApp. Sem pagar taxas por tarefa e com total controle da sua infraestrutura.",
    highlights: ["Integração via Webhook em tempo real", "Disparos automáticos no WhatsApp", "Zero custos com Zapier/Make"],
    codeSnippet: "Webhook -> Lead Validation -> CRM Pipeline -> WhatsApp Trigger",
    terminalTitle: "n8n",
  },
  {
    icon: <FunnelIcon size={28} className="text-orange-500" weight="duotone" />,
    tag: "CURSO DE CRM",
    title: "Gestão Visual de Oportunidades",
    description:
      "Visualize exatamente em qual etapa cada negociação está. Configure lembretes de follow-up e nunca mais perca um cliente por esquecimento.",
    highlights: ["Pipeline Kanban customizável", "Lead Scoring para priorizar contatos", "Relatórios de taxa de conversão"],
    codeSnippet: "Prospecção -> Qualificação -> Proposta Enviada -> Fechamento",
    terminalTitle: "pipeline",
  },
  {
    icon: <MegaphoneIcon size={28} className="text-orange-500" weight="duotone" />,
    tag: "CONTEÚDO ESTRATÉGICO",
    title: "Roteiros Focados em Venda Direta",
    description:
      "Acesse a estrutura exata de posts e vídeos projetados para transformar seguidores e visitantes em oportunidades reais de negócio.",
    highlights: ["Gatilhos de atração high-ticket", "Copys de quebra de objeção", "Calendário focado em conversão"],
    codeSnippet: "Gancho (3s) -> Retenção (A Dor) -> Oferta (Ação Direta)",
    terminalTitle: "copy",
  },
];

export function ShowcaseSection() {
  return (
    <section className="relative py-24 bg-zinc-950 text-zinc-100 border-t border-zinc-900 overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-orange-500/5 blur-[180px] pointer-events-none rounded-full" />

      <div className="MainContainer px-4 md:px-10 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-orange-500 font-syne text-xs uppercase tracking-widest font-bold"
          >
            Bastidores & Prática
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-syne font-bold text-2xl sm:text-4xl text-zinc-100 mt-2 leading-tight uppercase"
          >
            A ESTRUTURA PRÁTICA QUE VOCÊ VAI DOMINAR
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-sm sm:text-base mt-4"
          >
            Sem teorias cansativas. Você aprende aplicando diretamente nos modelos e ferramentas da sua operação.
          </motion.p>
        </div>

        <div className="space-y-20 max-w-5xl mx-auto">
          {showcases.map((item, index) => {
            const isEven = index % 2 === 1;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-16 ${
                  index !== showcases.length - 1 ? "border-b border-zinc-900" : ""
                }`}
              >
                <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded-full border border-orange-500/20">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-syne font-bold text-xl sm:text-2xl text-zinc-100 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <ul className="space-y-3">
                    {item.highlights.map((h, hIndex) => (
                      <li key={hIndex} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <CheckCircleIcon size={18} className="text-orange-500 shrink-0" weight="fill" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                
                <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl">
                    <div className="bg-zinc-900 px-4 py-2.5 border-b border-zinc-800 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                      </div>
                      <span className="font-mono text-[11px] text-zinc-500">
                        {item.terminalTitle}
                      </span>
                    </div>

                    <div className="p-5 font-mono text-xs text-zinc-300 space-y-3">
                      <div className="flex items-center gap-2 text-orange-400/90 pb-2 border-b border-zinc-800/60">
                        <LightningIcon size={16} className="text-orange-500 shrink-0" />
                        <span className="text-[11px] font-semibold tracking-wide">ESTRUTURA DE EXECUÇÃO:</span>
                      </div>

                      <div className="bg-zinc-950 p-3 rounded-lg border border-zinc-800/80 text-orange-400 text-[11px] leading-relaxed break-all">
                        {item.codeSnippet}
                      </div>

                      <div className="text-[10px] text-zinc-500 flex items-center justify-between pt-1">
                        <span>Status: Active</span>
                        <span className="text-emerald-500">● Ready to deploy</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}