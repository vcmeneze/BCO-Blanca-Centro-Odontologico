import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [

    {
      name: "Rosa Ribeiro",
      treatment: "65 anos",
      rating: 5,
      text: "Dra. Blanca, não tenho palavras para agradecer! Com os implantes, voltei a sorrir e me sentir confiante. Minha vida mudou!",
      initial: "R"
    },
    {
      name: "Carlos Almeida",
      treatment: "38 anos",
      rating: 5,
      text: "Os tratamentos estéticos da BCO me deram um sorriso incrível! Agora, posso sorrir sem me preocupar. Super recomendo!",
      initial: "C"
    },
    {
      name: "Mariana Silva",
      treatment: "Mãe do João e da Clara",
      rating: 5,
      text: "Eu sempre tive receio de levar meus filhos ao dentista, mas a equipe da BCO fez com que eles se sentissem super confortáveis e felizes com o tratamento ortodôntico.",
      initial: "M"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-background"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-1/3 w-20 h-20 bg-secondary/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-1/3 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            O que nossos{" "}
            <span className="text-transparent bg-gradient-secondary bg-clip-text">
              Pacientes
            </span>{" "}
            dizem sobre nós
          </h2>
          <p className="text-xl text-white/75 max-w-3xl mx-auto">
            Depoimentos reais de quem confia na BCO para cuidar do seu sorriso
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-smooth group relative overflow-hidden"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <Quote className="w-8 h-8 text-secondary" />
              </div>

              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 fill-secondary text-secondary" 
                    />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Treatment type */}
                <div className="mb-4">
                  <span className="text-xs font-semibold px-2 py-1 bg-secondary/20 text-secondary rounded-full">
                    {testimonial.treatment}
                  </span>
                </div>

                {/* Patient info */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                    {testimonial.initial}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Paciente BCO
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Junte-se aos nossos pacientes satisfeitos
          </p>
          <div className="flex justify-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className="w-6 h-6 fill-secondary text-secondary animate-pulse" 
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
          <p className="text-2xl font-bold text-secondary mt-2">
            99% de Satisfação
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;