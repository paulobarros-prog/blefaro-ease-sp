import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Olhar mais descansado e rejuvenescido",
  "Melhora na harmonia facial",
  "Maior facilidade na aplicação de maquiagem",
  "Possível melhora no campo visual (em casos de excesso de pele superior)",
  "Resultado natural, respeitando as características individuais",
  "Cicatrizes discretas, geralmente imperceptíveis",
];

const Benefits = () => {
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
            Benefícios buscados com o procedimento
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Resultados que pacientes costumam buscar com a blefaroplastia.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
          {benefits.map((b, i) => (
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
          Os resultados podem variar de acordo com as características individuais
          de cada paciente. Conteúdo educativo, que não substitui a consulta médica.
        </p>
      </div>
    </section>
  );
};

export default Benefits;