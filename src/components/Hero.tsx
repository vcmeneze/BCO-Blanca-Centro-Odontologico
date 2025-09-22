import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const Hero = () => {
  // Função para rastrear o clique no botão do WhatsApp via GTM
  const handleWhatsAppClick = () => {
    // Garante que o dataLayer existe antes de enviar o evento
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'button_click', // Nome do evento que você usará no GTM
        button_text: 'Agendar Consulta', // Variável para identificar o botão
        button_location: 'hero' // Variável para identificar a seção
      });
    }
  };

  // Função para rastrear o clique no botão de serviços e rolar a página
  const handleServicesClick = () => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'button_click',
        button_text: 'Nossos Serviços',
        button_location: 'hero'
      });
    }
    document.getElementById('services')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-overlay"></div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            {/* Logo */}
            <div className="w-108 h-auto mt-24">
              <img src="/lovable-uploads/f2fa3a16-9500-4678-8e32-a4890c10cb9d.png" alt="BCO - Blanca Centro Odontológico" className="h-auto" />
            </div>
            
            {/* Main headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Transforme seu{" "}
                <span className="text-transparent bg-gradient-secondary bg-clip-text">
                  sorriso
                </span>{" "}
                com excelência! 
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl">
                Clareamento dental e lentes para um sorriso impecável, implantes dentários para segurança ao falar e comer, e ortodontia para a saúde e o bem-estar da sua família.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* Botão WhatsApp com rastreamento GTM */}
              <a 
                href="https://wa.me/5571999176671" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
              >
                <Button size="lg" className="cta-button gradient-primary hover:gradient-secondary text-white font-semibold px-8 py-4 rounded-full transition-smooth shadow-glow w-full sm:w-auto">
                  <Calendar className="mr-2 h-5 w-5" />
                  Agendar Consulta
                </Button>
              </a>

              {/* Botão Serviços com rastreamento GTM */}
              <Button 
                variant="outline" 
                size="lg" 
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-4 rounded-full transition-smooth" 
                onClick={handleServicesClick}
              >
                Nossos Serviços
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-white/75">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span>Atendimento humanizado</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Tecnologia de ponta</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                <span>Não aceitamos convênios</span>
              </div>
            </div>
          </div>

          {/* Right side - Doctor Portrait Card */}
          <div className="flex-1 relative min-h-[600px] lg:min-h-[700px]">
            <div className="relative h-full max-w-lg mx-auto">
              {/* Decorative background elements */}
              <div className="absolute -top-4 -right-4 w-48 h-48 bg-gradient-secondary rounded-full opacity-20 blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-36 h-36 bg-gradient-primary rounded-full opacity-20 blur-xl animate-pulse delay-1000"></div>
              
              {/* Main card */}
              <div className="relative h-full bg-gradient-card rounded-3xl shadow-premium overflow-hidden mt-24 border border-secondary/20">
                {/* Card header with decorative element */}
                <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-primary opacity-10"></div>
                
                {/* Doctor portrait image */}
                <div className="relative h-full p-6 ">
                  <div className="h-full bg-gradient-to-b from-secondary/5 to-primary/5 rounded-2xl overflow-hidden shadow-glow">
                    <img src="/lovable-uploads/hero.jpeg" alt="Dra. Blanca Torres - Especialista em Odontologia Estética" className="w-full h-full object-cover object-center" />
                    
                    {/* Overlay with doctor info */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/90 to-transparent p-6">
                      <div className="text-center space-y-3">
                        
                        <h3 className="text-2xl font-bold text-secondary">
                          Dra. Blanca Torres
                        </h3>
                        <p className="text-white/95">
                          Especialista em Odontologia Estética
                        </p>
                        <p className="text-sm text-blue-300 font-medium">
                          Mais de 20 anos de experiência
                        </p>
                        
                        <div className="flex justify-center gap-2 mt-4">
                          <div className="bg-secondary/20 px-3 py-1 rounded-full text-xs text-secondary font-medium">
                            CRO Ativo
                          </div>
                          <div className="bg-primary/20 px-3 py-1 rounded-full text-xs text-blue-200 font-medium">
                            Pós-graduada
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;