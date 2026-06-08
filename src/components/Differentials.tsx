import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserCheck, ClipboardList, ShieldCheck, HeartHandshake, MessageCircle } from "lucide-react";

const items = [
  {
    icon: UserCheck,
    title: "Avaliação individual completa",
    description:
      "Cada paciente é único. A consulta inclui análise detalhada da anatomia, expectativas e histórico de saúde.",
  },
  {
    icon: ClipboardList,
    title: "Planejamento personalizado",
    description:
      "O procedimento é planejado considerando as particularidades de cada caso, buscando resultados naturais e harmônicos.",
  },
  {
    icon: ShieldCheck,
    title: "Preparo pré e pós-operatório",
    description:
      "Orientações claras e cuidados específicos para cada fase, garantindo segurança e recuperação adequada.",
  },
  {
    icon: HeartHandshake,
    title: "Acompanhamento próximo",
    description:
      "Suporte durante todo o processo, com retornos programados até a estabilização dos resultados.",
  },
];

const Differentials = () => {
  const openWhatsApp = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'whatsapp_click',
      eventCategory: 'engagement',
      eventAction: 'click',
      eventLabel: 'differentials_falar_equipe'
    });
    const msg = encodeURIComponent(
      "Olá, gostaria de saber mais sobre o atendimento da Dra. Thayssa e agendar uma avaliação."
    );
    window.open(
      `https://wa.me/5511932366856?text=${msg}&utm_source=meta&utm_medium=cpc&utm_campaign=lp_blefaro`,
      "_blank"
    );
  };

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
            Diferenciais do <span className="text-primary">atendimento</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Como funciona o cuidado no consultório da Dra. Thayssa Barreto.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className="h-full p-5 sm:p-6 rounded-2xl bg-card shadow-sm hover:shadow-md transition-shadow border-none flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/40 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-graphite mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8 sm:mt-12 text-center"
        >
          <Button
            size="lg"
            onClick={openWhatsApp}
            className="group rounded-2xl px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto max-w-md mx-auto"
          >
            <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform flex-shrink-0" />
            <span className="truncate">Falar com a equipe</span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Differentials;