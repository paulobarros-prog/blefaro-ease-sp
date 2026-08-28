import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const steps = [
  {
    title: "Avaliação individual",
    description:
      "Análise da anatomia das pálpebras, do histórico de saúde e das suas expectativas.",
  },
  {
    title: "Planejamento do caso",
    description:
       "Definição da técnica adequada, pálpebras superiores, inferiores ou ambas, conforme cada situação.",
  },
  {
    title: "Procedimento",
    description:
      "Realizado em ambiente adequado, com equipe e cuidados definidos durante a consulta.",
  },
  {
    title: "Acompanhamento",
    description:
      "Orientações de pós-operatório e retornos programados até a estabilização.",
  },
];

const AboutProcedure = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-sand/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-graphite">
            Como funciona a <span className="text-primary">Blefaroplastia</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            A Blefaroplastia é um procedimento cirúrgico que atua na região das
            pálpebras, podendo envolver o excesso de pele, o volume de gordura e
            a flacidez local. A técnica utilizada depende da anatomia e das
            necessidades de cada pessoa, sempre definida em avaliação médica.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className="h-full p-6 rounded-2xl bg-card shadow-sm hover:shadow-md transition-all border-none text-center">
                <div className="w-10 h-10 rounded-full bg-primary/15 text-primary font-bold flex items-center justify-center mx-auto mb-4">
                  {i + 1}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-graphite mb-2">
                  {s.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {s.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <p className="text-xs sm:text-sm text-muted-foreground text-center mt-8 max-w-3xl mx-auto px-4">
          A avaliação médica individual é indispensável para indicação do
          procedimento. Este conteúdo é informativo e não substitui a consulta.
        </p>
      </div>
    </section>
  );
};

export default AboutProcedure;
