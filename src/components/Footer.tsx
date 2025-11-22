import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo-dra-thayssa.png";

const Footer = () => {
  return (
    <footer className="bg-graphite text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <img
              src={logo}
              alt="Logo da Dra. Thayssa Barreto"
              className="h-16 brightness-0 invert"
            />
            <p className="text-sm text-white/80 max-w-md">
              Cirurgia Plástica com foco em segurança, naturalidade e cuidado
              individualizado.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Contato e Localização</h3>
            
            <div className="flex items-start gap-3 text-sm text-white/80">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p>
                Alameda dos Maracatins, 1.217 – Conj 813<br />
                Moema, São Paulo – SP, 04089-014
              </p>
            </div>

            <div className="flex items-center gap-3 text-sm text-white/80">
              <Phone className="w-5 h-5 flex-shrink-0" />
              <a href="tel:+5511932366856" className="hover:text-white transition-colors">
                (11) 93236-6856
              </a>
            </div>

            <div className="flex items-center gap-3 text-sm text-white/80">
              <Mail className="w-5 h-5 flex-shrink-0" />
              <a href="mailto:contato@drathayssa.com.br" className="hover:text-white transition-colors">
                contato@drathayssa.com.br
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/60">
          <p className="mb-2">
            © {new Date().getFullYear()} Dra. Thayssa Barreto. Todos os direitos reservados.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-white transition-colors">
              LGPD
            </a>
          </div>
          <p className="mt-4 text-xs">
            Este site possui caráter informativo e não substitui avaliação médica presencial.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
