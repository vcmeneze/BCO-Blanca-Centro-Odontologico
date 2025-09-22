import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Clock, 
  Zap, 
  Heart, 
  Award, 
  Users,
  CheckCircle
} from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Tecnologia de Ponta",
      description: "Equipamentos de última geração para tratamentos precisos e menos invasivos",
      benefits: [
        "Scanner 3D para planejamento",
        "Sedação consciente disponível",
        "Materiais premium certificados"
      ]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Atendimento Humanizado",
      description: "Cuidado personalizado que vai além do tratamento odontológico",
      benefits: [
        "Consulta inicial detalhada",
        "Acompanhamento pós-tratamento",
        "Ambiente acolhedor e confortável"
      ]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexibilidade de Horários",
      description: "Sabemos como a rotina pode ser corrida! Por isso, atendemos:",
      benefits: [
        "De segunda a sexta-feira",
        "No horário de almoço - perfeito para quem tem a agenda cheia.",
        "Após as 18h – ideal para quem sai tarde do trabalho"
      ]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Garantia de Qualidade",
      description: "Compromisso com resultados excepcionais e durabilidade",
      benefits: [
        "Garantia estendida em tratamentos",
        "Revisões periódicas incluídas",
        "Protocolo de qualidade rigoroso"
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Resultados Rápidos",
      description: "Planejamento eficiente para otimizar seu tempo e resultado",
      benefits: [
        "Diagnóstico digital imediato",
        "Tratamentos em sessões reduzidas",
        "Recuperação mais rápida"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Equipe Especializada",
      description: "Profissionais altamente qualificados e em constante atualização",
      benefits: [
        "Especializações múltiplas",
        "Formação continuada",
        "Experiência comprovada"
      ]
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-blue-900"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/5 rounded-full blur-xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Por que escolher a{" "}
            <span className="text-transparent bg-gradient-secondary bg-clip-text">
              BCO
            </span>
            ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra os diferenciais que fazem da BCO a escolha ideal 
            para cuidar do seu sorriso com excelência
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-smooth group"
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-glow transition-smooth">
                  <div className="text-secondary">
                    {reason.icon}
                  </div>
                </div>

                {/* Title and description */}
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {reason.title}
                </h3>
                <p className="text-white/75 mb-6">
                  {reason.description}
                </p>

                {/* Benefits list */}
                <div className="space-y-3">
                  {reason.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm text-white">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom highlight */}
        <div className="bg-gradient-card rounded-2xl p-8 lg:p-12 shadow-premium border border-border/50">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">
              Satisfação{" "}
              <span className="text-transparent bg-gradient-secondary bg-clip-text">
                Garantida
              </span>
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Nossa missão é superar suas expectativas em cada consulta. 
              Com mais de 20 anos de experiência e 99% de pacientes satisfeitos, 
              você pode confiar na BCO para cuidar do seu sorriso.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">+20</div>
                <p className="text-muted-foreground">Anos de Experiência</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">99%</div>
                <p className="text-muted-foreground">Satisfação dos Pacientes</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">+2000</div>
                <p className="text-muted-foreground">Sorrisos Transformados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;