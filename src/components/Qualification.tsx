import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, ArrowLeft, CheckCircle2 } from "lucide-react";
import { WHATSAPP_NUMBER, INSTAGRAM_URL, pushEvent } from "@/lib/lp";

type StepKey = "regiao" | "incomodo" | "momento" | "intencao";

const questions: {
  key: StepKey;
  title: string;
  helper?: string;
  options: string[];
}[] = [
  {
    key: "regiao",
    title: "Onde você mora hoje?",
    helper: "O atendimento é presencial, em Moema — São Paulo/SP.",
    options: [
      "São Paulo – Capital",
      "Grande São Paulo",
      "Interior de São Paulo",
      "Outro estado (posso viajar)",
      "Outro estado (não posso viajar)",
    ],
  },
  {
    key: "incomodo",
    title: "O que mais te incomoda na região dos olhos?",
    options: [
      "Excesso de pele nas pálpebras superiores",
      "Bolsas ou flacidez abaixo dos olhos",
      "Olhar cansado ou pesado",
      "Ainda não sei identificar",
    ],
  },
  {
    key: "momento",
    title: "Desde quando isso te incomoda?",
    options: [
      "Comecei a perceber recentemente",
      "Há alguns meses",
      "Há mais de um ano",
      "Há muitos anos",
    ],
  },
  {
    key: "intencao",
    title: "Qual é o seu momento agora?",
    helper:
      "A consulta de avaliação com a Dra. Thayssa tem o valor de R$ 800 e é o momento em que seu caso é analisado individualmente.",
    options: [
      "Quero conversar sobre uma avaliação",
      "Preciso me organizar, mas tenho interesse",
      "Só estou buscando informação por enquanto",
    ],
  },
];

const NOT_QUALIFIED_REGION = "Outro estado (não posso viajar)";
const INFO_ONLY = "Só estou buscando informação por enquanto";

const Qualification = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<Record<StepKey, string>>>({});
  const [result, setResult] = useState<"qualified" | "not-qualified" | null>(null);

  const current = questions[step];

  const evaluate = (all: Partial<Record<StepKey, string>>) => {
    const regionOk = all.regiao !== NOT_QUALIFIED_REGION;
    const intentOk = all.intencao !== INFO_ONLY;
    return regionOk && intentOk ? "qualified" : "not-qualified";
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
      eventLabel: all.regiao,
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
        "Olá! Vim pela página sobre blefaroplastia da Dra. Thayssa e respondi as perguntas:",
        `• Região: ${answers.regiao}`,
        `• Principal incômodo: ${answers.incomodo}`,
        `• Tempo: ${answers.momento}`,
        `• Momento: ${answers.intencao}`,
        "Gostaria de falar sobre a avaliação.",
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
                  Seu perfil faz sentido para uma avaliação
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Fale agora com a equipe da Dra. Thayssa pelo WhatsApp para
                  esclarecer dúvidas e verificar as datas disponíveis. A consulta de
                  avaliação tem o valor de <strong className="text-graphite">R$ 800</strong> e é
                  o momento em que seu caso é analisado individualmente — somente a
                  avaliação médica pode indicar o procedimento.
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
                  Pelas suas respostas, este pode não ser o momento ideal para uma
                  avaliação presencial em São Paulo. Continue acompanhando o
                  conteúdo da Dra. Thayssa no Instagram: lá ela compartilha
                  informações sobre cirurgia plástica e cuidados com o olhar.
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
