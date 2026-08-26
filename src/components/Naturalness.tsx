import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Sparkles, ShieldCheck, Fingerprint } from "lucide-react";

const points = [
  {
    icon: Fingerprint,
    title: "Preservar a identidade",
    description:
      "O planejamento considera as características do seu rosto, sem buscar padronização.",
  },
  {
    icon: Sparkles,
    title: "Respeitar a expressão",
    description:
      "A intenção é manter a naturalidade do olhar e da forma como você se expressa.",
  },
  {
    icon: ShieldCheck,
    title: "Decisão informada",
    description:
      "Entender o procedimento, os cuidados e os limites faz parte de uma escolha consciente.",
  },
];

const Naturalness = () => {
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
            E se o resultado ficar <span className="text-primary">artificial</span>?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Essa é uma das dúvidas mais comuns de quem considera a Blefaroplastia.
            Ninguém quer parecer outra pessoa — o desejo é continuar sendo você,
            com um olhar mais descansado.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Por isso, o planejamento individualizado é essencial: cada anatomia é
            diferente e o objetivo é buscar naturalidade, preservando traços e
            expressão. Os resultados variam de pessoa para pessoa e só podem ser
            discutidos em consulta.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className="h-full p-6 rounded-2xl bg-card shadow-sm hover:shadow-md transition-shadow border-none text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/40 flex items-center justify-center mx-auto mb-4">
                  <p.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-graphite mb-2">
                  {p.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Naturalness;
