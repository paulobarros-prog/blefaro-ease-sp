import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WhatsAppCTA = () => {
  const whatsappMessage = encodeURIComponent(
    "Olá, acabei de ver o vídeo sobre blefaroplastia da Dra. Thayssa. Gostaria de saber próximos passos e sobre avaliação."
  );

  const whatsappLink = `https://wa.me/5511932366856?text=${whatsappMessage}&utm_source=meta&utm_medium=cpc&utm_campaign=lp_blefaro`;

  const handleClick = () => {
    console.log("WhatsApp CTA clicked");
    window.open(whatsappLink, "_blank");
  };

  return (
    <>
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-sand/30 to-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 sm:space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-graphite px-4">
              Pronta para dar o próximo passo?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Nossa equipe está preparada para responder suas dúvidas e agendar
              sua avaliação com a Dra. Thayssa.
            </p>
            <Button
              size="lg"
              onClick={handleClick}
              className="group rounded-2xl px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto max-w-md mx-auto"
            >
              <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform flex-shrink-0" />
              <span className="truncate">Falar com a equipe</span>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Sticky WhatsApp Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
      >
        <Button
          size="lg"
          onClick={handleClick}
          className="rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 px-4 py-4 sm:px-6 sm:py-6 group"
        >
          <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
          <span className="ml-2 text-sm sm:text-base hidden sm:inline">WhatsApp</span>
        </Button>
      </motion.div>
    </>
  );
};

export default WhatsAppCTA;
