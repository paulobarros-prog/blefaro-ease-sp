import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "A blefaroplastia é indicada para mim?",
      answer:
        "A blefaroplastia pode ser indicada para pessoas que apresentam excesso de pele nas pálpebras superiores ou inferiores, bolsas de gordura sob os olhos, ou olhar cansado. No entanto, apenas uma avaliação médica individual pode determinar se o procedimento é adequado para o seu caso específico, considerando suas características anatômicas, expectativas e condições de saúde.",
    },
    {
      question: "Como é feita a anestesia e quanto tempo dura o procedimento?",
      answer:
        "A blefaroplastia pode ser realizada com anestesia local associada à sedação leve, ou anestesia geral, dependendo da extensão do procedimento e preferência da paciente. O tempo cirúrgico varia entre 1 a 3 horas, conforme a técnica empregada e se envolve pálpebras superiores, inferiores ou ambas.",
    },
    {
      question: "As cicatrizes ficam visíveis? O resultado é natural?",
      answer:
        "As incisões são planejadas estrategicamente para ficarem escondidas nas dobras naturais das pálpebras (superiores) ou logo abaixo dos cílios inferiores. Com o tempo, as cicatrizes tornam-se praticamente imperceptíveis. O objetivo é sempre preservar a expressão natural do olhar, evitando resultados artificiais ou excessivamente esticados.",
    },
    {
      question: "Qual o tempo de recuperação?",
      answer:
        "O período de recuperação inicial é de cerca de 7 a 10 dias, quando os hematomas e inchaços mais evidentes diminuem significativamente. A maioria das pacientes retorna às atividades leves após esse período. Atividades físicas intensas devem ser evitadas por cerca de 3 a 4 semanas. O resultado final amadurece ao longo de 3 a 6 meses.",
    },
    {
      question:
        "É necessário fazer avaliação e exames? Quais são os riscos?",
      answer:
        "Sim, a avaliação pré-operatória com a cirurgiã plástica é fundamental. Exames laboratoriais e, em alguns casos, avaliação oftalmológica podem ser solicitados. Como qualquer cirurgia, existem riscos inerentes (infecção, sangramento, assimetria, alterações temporárias ou permanentes na função palpebral), que serão discutidos de forma transparente durante a consulta. A escolha de profissional qualificado e seguimento rigoroso das orientações minimizam consideravelmente esses riscos.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-graphite">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Tire suas principais dúvidas sobre o procedimento
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card rounded-2xl px-6 border-none shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6 text-base md:text-lg font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
