import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaretDownIcon, QuestionIcon, ChatCircleDotsIcon } from "@phosphor-icons/react";

const faqs = [
  {
    question: "Posso comprar apenas um dos cursos isoladamente?",
    answer:
      "Sim! Você tem total liberdade. Se o seu gargalo hoje é apenas organizar vendas, você pode adquirir só o Curso de CRM (R$ 97). Se precisa atrair clientes, pode pegar só o de Conteúdo (R$ 297). O Combo de R$ 500 é recomendado para quem deseja levar a estrutura completa com desconto.",
  },
  {
    question: "Preciso saber programação para aprender n8n?",
    answer:
      "Não. A Formação em n8n foi desenhada do zero para profissionais de negócios, gestores e freelancers. Ensinamos a lógica visual de nós (nodes), integrações via Webhooks e rotas sem precisar escrever linhas de código complexas.",
  },
  {
    question: "Por quanto tempo terei acesso às aulas?",
    answer:
      "Você terá acesso garantido por 1 ano (12 meses) a todo o conteúdo gravado, incluindo futuras atualizações dos módulos e materiais de apoio.",
  },
  {
    question: "Como e quando recebo meu acesso após a compra?",
    answer:
      "O acesso é imediato. Assim que o pagamento for confirmado (no PIX ou Cartão de Crédito é instantâneo), você receberá um e-mail com os dados de login para entrar na plataforma de alunos.",
  },
  {
    question: "Qual ferramenta de CRM é ensinada no curso?",
    answer:
      "Ensinamos a metodologia de gestão de pipeline e processos comerciais que pode ser aplicada em qualquer CRM do mercado (Kommo, RD Station, HubSpot, Pipedrive, etc.), focando em conceitos visuais e acompanhamento de etapas.",
  },
  {
    question: "Como funciona a garantia de 7 dias?",
    answer:
      "Se dentro de 7 dias após a compra você entender que o treinamento não atendeu às suas expectativas, basta solicitar o reembolso na própria plataforma com 1 clique e devolveremos 100% do seu dinheiro.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 bg-zinc-950 text-zinc-100 border-t border-zinc-900 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-orange-500/5 blur-[170px] pointer-events-none rounded-full" />

      <div className="MainContainer px-4 md:px-10 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-orange-500 font-syne text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-1.5"
          >
            <QuestionIcon size={16} className="text-orange-500" /> Tira-Dúvidas
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-syne font-bold text-2xl sm:text-4xl text-zinc-100 mt-2 leading-tight uppercase"
          >
            PERGUNTAS FREQUENTES
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-sm sm:text-base mt-4"
          >
            Tudo o que você precisa saber antes de escolher o seu treinamento.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl overflow-hidden transition-colors hover:border-zinc-700"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-syne font-bold text-sm sm:text-base text-zinc-100 focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <div
                    className={`p-1.5 rounded-lg bg-zinc-800/80 text-orange-400 border border-zinc-700/50 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-orange-500/10 border-orange-500/30" : ""
                    }`}
                  >
                    <CaretDownIcon size={18} weight="bold" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 sm:px-6 pb-6 text-zinc-400 text-xs sm:text-sm leading-relaxed border-t border-zinc-800/50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <p className="text-xs sm:text-sm text-zinc-400">
            Ainda ficou com alguma dúvida específica?{" "}
            <a
              href="#whatsapp-suporte"
              className="text-orange-400 font-bold hover:underline inline-flex items-center gap-1"
            >
              <ChatCircleDotsIcon size={16} className="inline" /> Fale diretamente com o nosso suporte no WhatsApp
            </a>
          </p>
        </motion.div>

      </div>
    </section>
  );
}