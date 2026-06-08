import { motion } from "framer-motion";

const steps = [
  {
    period: "Primeiras 48h",
    title: "Repouso inicial",
    description:
      "Aplicação de compressas frias e repouso com cabeceira elevada. Inchaço e equimoses são esperados.",
  },
  {
    period: "1ª semana",
    title: "Primeiros cuidados",
    description:
      "Retirada de pontos (geralmente entre 5 e 7 dias). Evitar esforço físico e exposição solar.",
  },
  {
    period: "2ª a 4ª semana",
    title: "Retorno gradual",
    description:
      "Redução significativa do inchaço. Retorno progressivo às atividades cotidianas.",
  },
  {
    period: "1 a 3 meses",
    title: "Resultado visível",
    description:
      "Cicatrização avançada. O resultado final começa a se definir gradualmente.",
  },
];

const Recovery = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-sand/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 space-y-3"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-graphite">
            Como é a <span className="text-primary">recuperação</span>?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Entenda o que esperar em cada fase do pós-operatório.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-4 sm:gap-6 relative">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="relative p-5 sm:p-6 rounded-2xl bg-card shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                {s.period}
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-graphite mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.description}
              </p>
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
          <strong className="text-graphite">Orientações personalizadas:</strong>{" "}
          cada paciente recebe instruções específicas conforme seu caso, garantindo
          uma recuperação segura e adequada.
        </motion.p>
      </div>
    </section>
  );
};

export default Recovery;