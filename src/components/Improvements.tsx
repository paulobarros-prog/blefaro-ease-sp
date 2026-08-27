import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const items = [
  "Aparência de cansaço na região dos olhos",
  "Excesso de pele nas pálpebras superiores",
  "Bolsas e flacidez nas pálpebras inferiores",
  "Sensação de olhar pesado ou fechado",
  "Harmonia entre olhar e expressão facial",
  "Conforto no dia a dia e na maquiagem",
];

const Improvements = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 space-y-3"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-graphite">
            O que a Blefaroplastia pode <span className="text-primary">melhorar</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Aspectos que costumam ser discutidos em consulta quando a região dos
            olhos incomoda. O que se aplica ao seu caso depende da avaliação médica.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
          {items.map((b, i) => (
            <motion.div
              key={b}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-start gap-3 p-4 sm:p-5 rounded-2xl bg-card shadow-sm"
            >
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm sm:text-base text-graphite">{b}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-xs sm:text-sm text-muted-foreground text-center mt-8 max-w-3xl mx-auto px-4 italic">
          Não há garantia de resultados: cada organismo responde de forma
          diferente. A avaliação médica individual é indispensável para indicação
          do procedimento.
        </p>
      </div>
    </section>
  );
};

export default Improvements;
