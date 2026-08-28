import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, ArrowLeft, CheckCircle2 } from "lucide-react";
import { WHATSAPP_NUMBER, INSTAGRAM_URL, pushEvent } from "@/lib/lp";

type StepKey =
  | "principal_incomodo"
  | "momento"
  | "localizacao"
  | "interesse_consulta";

const valueItems = [
  {
    title: "Avaliação individual completa",
    text: "São analisadas sua anatomia, características da região dos olhos, principal incômodo, expectativas e histórico de saúde.",
  },
  {
    title: "Planejamento personalizado",
    text: "Se houver indicação, a Dra. Thayssa define a abordagem considerando as particularidades do seu caso, suas características e aquilo que é tecnicamente adequado.",
  },
  {
    title: "Preparo pré e pós-operatório",
    text: "Caso você prossiga com o procedimento, recebe orientações específicas para as diferentes etapas de preparação e recuperação.",
  },
  {
    title: "Acompanhamento próximo",
    text: "O cuidado continua após o procedimento, com retornos programados para acompanhamento da evolução.",
  },
];

const questions: {
  key: StepKey;
  title: string;
  helper?: string;
  options: string[];
  showValueBlock?: boolean;
}[] = [
  {
    key: "principal_incomodo",
    title: "O que mais te incomoda hoje na região dos olhos?",
    options: [
      "Excesso de pele nas pálpebras superiores",
      "Bolsas ou flacidez abaixo dos olhos",
      "Olhar cansado ou pesado",
      "Mais de uma dessas situações",
      "Ainda não sei identificar",
    ],
  },
  {
    key: "momento",
    title: "Quando você pensa em realizar uma avaliação?",
    options: [
      "Quero avaliar meu caso agora",
      "Pretendo me organizar nos próximos 3 meses",
      "Penso nisso para os próximos 6 meses",
      "Ainda estou apenas pesquisando",
    ],
  },
  {
    key: "localizacao",
    title: "Onde você mora hoje?",
    helper: "O atendimento é presencial, em Moema — São Paulo/SP.",
    options: [
      "São Paulo — Capital",
      "Grande São Paulo",
      "Interior de São Paulo",
      "Outro estado (posso viajar)",
      "Outro estado (não posso viajar)",
    ],
  },
  {
    key: "interesse_consulta",
    title:
      "Considerando esse formato de atendimento e o investimento de R$ 800 na consulta, qual é o seu momento agora?",
    showValueBlock: true,
    options: [
      "Quero conversar sobre uma avaliação",
      "Preciso me organizar, mas tenho interesse",
      "Ainda não sei se é o momento",
      "Só estou buscando informações por enquanto",
    ],
  },
];

const QUALIFIED_LOCATIONS = [
  "São Paulo — Capital",
  "Grande São Paulo",
  "Interior de São Paulo",
  "Outro estado (posso viajar)",
];

const QUALIFIED_INTENTS = [
  "Quero conversar sobre uma avaliação",
  "Preciso me organizar, mas tenho interesse",
];

