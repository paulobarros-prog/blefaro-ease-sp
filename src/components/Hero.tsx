import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, PlayCircle } from "lucide-react";
import heroImage from "@/assets/dra-thayssa-hero.jpg";
import { pushEvent, scrollToId } from "@/lib/lp";

const Hero = () => {
  const goToQualification = () => {
    pushEvent("cta_click", { eventCategory: "engagement", eventLabel: "hero_quero_entender_meu_caso" });
    scrollToId("qualificacao");
  };

  const goToVideo = () => {
    pushEvent("cta_hero_click", { eventCategory: "engagement", eventLabel: "hero_assistir_explicacao" });
    scrollToId("video");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 overflow-hidden bg-gradient-to-b from-background via-sand/30 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-6 text-center md:text-left"
          >
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Blefaroplastia em São Paulo
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-graphite leading-tight">
              Seu olhar parece mais <span className="text-primary">cansado</span> do que você realmente se sente?
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Entenda quando a Blefaroplastia pode fazer sentido e como uma
              avaliação individualizada busca rejuvenescer a região dos olhos
              preservando suas características e expressão.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                onClick={goToQualification}
                className="group rounded-2xl px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              >
                Quero entender meu caso
                <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={goToVideo}
                className="group rounded-2xl px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 w-full sm:w-auto"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Assistir à explicação
              </Button>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Dra. Thayssa Barreto · Cirurgiã Plástica · CRM 182.684 | RQE 101.756
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-first md:order-last"
          >
            <div className="relative w-full aspect-square max-w-[280px] sm:max-w-sm md:max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl" />
              <img
                src={heroImage}
                alt="Retrato da Dra. Thayssa Barreto em fundo claro"
                className="relative w-full h-full object-cover rounded-full shadow-2xl ring-4 sm:ring-8 ring-background"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
