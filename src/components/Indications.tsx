import { motion } from "framer-motion";
import { Eye, EyeOff, Moon, Scale, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const items = [
  {
    icon: Eye,
    title: "Excesso de pele nas pálpebras",
    description:
      "Acúmulo de pele que pode afetar a aparência ou o campo visual.",
  },
  {
    icon: EyeOff,
    title: "Bolsas sob os olhos",
    description:
      "Acúmulo de gordura ou flacidez na região inferior dos olhos.",
  },
  {
    icon: Moon,
    title: "Olhar cansado",
    description:
      "Aparência de fadiga constante, mesmo com repouso adequado.",
  },
  {
    icon: Scale,
    title: "Assimetria palpebral",
    description:
      "Diferença perceptível entre as pálpebras que causa desconforto estético.",
  },
  {
    icon: Sparkles,
    title: "Dificuldade com maquiagem",
    description:
      "Excesso de pele que compromete a aplicação ou fixação de produtos.",
  },
];

const Indications = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 space-y-3"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-graphite">
            Para quem a <span className="text-primary">blefaroplastia</span> é indicada?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            A cirurgia de pálpebras pode ser uma opção para quem apresenta algumas
            das seguintes características.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Card className="h-full p-5 sm:p-6 rounded-2xl bg-card shadow-sm hover:shadow-md transition-shadow border-none">
                <div className="w-12 h-12 rounded-xl bg-accent/40 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-graphite mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-xs sm:text-sm text-muted-foreground text-center mt-8 max-w-3xl mx-auto px-4"
        >
          <strong className="text-graphite">Importante:</strong> cada caso é único.
          A indicação do procedimento depende de avaliação médica individual.
        </motion.p>
      </div>
    </section>
  );
};

export default Indications;