const Qualification = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<Record<StepKey, string>>>({});
  const [result, setResult] = useState<"qualified" | "not-qualified" | null>(null);

  const current = questions[step];

  const evaluate = (all: Partial<Record<StepKey, string>>) => {
    const locationOk = QUALIFIED_LOCATIONS.includes(all.localizacao ?? "");
    const intentOk = QUALIFIED_INTENTS.includes(all.interesse_consulta ?? "");
    return locationOk && intentOk ? "qualified" : "not-qualified";
  };

  const select = (value: string) => {
    const all = { ...answers, [current.key]: value };
    setAnswers(all);
    pushEvent("qualificacao_step", {
      eventCategory: "qualificacao",
      eventLabel: `${current.key}:${value}`,
      step: step + 1,
    });

    if (step < questions.length - 1) {
      setStep(step + 1);
      return;
    }

    const outcome = evaluate(all);
    setResult(outcome);
    pushEvent(outcome === "qualified" ? "qualificacao_aprovada" : "qualificacao_reprovada", {
      eventCategory: "qualificacao",
      eventLabel: all.localizacao,
    });
  };

  const back = () => {
    if (result) {
      setResult(null);
      return;
    }
    if (step > 0) setStep(step - 1);
  };

  const restart = () => {
    setAnswers({});
    setStep(0);
    setResult(null);
  };

  const openWhatsApp = () => {
    pushEvent("whatsapp_click", {
      eventCategory: "engagement",
      eventLabel: "qualificacao_whatsapp",
    });
    const msg = encodeURIComponent(
      [
        "Olá! Vim pela página de Blefaroplastia da Dra. Thayssa e gostaria de entender como funciona a consulta.",
        "",
        "Respondi às perguntas iniciais da página:",
        `Principal incômodo: ${answers.principal_incomodo}`,
        `Momento: ${answers.momento}`,
        `Localização: ${answers.localizacao}`,
        `Consulta particular de R$ 800: ${answers.interesse_consulta}`,
      ].join("\n"),
    );
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}&utm_source=meta&utm_medium=cpc&utm_campaign=lp_blefaro`,
      "_blank",
    );
  };

  const openInstagram = () => {
    pushEvent("instagram_click", {
      eventCategory: "engagement",
      eventLabel: "qualificacao_instagram",
    });
    window.open(INSTAGRAM_URL, "_blank");
  };

  const progress = result ? 100 : ((step) / questions.length) * 100;

  return (
    <section
      id="qualificacao"
      className="scroll-mt-24 py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-sand/30 to-background"
    >
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8 space-y-3"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-graphite">
            Vamos entender o <span className="text-primary">seu caso</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Responda 4 perguntas rápidas para direcionarmos o melhor próximo passo
            para você.
          </p>
        </motion.div>

        <Card className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-card shadow-xl border-none">
          <div className="h-1.5 w-full rounded-full bg-accent/40 mb-6 overflow-hidden">
            <motion.div
              className="h-full bg-primary rounded-full"
              animate={{ width: `${Math.max(progress, 8)}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>

          <AnimatePresence mode="wait">
            {!result ? (
              <motion.div
                key={current.key}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-5"
              >
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    Pergunta {step + 1} de {questions.length}
                  </p>

                  {current.showValueBlock && (
                    <div className="space-y-4 rounded-2xl bg-accent/20 p-4 sm:p-5 mb-2">
                      <div className="space-y-2">
                        <h3 className="text-lg sm:text-2xl font-semibold text-graphite">
                          Como funciona a avaliação com a Dra. Thayssa?
                        </h3>
                        <p className="inline-block rounded-full bg-primary px-4 py-1.5 text-sm sm:text-base font-semibold text-primary-foreground">
                          Consulta particular: R$ 800
                        </p>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          A consulta é o momento em que a Dra. Thayssa avalia
                          individualmente o seu caso para entender o que realmente
                          está causando o incômodo na região dos olhos e quais
                          possibilidades podem fazer sentido para você.
                        </p>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2">
                        {valueItems.map((item) => (
                          <div
                            key={item.title}
                            className="rounded-2xl bg-background p-4 space-y-1.5"
                          >
                            <div className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                              <p className="text-sm sm:text-base font-semibold text-graphite">
                                {item.title}
                              </p>
                            </div>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                              {item.text}
                            </p>
                          </div>
                        ))}
                      </div>

                      <p className="text-xs sm:text-sm text-graphite/80 italic">
                        Os retornos programados de acompanhamento pré e
                        pós-operatório previstos pela Dra. Thayssa estão incluídos
                        no atendimento.
                      </p>
                    </div>
                  )}

                  <h3 className="text-lg sm:text-2xl font-semibold text-graphite">
                    {current.title}
                  </h3>
                  {current.helper && (
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {current.helper}
                    </p>
                  )}
                </div>

                <div className="grid gap-3">
                  {current.options.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => select(opt)}
                      className="text-left w-full rounded-2xl border border-border bg-background px-4 py-4 text-sm sm:text-base text-graphite transition-all hover:border-primary hover:bg-accent/30 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      {opt}
                    </button>
                  ))}
                </div>

                {step > 0 && (
                  <Button
                    variant="ghost"
                    onClick={back}
                    className="text-muted-foreground hover:text-graphite px-0"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
                  </Button>
                )}
              </motion.div>
            ) : result === "qualified" ? (
              <motion.div
                key="qualified"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-5 text-center"
              >
                <CheckCircle2 className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-xl sm:text-2xl font-semibold text-graphite">
                  Obrigada pelas suas respostas
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Pelo momento que você informou, o próximo passo pode ser conversar
                  com a equipe da Dra. Thayssa para entender melhor como funciona a
                  consulta, esclarecer suas dúvidas e verificar as datas disponíveis.
                </p>
                <p className="inline-block rounded-full bg-primary px-5 py-2 text-sm sm:text-base font-semibold text-primary-foreground">
                  Consulta particular: R$ 800
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  A indicação de Blefaroplastia ou de qualquer outra abordagem
                  somente pode ser definida após avaliação médica individual.
                </p>
                <Button
                  size="lg"
                  onClick={openWhatsApp}
                  className="group rounded-2xl px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                >
                  <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Falar com a equipe no WhatsApp
                </Button>
                <button
                  type="button"
                  onClick={restart}
                  className="block mx-auto text-xs sm:text-sm text-muted-foreground underline hover:text-graphite"
                >
                  Refazer as respostas
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="not-qualified"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-5 text-center"
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-graphite">
                  Que bom que você está se informando
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Pelo momento que você informou, talvez uma avaliação presencial
                  ainda não seja o próximo passo mais adequado para você.
                  <br />
                  <br />
                  Enquanto isso, você pode continuar acompanhando os conteúdos da
                  Dra. Thayssa no Instagram para entender melhor as possibilidades
                  relacionadas ao rejuvenescimento do olhar e esclarecer suas
                  dúvidas.
                </p>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={openInstagram}
                  className="rounded-2xl px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 w-full sm:w-auto"
                >
                  <Instagram className="mr-2 h-5 w-5" />
                  Seguir no Instagram
                </Button>
                <button
                  type="button"
                  onClick={restart}
                  className="block mx-auto text-xs sm:text-sm text-muted-foreground underline hover:text-graphite"
                >
                  Refazer as respostas
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </Card>

        <p className="text-xs sm:text-sm text-muted-foreground text-center mt-6 max-w-2xl mx-auto">
          A avaliação médica individual é indispensável para indicação do
          procedimento. Este conteúdo é informativo e não substitui a consulta.
        </p>
      </div>
    </section>
  );
};

export default Qualification;
