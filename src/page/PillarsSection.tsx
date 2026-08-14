import { motion } from "framer-motion";
import { Compass, Funnel, Cpu, CheckCircle } from "@phosphor-icons/react";

const pillars = [
  {
    number: "01",
    title: "Conteúdo Estratégico",
    badge: "Atração High-Ticket",
    description:
      "Transforme sua produção de conteúdo em uma esteira de atração de clientes qualificados, sem precisar virar escravo do algoritmo.",
    icon: <Compass size={32} className="text-orange-500" weight="duotone" />,
    features: [
      "Linha editorial focada em intenção de compra",
      "Scripts e copys de conversão direta",
      "Estratégia para atrair tomadores de decisão",
    ],
  },
  {
    number: "02",
    title: "CRM de Alta Conversão",
    badge: "Gestão & Pipeline",
    description:
      "Organize sua operação comercial para acompanhar cada oportunidade do primeiro contato até o fechamento sem perder vendas no caminho.",
    icon: <Funnel size={32} className="text-orange-500" weight="duotone" />,
    features: [
      "Estruturação de funil de vendas do zero",
      "Qualificação de leads (Lead Scoring)",
      "Processo de follow-up e métricas de conversão",
    ],
  },
  {
    number: "03",
    title: "Automação com n8n",
    badge: "Escala & Eficiência",
    description:
      "Conecte toda a sua estrutura com o n8n para rodar fluxos automáticos no WhatsApp, e-mail e CRM sem taxas por tarefa.",
    icon: <Cpu size={32} className="text-orange-500" weight="duotone" />,
    features: [
      "Instalação e configuração do n8n",
      "Criação de Webhooks e integrações ao vivo",
      "Disparos e alertas no WhatsApp no piloto automático",
    ],
  },
];

export function PillarsSection() {
  return (
    <section className="relative py-24 bg-zinc-950 text-zinc-100 border-t border-zinc-900 overflow-hidden">
      
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-orange-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="MainContainer px-4 md:px-10 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-orange-500 font-syne text-xs uppercase tracking-widest font-bold"
          >
            A Metodologia
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-syne font-bold text-2xl sm:text-4xl text-zinc-100 mt-2 leading-tight"
          >
            COMO A MÁQUINA DE VENDAS FUNCIONA NA PRÁTICA
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-sm sm:text-base mt-4"
          >
            Três pilares fundamentais projetados para rodarem juntos e transformarem a sua operação digital.
          </motion.p>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-orange-500/50 transition-all duration-300 relative group"
            >
              <div>
               
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 group-hover:border-orange-500/30 transition-colors">
                    {pillar.icon}
                  </div>
                  <span className="font-syne font-bold text-3xl text-zinc-900 group-hover:text-zinc-700 transition-colors">
                    {pillar.number}
                  </span>
                </div>

                <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 inline-block mb-3">
                  {pillar.badge}
                </span>

                <h3 className="font-syne font-bold text-xl text-zinc-100 mb-3">
                  {pillar.title}
                </h3>

                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {pillar.description}
                </p>

                
                <ul className="space-y-3 pt-4 border-t border-zinc-800/80">
                  {pillar.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle size={18} className="text-orange-500 shrink-0 mt-0.5" weight="fill" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}