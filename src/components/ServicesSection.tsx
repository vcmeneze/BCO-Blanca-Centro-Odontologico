import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Smile, 
  Sparkles, 
  Baby,
  Shield,
  Crown,
  Calendar,
  CheckCircle
} from "lucide-react";
import implantServiceImg from "/lovable-uploads/Protese.png";
import aestheticServiceImg from "/lovable-uploads/Estetica.png";
import pediatricServiceImg from "/lovable-uploads/Ortodontia.png";

const ServicesSection = () => {
  const mainServices = [
    {
      icon: <Smile className="w-8 h-8" />,
      title: "Prótese e Implante Dentário",
      image: implantServiceImg,
      bullets: [
        "Sorriso natural e duradouro",
        "Melhora na mastigação e na fala",
        "Procedimento rápido e seguro",
        "Resultados visíveis em 48 horas"
      ]
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Estética Dental",
      image: aestheticServiceImg,
      bullets: [
        "Resultados imediatos e de longo prazo",
        "Personalização para o seu sorriso ideal",
        "Tratamentos não invasivos e de baixo risco",
        "Aumento da autoestima e confiança"
      ]
    },
    {
      icon: <Baby className="w-8 h-8" />,
      title: "Ortodontia e Odontopediatria",
      image: pediatricServiceImg,
      bullets: [
        "Alinhamento para um sorriso saudável",
        "Tratamentos ortodônticos discretos",
        "Cuidados odontológicos preventivos para crianças",
        "Soluções rápidas e confortáveis para todas as idades"
      ]
    }
  ];

  const additionalServices = [
    { icon: Smile,  title: "Periodontia",  description: "Tratamento especializado para gengivas e estruturas de suporte dos dentes.", color: "text-secondary",   bgColor: "bg-primary/5" },
    { icon: Shield, title: "Endodontia",   description: "Tratamento de canal com tecnologia rotativa para maior conforto.",       color: "text-secondary", bgColor: "bg-secondary/5" },
    { icon: Crown,  title: "Cirurgia Oral",description: "Procedimentos cirúrgicos com segurança e técnicas minimamente invasivas.", color: "text-accent", bgColor: "bg-accent/5" }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-blue-900"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-secondary/5 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Nossos{" "}
            <span className="text-transparent bg-gradient-secondary bg-clip-text">
              Serviços
            </span>{" "}
            Especializados
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos tratamentos completos com tecnologia de ponta 
            para cuidar do seu sorriso com excelência
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-smooth group overflow-hidden"
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0"></div>
                
                {/* Icon overlay */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-gold">
                  <div className="text-secondary-foreground">
                    {service.icon}
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-secondary">
                  {service.title}
                </h3>
                
                <div className="space-y-3">
                  {service.bullets.map((bullet, bulletIndex) => (
                    <div key={bulletIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-white/75">{bullet}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={scrollToContact}
                  className="w-full mt-6 gradient-primary hover:gradient-secondary text-white rounded-full transition-smooth"
                >
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2 text-secondary">Mais Serviços</h3>
            <p className="text-white">Tratamentos especializados para necessidades específicas</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {additionalServices.map((service, index) => (
              <Card
                key={index}
                className="min-w-0 hover-lift shadow-card group cursor-pointer animate-slide-up p-4"
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                <h1 className="text-center pb-2">
                  <div className={`w-14 h-14 mx-auto rounded-full bg-background flex items-center justify-center mb-3 overflow-hidden group-hover:scale-110 transition-transform duration-300`}>
                    {/* ícone pequeno para não empurrar largura */}
                    <service.icon className={`w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 ${service.color}`} />
                  </div>
                  <h2 className="text-lg font-bold group-hover:text-primary transition-colors">
                    {service.title}
                  </h2>
                </h1>
                <CardContent>
                  <p className="text-center text-white/75 text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;