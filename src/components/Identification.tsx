import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Eye, EyeOff, Moon, CloudMoon } from "lucide-react";

const items = [
  {
    icon: Eye,
    title: "Excesso de pele",
    description:
      "Alterações nas pálpebras superiores podem deixar o olhar visualmente mais pesado.",
  },
  {
    icon: EyeOff,
    title: "Bolsas abaixo dos olhos",
    description:
      "O volume na região inferior pode contribuir para uma aparência constantemente cansada.",
  },
  {
    icon: Moon,
    title: "Olhar pesado",
    description:
      "Algumas mudanças que acontecem com o tempo podem modificar a leveza da região dos olhos.",
  },
  {
    icon: CloudMoon,
    title: "Aparência cansada",
    description:
      "Às vezes, o olhar transmite um cansaço que não corresponde à maneira como a pessoa realmente se sente.",
  },
];

const Identification = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-graphite">
            Quando o olhar já não representa <span className="text-primary">como você se sente</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
             Com o passar dos anos, mudanças na região dos olhos podem fazer com
             que a aparência pareça mais cansada, pesada ou envelhecida, mesmo
             quando você está bem e se sente ativa.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Excesso de pele, bolsas e outras alterações ao redor dos olhos podem
            contribuir para essa percepção. A Blefaroplastia pode ser uma
            possibilidade em determinados casos, mas a indicação depende de uma
            avaliação médica individual.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Identification;
