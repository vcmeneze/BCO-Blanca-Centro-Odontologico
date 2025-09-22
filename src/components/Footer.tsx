import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Facebook, 
  Youtube,
  Calendar
} from "lucide-react";

const Footer = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <img 
              src="/lovable-uploads/f2fa3a16-9500-4678-8e32-a4890c10cb9d.png" 
              alt="BCO - Blanca Centro Odontológico" 
              className="h-36 w-auto mb-6"
            />
            <p className="text-muted-foreground mb-6 max-w-md">
              Há mais de 20 anos cuidando do seu sorriso com excelência, 
              tecnologia de ponta e atendimento humanizado que você merece.
            </p>
            <Button 
              onClick={scrollToContact}
              className="bg-gradient-primary hover:bg-gradient-secondary text-white font-semibold px-6 py-3 rounded-full transition-smooth shadow-glow"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Agendar Consulta
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {[
                { name: "Nossos Serviços", id: "services" },
                { name: "Sobre a Dra. Blanca", id: "doctor" },
                { name: "Depoimentos", id: "testimonials" },
                { name: "Por que Escolher BCO", id: "why-choose" },
                { name: "Perguntas Frequentes", id: "faq" }
              ].map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>Empresarial Thomé de Souza - Av. Antônio Carlos Magalhães, 3244</p>
                  <p>Caminho das Árvores, Salvador, BA</p>
                  <p>CEP: 41820-000</p>
                </div>
              </li>
              
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <a 
                  href="tel:+5571999176671" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  (71) 99917-6671  | 
                  (71) 3022-3398
                </a>
              </li>
              
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a 
                  href="mailto:bcocentroodontologico@gmail.com" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  bcocentroodontologico@gmail.com
                </a>
              </li>
              
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>Seg-Sex: 8h às 18h</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Bottom */}
        <div className="border-t border-border/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Siga-nos:</span>
              <div className="flex gap-3">
                <a 
                  href="https://www.instagram.com/bcoblancacentroodontologico/?hl=pt" 
                  className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.facebook.com/bcocentroodontologico/?locale=pt_BR" 
                  className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.youtube.com/@bcocentroodontologicoooo/shorts" 
                  className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Youtube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">
                © 2025 BCO - Blanca Centro Odontológico. Todos os direitos reservados.
              </p>
              <p className="text-xs text-muted-foreground/60 mt-1">
                CRO-SP 12345 | Dra. Blanca Torres
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;