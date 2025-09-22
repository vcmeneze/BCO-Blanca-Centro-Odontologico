import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar,
  MessageCircle,
  Instagram,
  Facebook
} from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefone",
      info: "(71) 3022-3398",
      action: "tel:+557130223398"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      info: "(71) 99917-6671",
      action: "https://wa.me/5571999176671"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-mail",
      info: "bcocentroodontologico@gmail.com",
      action: "mailto:bcocentroodontologico@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Endereço",
      info: "Av. Antônio Carlos Magalhães, 3244 - Caminho das Árvores, Salvador - BA",
      action: "https://www.google.com/maps/search/?api=1&query=Empresarial Thomé de Souza - Av. Antônio Carlos Magalhães, 3244 - Caminho das Árvores, Salvador - BA, 41820-000"
    }
  ];

  const socialLinks = [
    {
      icon: <Instagram className="w-5 h-5" />,
      name: "Instagram",
      url: "https://www.instagram.com/bcoblancacentroodontologico/?hl=pt"
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      name: "Facebook", 
      url: "https://www.facebook.com/bcocentroodontologico/?locale=pt_BR"
    }
  ];

  const schedules = [
    { day: "Segunda a Sexta", time: "08:00 - 18:00" },
    { day: "Sábado", time: "Fechado" },
    { day: "Domingo", time: "Fechado" }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-blue-900"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Entre em{" "}
            <span className="text-transparent bg-gradient-secondary bg-clip-text">
              Contato
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para cuidar do seu sorriso. 
            Agende sua consulta e transforme sua vida!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-border/50 shadow-premium">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-8 text-secondary">
                  Informações de Contato
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {contactInfo.map((contact, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-4 p-4 bg-background/50 rounded-xl hover:bg-background/70 transition-colors group cursor-pointer"
                      onClick={() => contact.action.startsWith('http') ? window.open(contact.action, '_blank') : window.location.href = contact.action}
                    >
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary/30 transition-colors">
                        {contact.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {contact.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {contact.info}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Media */}
                <div className="mb-8">
                  <h4 className="font-semibold text-foreground mb-4">
                    Siga-nos nas Redes Sociais
                  </h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white hover:shadow-glow transition-smooth"
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="cta-button gradient-primary hover:gradient-secondary text-white font-semibold px-8 py-3 rounded-full transition-smooth shadow-glow"
                    onClick={() => window.open("https://wa.me/5571999176671?text=Olá! Gostaria de agendar uma consulta na BCO.", '_blank')}
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Agendar via WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-3 rounded-full transition-smooth"
                    onClick={() => window.location.href = "tel:+5571999176671"}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Ligar Agora
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Schedule and Map */}
          <div className="space-y-8">
            
            {/* Schedule Card */}
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary">
                    Horários de Funcionamento
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {schedules.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border/30 last:border-b-0">
                      <span className="font-medium text-foreground">
                        {schedule.day}
                      </span>
                      <span className="text-white/75">
                        {schedule.time}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Map placeholder */}
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-secondary">
                  Nossa Localização
                </h3>
                <div className="relative aspect-square rounded-lg flex items-center justify-center overflow-hidden">
                  {/* Imagem de fundo desfocada */}
                  <img
                    src="/lovable-uploads/clinica.png" // Caminho para a sua imagem
                    alt="Clínica Odontológica"
                    className="absolute inset-0 w-full h-full object-cover blur-xs opacity-50" // Desfoque e opacidade
                  />
                  
                  {/* Overlay para melhorar a leitura do texto */}
                  <div className="absolute inset-0 bg-background/60"></div>

                  {/* Conteúdo do mapa */}
                  <div className="relative z-10 text-center p-4">
                    <MapPin className="w-8 h-8 text-secondary mx-auto mb-2" />
                    <p className="text-white text-sm font-semibold">
                      Mapa do Google Maps
                    </p>
                    <p className="text-xs text-white/70 mt-1">
                      Av. Antônio Carlos Magalhães, 3244 - Caminho das Árvores, Salvador - BA, 41820-000
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-4 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                  onClick={() => window.open("https://www.google.com/maps/search/?api=1&query=Av.+Antônio+Carlos+Magalhães,+3244+-+Caminho+das+Árvores,+Salvador+-+BA,+41820-000", '_blank')}
                >
                  <MapPin className="mr-2 w-4 h-4" />
                  Ver no Maps
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom highlight */}
        <div className="bg-gradient-card rounded-2xl p-8 shadow-premium border border-border/50 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Atendimento de{" "}
            <span className="text-transparent bg-gradient-secondary bg-clip-text">
              Excelência
            </span>
          </h3>
          <p className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto">
            Resposta rápida via WhatsApp • Agendamento flexível • Atendimento humanizado
          </p>
          <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>Não aceitamos convênios</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Fácil acesso</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>Ambiente climatizado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;