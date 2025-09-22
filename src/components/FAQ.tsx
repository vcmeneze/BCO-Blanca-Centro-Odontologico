import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Implante dentário é muito caro?",
      answer: "Não! Na nossa clínica, oferecemos opções de pagamento acessíveis e parceladas para que você possa investir no seu sorriso sem comprometer o orçamento. Além disso, a saúde bucal é um investimento para a vida toda!"
    },
    {
      question: "Quais são as formas de pagamento aceitas?",
      answer: "Aceitamos dinheiro, cartões de débito e crédito (Visa, Mastercard, Elo), PIX e parcelamento sem juros. Também trabalhamos com diversos convênios odontológicos."
    },
    {
      question: "O tratamento vai doer?",
      answer: "Com nossa tecnologia avançada e técnicas modernas de anestesia, garantimos que todo o processo será o mais confortável possível. Você vai se surpreender com a experiência tranquila e positiva que oferecemos."
    },
    {
      question: "Eu não tenho tempo para fazer o tratamento!",
      answer: "Sabemos que sua rotina é corrida! Por isso, oferecemos tratamentos rápidos e eficientes, com resultados imediatos e sem necessidade de longas espera."
    },
    {
      question: "Vocês atendem emergências?",
      answer: "Sim, oferecemos atendimento de emergência 24h via WhatsApp. Em casos de dor ou urgência, entre em contato conosco e faremos o possível para atendê-lo rapidamente."
    },
    {
      question: "O meu sorriso vai ficar natural?",
      answer: "Sim! Nossos implantes e tratamentos estéticos são planejados com tecnologia de ponta para garantir um sorriso harmônico e natural, respeitando a anatomia do seu rosto."
    },
    {
      question: "Já tentei outros tratamentos e não funcionaram. E se comigo não der certo?",
      answer: "Cada paciente é único! Por isso, realizamos um planejamento detalhado e personalizado, garantindo um tratamento eficaz e adequado às suas necessidades."
    },
    {
      question: "Posso confiar na clínica e na equipe?",
      answer: "Com certeza! A BCO Centro Odontológico é liderada pela Dra. Blanca, especialista com mais de 20 anos de experiência, e conta com uma equipe qualificada para oferecer um atendimento seguro, transparente e humanizado."
    }
  ];

  // Função para rastrear o clique no botão de agendamento e rolar a página
  const handleScheduleClick = () => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'button_click',
        button_text: 'Agendar Consulta',
        button_location: 'faq_section'
      });
    }
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Função para rastrear o clique no botão do WhatsApp
  const handleWhatsAppClick = () => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'button_click',
        button_text: 'Conversar no WhatsApp',
        button_location: 'faq_section'
      });
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-background"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-1/4 w-20 h-20 bg-secondary/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Perguntas{" "}
            <span className="text-transparent bg-gradient-secondary bg-clip-text">
              Frequentes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tire suas dúvidas sobre nossos tratamentos e serviços. 
            Não encontrou sua pergunta? Entre em contato conosco!
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto mb-16">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gradient-card border border-border/50 rounded-xl shadow-card overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-muted/50 transition-colors">
                  <span className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-card rounded-2xl p-8 lg:p-12 shadow-premium border border-border/50 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ainda tem{" "}
            <span className="text-transparent bg-gradient-secondary bg-clip-text">
              Dúvidas
            </span>
            ?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para esclarecer todas as suas dúvidas 
            e ajudar você a tomar a melhor decisão para o seu sorriso.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleScheduleClick}
              className="cta-button gradient-primary hover:gradient-secondary text-white font-semibold px-8 py-3 rounded-full transition-smooth shadow-glow"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Agendar Consulta
            </Button>
            <a
              href="https://wa.me/5571999176671?text=Olá! Tenho uma dúvida que não encontrei no FAQ."
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
            >
              <Button
                variant="outline"
                className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white w-full px-8 py-3 rounded-full transition-smooth"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Conversar no WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;