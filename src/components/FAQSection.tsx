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
      question: "O resultado fica natural?",
      answer:
        "O objetivo do planejamento individualizado é preservar as características e a expressão de cada pessoa, buscando naturalidade. Como cada anatomia é diferente, os resultados variam e só podem ser discutidos em avaliação médica presencial.",
    },
    {
      question: "As cicatrizes ficam visíveis?",
      answer:
        "As incisões são planejadas para acompanhar as dobras naturais das pálpebras. A cicatrização evolui ao longo do tempo e depende de fatores individuais, como o tipo de pele e os cuidados no pós-operatório. Esse ponto é sempre explicado em consulta.",
    },
    {
      question: "Como é o pós-operatório?",
      answer:
        "Envolve repouso, cuidados específicos e retornos programados. Inchaço e equimoses podem ocorrer nos primeiros dias. Os prazos para retomar as atividades são individuais e definidos pela equipe médica de acordo com cada caso.",
    },
    {
      question: "Quanto custa a consulta de avaliação?",
      answer:
        "A consulta de avaliação com a Dra. Thayssa tem o valor de R$ 800. É nesse momento que seu caso é analisado individualmente, com explicações sobre possibilidades, cuidados e limites. Valores de procedimentos só são discutidos após a avaliação.",
    },
    {
      question: "Onde é o atendimento?",
      answer:
        "O atendimento é presencial, em Moema — São Paulo/SP: Alameda dos Maracatins, 1.217, Conj. 813.",
    },
    {
      question: "Preciso de exames ou preparo antes?",
      answer:
        "A avaliação pré-operatória é fundamental. Exames e, em alguns casos, avaliações complementares podem ser solicitados. Como em qualquer cirurgia, existem riscos, que são discutidos de forma transparente durante a consulta.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 sm:space-y-8"
        >
          <div className="text-center space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-graphite">
              Perguntas Frequentes
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Tire suas principais dúvidas sobre o procedimento
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card rounded-xl sm:rounded-2xl px-4 sm:px-6 border-none shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4 sm:py-6 text-sm sm:text-base md:text-lg font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-4 sm:pb-6">
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
