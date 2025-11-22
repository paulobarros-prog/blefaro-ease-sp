import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/dra-thayssa-hero.jpg";

const Hero = () => {
  const scrollToVideo = () => {
    const videoSection = document.getElementById("video-section");
    videoSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-gradient-to-b from-background via-sand/30 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-graphite leading-tight">
              Tudo o que você precisa saber sobre a{" "}
              <span className="text-primary">blefaroplastia</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Assista ao vídeo da Dra. Thayssa e entenda indicações, como é o
              procedimento e os cuidados do pós.
            </p>
            <Button
              size="lg"
              onClick={scrollToVideo}
              className="group rounded-2xl px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Assistir vídeo agora
              <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl" />
              <img
                src={heroImage}
                alt="Retrato da Dra. Thayssa Barreto em fundo claro"
                className="relative w-full h-full object-cover rounded-full shadow-2xl ring-8 ring-background"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-primary animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
