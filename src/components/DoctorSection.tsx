import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Award, 
  Heart, 
  Users,
  Calendar
} from "lucide-react";

const DoctorSection = () => {
  const credentials = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Formação Acadêmica",
      description: "Mestrado e doutorado em Prótese Dentária na UNICAMP, uma das universidades mais renomadas do país."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Experiência Comprovada",
      description: "Com mais de 20 anos de experiência e mais de 2.000 sorrisos transformados."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Atendimento Humanizado",
      description: "Blanca e sua equipe oferecem tratamentos personalizados que garantem os melhores resultados com conforto e segurança."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Paixão pela Odontologia",
      description: "Lidera o BCO Centro Odontológico e também atua como professora na Universidade Federal da Bahia, onde compartilha seu conhecimento com futuros profissionais da odontologia."
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-secondary/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Doctor image */}
          <div className="relative">
            <div className="relative max-w-md mx-auto">
              {/* Decorative background elements */}
              <div className="absolute -inset-4 bg-gradient-secondary rounded-2xl blur-xl opacity-20"></div>
              <div className="absolute -inset-2 bg-gradient-primary rounded-2xl blur-lg opacity-30"></div>
              
              {/* Main image container */}
              <div className="relative min-h-[600px] lg:min-h-[700px] bg-gradient-card rounded-2xl p-6 shadow-premium">
                <img 
                  src='/lovable-uploads/IMG_1134.jpeg'
                  alt="Dra. Blanca Torres - Dentista Especialista"
                  className="min-h-[600px] lg:min-h-[700px] w-full h-96 object-cover rounded-xl shadow-card"
                />
                
                {/* Floating badge */}
                <div className="absolute -bottom-3 -right-3 bg-secondary rounded-full p-4 shadow-gold">
                  <Award className="w-8 h-8 text-secondary-foreground" />
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Conheça a{" "}
                <span className="text-transparent bg-gradient-secondary bg-clip-text">
                  Dra. Blanca Torres
                </span>
              </h2>
              <p className="text-xl text-white/75 leading-relaxed mb-6">
                Com mais de duas décadas de dedicação à odontologia, a Dra. Blanca Torres 
                é reconhecida pela excelência técnica e pelo cuidado humano em cada atendimento. 
                Especialista em transformar sorrisos e elevar a autoestima de seus pacientes.
              </p>
              <p className="text-lg text-white/60 leading-relaxed">
                Formada com distinção e em constante atualização, ela combina as mais 
                modernas técnicas odontológicas com um atendimento acolhedor e personalizado, 
                sempre priorizando o conforto e bem-estar do paciente.
              </p>
            </div>

            {/* Credentials grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {credentials.map((credential, index) => (
                <div 
                  key={index}
                  className="flex gap-4 p-4 bg-gradient-card rounded-lg border border-border/50 hover:shadow-card transition-smooth"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                    {credential.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {credential.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {credential.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>


            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                className="cta-button gradient-primary hover:gradient-secondary text-white font-semibold px-8 py-3 rounded-full transition-smooth shadow-glow"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Agendar com a Dra. Blanca
              </Button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;