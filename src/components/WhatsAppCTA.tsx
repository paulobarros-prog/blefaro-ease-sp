import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WhatsAppCTA = () => {
  const whatsappMessage = encodeURIComponent(
    "Olá, acabei de ver o vídeo sobre blefaroplastia da Dra. Thayssa. Meu incômodo é [pálpebra superior / pálpebra inferior / bolsas]. Gostaria de saber próximos passos e sobre avaliação."
  );

  const whatsappLink = `https://wa.me/5511932366856?text=${whatsappMessage}&utm_source=meta&utm_medium=cpc&utm_campaign=lp_blefaro`;

  const handleClick = () => {
    console.log("WhatsApp CTA clicked");
    window.open(whatsappLink, "_blank");
  };

  return (
    <>
      <section className="py-20 px-4 bg-gradient-to-b from-sand/30 to-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-graphite">
              Pronta para dar o próximo passo?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nossa equipe está preparada para responder suas dúvidas e agendar
              sua avaliação com a Dra. Thayssa.
            </p>
            <Button
              size="lg"
              onClick={handleClick}
              className="group rounded-2xl px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Falar com a equipe no WhatsApp
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Sticky WhatsApp Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          size="lg"
          onClick={handleClick}
          className="rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 px-6 py-6 group"
        >
          <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
          <span className="ml-2 hidden md:inline">WhatsApp</span>
        </Button>
      </motion.div>
    </>
  );
};

export default WhatsAppCTA;
