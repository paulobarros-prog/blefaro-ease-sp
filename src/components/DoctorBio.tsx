import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Award, GraduationCap, Heart } from "lucide-react";
import bioImage from "@/assets/dra-thayssa-bio.jpg";

const DoctorBio = () => {
  return (
    <section className="py-20 px-4 bg-sand/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8 md:p-12 rounded-3xl shadow-xl bg-card">
            <div className="grid md:grid-cols-[200px,1fr] gap-8 items-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mx-auto"
              >
                <img
                  src={bioImage}
                  alt="Close da Dra. Thayssa Barreto sorrindo"
                  className="w-full aspect-square object-cover rounded-2xl shadow-lg ring-4 ring-primary/10"
                />
              </motion.div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-graphite mb-2">
                    Dra. Thayssa Barreto
                  </h2>
                  <p className="text-xl text-primary font-semibold">
                    Cirurgiã Plástica
                  </p>
                  <p className="text-muted-foreground font-medium mt-1">
                    CRM 182.684 | RQE 101.756
                  </p>
                </div>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Formação na Faculdade de Medicina de Jundiaí; residência em
                    Cirurgia Geral e Cirurgia Plástica pelo IAMSPE/SP. Título
                    de especialista pela AMB. Membro da SBCP.
                  </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 pt-4">
                  <div className="flex items-start gap-3 p-4 bg-accent/20 rounded-xl">
                    <GraduationCap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-graphite">
                        Formação
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Medicina Jundiaí
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-accent/20 rounded-xl">
                    <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-graphite">
                        Especialização
                      </p>
                      <p className="text-xs text-muted-foreground">
                        IAMSPE/SP
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-accent/20 rounded-xl">
                    <Heart className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-graphite">
                        Atendimento
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Acolhedor
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground italic">
                    "Atendimento acolhedor, com foco em segurança e
                    naturalidade dos resultados."
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default DoctorBio;
