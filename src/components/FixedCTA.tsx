import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, X } from "lucide-react";

const FixedCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 500; // Show after scrolling 500px
      
      setIsVisible(scrollPosition > threshold && !isHidden);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHidden]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const hideCTA = () => {
    setIsHidden(true);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-gradient-to-r from-background/95 to-background/90 backdrop-blur-lg border-t border-border/50 shadow-premium">
      <div className="container mx-auto flex items-center justify-between max-w-4xl">
        <div className="flex-1">
          <h3 className="font-bold text-lg text-secondary">
            Pronto para transformar seu sorriso?
          </h3>
          {/* 👇 CLASSE ADICIONADA AQUI 👇 */}
          <p className="text-sm text-muted-foreground hidden sm:block">
            Agende sua consulta e descubra o tratamento ideal para você
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <Button
            onClick={scrollToContact}
            className="cta-button gradient-primary hover:gradient-secondary text-white font-semibold px-6 py-3 rounded-full transition-smooth shadow-glow"
          >
            <Calendar className="mr-2 h-4 w-4" />
            Agendar Agora
          </Button>
          
          <button
            onClick={hideCTA}
            className="p-2 hover:bg-muted rounded-full transition-colors"
            aria-label="Fechar"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FixedCTA;