import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const types = [
  {
    title: "Blefaroplastia Superior",
    description:
      "Correção do excesso de pele e gordura nas pálpebras superiores, restaurando a abertura natural do olhar.",
  },
  {
    title: "Blefaroplastia Inferior",
    description:
      "Tratamento das bolsas e flacidez sob os olhos, amenizando a aparência de cansaço.",
  },
  {
    title: "Blefaroplastia Combinada",
    description:
      "Abordagem completa que trata tanto as pálpebras superiores quanto inferiores no mesmo procedimento.",
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
            O que é a <span className="text-primary">Blefaroplastia</span>?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            A blefaroplastia é um procedimento cirúrgico que visa corrigir
            alterações estéticas e funcionais das pálpebras. A cirurgia trata
            excesso de pele, gordura ou flacidez, proporcionando um olhar mais
            descansado e natural, respeitando as características de cada paciente.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {types.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className="h-full p-6 sm:p-8 rounded-2xl bg-card shadow-sm hover:shadow-md transition-all border-none text-center">
                <div className="w-10 h-10 rounded-full bg-primary/15 text-primary font-bold flex items-center justify-center mx-auto mb-4">
                  {i + 1}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-graphite mb-3">
                  {t.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {t.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutProcedure;