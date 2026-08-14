import { motion } from "framer-motion";
import { ShieldCheckIcon, ArrowCounterClockwiseIcon, LockKeyIcon, CheckCircleIcon } from "@phosphor-icons/react";

export function GuaranteeSection() {
  return (
    <section className="relative py-24 bg-zinc-950 text-zinc-100 border-t border-zinc-900 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/5 blur-[170px] pointer-events-none rounded-full" />

      <div className="MainContainer px-4 md:px-10 relative z-10">
        <div className="max-w-4xl mx-auto bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          
          <div className="text-center mb-8">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-emerald-400 font-syne text-xs uppercase tracking-widest font-bold inline-flex items-center gap-1.5 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20"
            >
              <ShieldCheckIcon size={16} className="text-emerald-400" /> Risco Zero Para Você
            </motion.span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-5 flex flex-col items-center justify-center text-center p-6 bg-zinc-950/80 rounded-2xl border border-zinc-800"
            >
              <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-4 text-emerald-400">
                <ShieldCheckIcon size={48} weight="duotone" />
              </div>

              <span className="font-syne font-extrabold text-5xl text-zinc-100 tracking-tight">
                7 DIAS
              </span>

              <span className="font-syne font-bold text-xs uppercase tracking-widest text-emerald-400 mt-1">
                Garantia Incondicional
              </span>

              <p className="text-[11px] font-mono text-zinc-500 mt-3">
                100% de reembolso sem burocracia
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-7 space-y-4"
            >
              <h2 className="font-syne font-bold text-xl sm:text-3xl text-zinc-100 uppercase leading-tight">
                TESTE QUALQUER TREINAMENTO SEM COMPROMISSO
              </h2>

              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Inscreva-se hoje, acesse a plataforma e assista às aulas. Se dentro do prazo de <strong className="text-zinc-200">7 dias</strong> você achar que o conteúdo não agregou valor à sua operação, basta solicitar o reembolso na própria plataforma.
              </p>

              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Devolveremos <strong className="text-emerald-400">100% do seu investimento</strong>. Sem perguntas desagradáveis, sem letras miúdas e sem ressentimentos.
              </p>

              <div className="pt-4 border-t border-zinc-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckCircleIcon size={16} className="text-emerald-400 shrink-0" weight="fill" />
                  <span>Acesso imediato no e-mail</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowCounterClockwiseIcon size={16} className="text-emerald-400 shrink-0" weight="bold" />
                  <span>Reembolso em 1 clique</span>
                </div>
                <div className="flex items-center gap-2">
                  <LockKeyIcon size={16} className="text-emerald-400 shrink-0" weight="bold" />
                  <span>Pagamento criptografado</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon size={16} className="text-emerald-400 shrink-0" weight="fill" />
                  <span>Suporte direto na área de alunos</span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}