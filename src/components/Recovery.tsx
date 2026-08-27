import { motion } from "framer-motion";

const steps = [
  {
    period: "Primeiros dias",
    title: "Repouso e cuidados",
    description:
      "Período de cuidados mais intensos, com repouso e orientações específicas. Inchaço e equimoses podem ocorrer.",
  },
  {
    period: "Primeira semana",
    title: "Retorno inicial",
    description:
      "Fase de acompanhamento próximo, com retorno ao consultório conforme a orientação da equipe.",
  },
  {
    period: "Semanas seguintes",
    title: "Retomada gradual",
    description:
      "As atividades vão sendo retomadas de forma progressiva, respeitando o ritmo de cada pessoa.",
  },
  {
    period: "Meses seguintes",
    title: "Evolução do processo",
    description:
      "A cicatrização continua evoluindo ao longo do tempo, com acompanhamento programado.",
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
          className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-graphite">
            Como é o <span className="text-primary">pós-operatório</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            O pós-operatório envolve cuidados, repouso e acompanhamento. Os prazos
            e as orientações são individuais e definidos pela equipe médica de
            acordo com cada caso — não existe um roteiro único para todas as pessoas.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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

        <p className="text-xs sm:text-sm text-muted-foreground text-center mt-8 max-w-3xl mx-auto px-4">
          <strong className="text-graphite">Orientações personalizadas:</strong>{" "}
          cada paciente recebe instruções específicas conforme seu caso. A
          avaliação médica individual é indispensável para indicação do procedimento.
        </p>
      </div>
    </section>
  );
};

export default Recovery;
