import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Quando e onde será o The Lash Boss Sorocaba?",
    answer: "O evento será no dia 22 de Junho de 2026, em Sorocaba – SP. O endereço exato será divulgado em breve para os inscritos.",
  },
  {
    question: "Preciso ser lash designer para participar?",
    answer: "O evento é voltado para lash designers e empreendedoras da área de beleza que desejam crescer em posicionamento, técnica e mentalidade. Se você atua ou deseja atuar nesse mercado, o Lash Boss é para você.",
  },
  {
    question: "Qual a diferença entre o ingresso Boss Elite e Boss VIP?",
    answer: "O Boss Elite garante acesso completo ao evento, conteúdo exclusivo, certificado e coffee break. Já o Boss VIP inclui tudo do Elite, mais lugar reservado nas primeiras filas, networking exclusivo com palestrantes, kit VIP e acesso ao grupo pós-evento.",
  },
  {
    question: "Posso parcelar o ingresso?",
    answer: "Sim! Oferecemos opções de parcelamento no cartão de crédito. Os detalhes aparecem no momento da compra.",
  },
  {
    question: "Como funciona a lista de espera?",
    answer: "Ao se cadastrar na lista de espera, você será notificada em primeira mão sobre novidades, com acesso antecipado à venda de ingressos e condições especiais.",
  },
  {
    question: "O evento terá certificado?",
    answer: "Sim, todos os participantes receberão certificado digital de participação.",
  },
];

const FaqSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-gradient-section relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-body tracking-[0.4em] uppercase text-primary mb-4">
            Dúvidas
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            Perguntas <span className="text-gradient-gold">Frequentes</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="border border-border rounded-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left bg-card hover:bg-card/80 transition-colors"
              >
                <span className="font-body text-sm font-medium text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-primary shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-60" : "max-h-0"
                }`}
              >
                <p className="px-5 pb-5 text-sm font-body text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
