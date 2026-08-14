import { motion } from "framer-motion";
import { CheckCircleIcon, ArrowRightIcon, ShieldCheckIcon, SparkleIcon } from "@phosphor-icons/react";

const plans = [
  {
    name: "Curso de CRM & Gestão",
    badge: "STARTER",
    price: "97",
    installment: "12x de R$ 9,74",
    description: "Para quem precisa organizar o funil de vendas e parar de perder contatos por falta de follow-up.",
    features: [
      "Acesso ao módulo de CRM do zero",
      "Estruturação de pipeline visual",
      "Modelos de qualificação de leads",
      "Suporte na plataforma por 1 ano",
    ],
    ctaText: "QUERO APENAS O CRM",
    ctaUrl: "#checkout-crm",
    featured: false,
  },
  {
    name: "Conteúdo Estratégico",
    badge: "INTERMEDIÁRIO",
    price: "297",
    installment: "12x de R$ 29,82",
    description: "Para quem quer transformar seguidores em clientes qualificados através de postagens focadas em conversão.",
    features: [
      "Acesso ao treinamento de Conteúdo",
      "Linha editorial high-ticket",
      "Scripts de vendas para vídeos e posts",
      "Calendário de conteúdo comercial",
      "Suporte na plataforma por 1 ano",
    ],
    ctaText: "QUERO O CURSO DE CONTEÚDO",
    ctaUrl: "#checkout-conteudo",
    featured: false,
  },
  {
    name: "Máquina de Vendas Completa",
    badge: "COMBO COMPLETO • MELHOR VALOR",
    price: "500",
    installment: "12x de R$ 50,20",
    description: "Leve todos os 3 treinamentos juntos (Conteúdo + CRM + n8n) com economia de R$ 394.",
    features: [
      "Curso de Conteúdo Estratégico (R$ 297)",
      "Curso de CRM & Gestão (R$ 97)",
      "Formação Prática em n8n (R$ 500)",
      "Templates .json prontos do n8n",
      "Suporte prioritário + Atualizações",
    ],
    ctaText: "QUERO O COMBO COMPLETO",
    ctaUrl: "#checkout-combo",
    featured: true,
  },
];

export function PricingSection() {
  return (
    <section id="ofertas" className="relative py-24 bg-zinc-950 text-zinc-100 border-t border-zinc-900 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-orange-500/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="MainContainer px-4 md:px-10 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-orange-500 font-syne text-xs uppercase tracking-widest font-bold"
          >
            Investimento & Acesso
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-syne font-bold text-2xl sm:text-4xl text-zinc-100 mt-2 leading-tight uppercase"
          >
            ESCOLHA A OPÇÃO IDEAL PARA A SUA OPERAÇÃO
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-sm sm:text-base mt-4"
          >
            Adquira o módulo específico para o seu desafio atual ou economize levando o ecossistema completo.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-300 ${
                plan.featured
                  ? "bg-zinc-900/90 border-2 border-orange-500 shadow-[0_0_40px_rgba(249,115,22,0.15)] lg:-translate-y-2"
                  : "bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                      plan.featured
                        ? "bg-orange-500 text-zinc-950"
                        : "bg-zinc-800 text-zinc-400 border border-zinc-700/50"
                    }`}
                  >
                    {plan.badge}
                  </span>
                  {plan.featured && <SparkleIcon size={20} className="text-orange-400" weight="fill" />}
                </div>

                <h3 className="font-syne font-bold text-xl text-zinc-100 mb-2">
                  {plan.name}
                </h3>

                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 min-h-[40px]">
                  {plan.description}
                </p>

                <div className="py-4 border-y border-zinc-800/80 mb-6">
                  <span className="text-xs text-zinc-500 font-mono block">OU À VISTA</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-sm font-bold text-zinc-400">R$</span>
                    <span className="font-syne font-extrabold text-4xl sm:text-5xl text-zinc-100">
                      {plan.price}
                    </span>
                  </div>
                  <span className="text-xs text-orange-400 font-mono mt-1 block">
                    {plan.installment}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <CheckCircleIcon
                        size={18}
                        className={`shrink-0 mt-0.5 ${plan.featured ? "text-orange-400" : "text-zinc-500"}`}
                        weight="fill"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <a
                  href={plan.ctaUrl}
                  className={`w-full py-3.5 px-4 rounded-xl font-syne font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 ${
                    plan.featured
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 text-zinc-950 shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:scale-[1.02]"
                      : "bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700/50"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRightIcon size={16} weight="bold" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400 font-mono"
        >
          <div className="flex items-center gap-2">
            <ShieldCheckIcon size={18} className="text-emerald-500" />
            <span>Pagamento 100% Seguro</span>
          </div>
          <div className="flex items-center gap-2">
            <SparkleIcon size={18} className="text-orange-500" />
            <span>Acesso Imediato no E-mail</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}