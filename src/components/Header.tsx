import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Calendar, X, Instagram, Facebook, Youtube } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: "Início", href: "#hero" },
    { name: "Serviços", href: "#services" },
    { name: "Sobre", href: "#doctor" },
    { name: "Depoimentos", href: "#testimonials" },
    { name: "Por que BCO", href: "#why-choose" },
    { name: "FAQ", href: "#faq" },
    { name: "Contato", href: "#contact" },
  ];

  const socialLinks = {
    instagram: "https://www.instagram.com/bcoblancacentroodontologico/?hl=pt",
    facebook: "https://www.facebook.com/bcocentroodontologico/?locale=pt_BR",
    youtube: "https://www.youtube.com/@bcocentroodontologicoooo/shorts",
  };

  // --- Funções com Rastreamento GTM ---

  // Rastreia cliques nos itens de navegação (Início, Serviços, etc.)
  const handleNavClick = (href: string, name: string) => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "nav_link_click",
        link_text: name,
        link_url: href,
      });
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  // Rastreia o clique no botão "Agendar Consulta"
  const handleWhatsAppClick = () => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "button_click",
        button_text: "Agendar Consulta",
        button_location: "header",
      });
    }
    setIsOpen(false);
  };

  // Rastreia cliques nos ícones de redes sociais
  const handleSocialClick = (network: string) => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "social_click",
        social_network: network,
        click_location: "header",
      });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/85 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/f2fa3a16-9500-4678-8e32-a4890c10cb9d.png" 
              alt="BCO - Blanca Centro Odontológico" 
              className="h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href, item.name)}
                className="text-white/85 hover:text-primary transition-colors text-sm font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Social Media Icons */}
            <div className="flex items-center space-x-3">
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" onClick={() => handleSocialClick('Instagram')}>
                <Button variant="ghost" size="icon" className="text-fuchsia-400 hover:text-white hover:bg-fuchsia-700 transition-colors">
                  <Instagram className="h-4 w-4" />
                </Button>
              </a>
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" onClick={() => handleSocialClick('Facebook')}>
                <Button variant="ghost" size="icon" className="text-blue-400 hover:text-white hover:bg-blue-700 transition-colors">
                  <Facebook className="h-4 w-4" />
                </Button>
              </a>
              <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" onClick={() => handleSocialClick('Youtube')}>
                <Button variant="ghost" size="icon" className="text-red-500 hover:text-white hover:bg-red-700 transition-colors">
                  <Youtube className="h-4 w-4" />
                </Button>
              </a>
            </div>
            <a href="https://wa.me/5571999176671" target="_blank" rel="noopener noreferrer" onClick={handleWhatsAppClick}>
              <Button className="bg-gradient-primary hover:bg-gradient-secondary text-white font-semibold px-6 py-2 rounded-full transition-smooth shadow-glow">
                <Calendar className="mr-2 h-4 w-4" />
                Agendar Consulta
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            
            <SheetContent side="right" className="w-80 bg-background border-l border-border/50">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between pb-6 border-b border-border/20">
                  <img src="/lovable-uploads/f2fa3a16-9500-4678-8e32-a4890c10cb9d.png" alt="BCO" className="h-8 w-auto" />
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col space-y-4 py-8">
                  {navigationItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.href, item.name)}
                      className="text-left py-3 px-4 text-foreground hover:bg-accent rounded-lg transition-colors font-medium"
                    >
                      {item.name}
                    </button>
                  ))}
                </nav>

                {/* Mobile Social Media */}
                <div className="flex items-center justify-left space-x-6 py-6 border-t border-border/20">
                  <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" onClick={() => handleSocialClick('Instagram')}>
                    <Button variant="ghost" size="icon" className="text-white bg-fuchsia-700 hover:text-primary">
                      <Instagram className="h-5 w-5" />
                    </Button>
                  </a>
                  <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" onClick={() => handleSocialClick('Facebook')}>
                    <Button variant="ghost" size="icon" className="text-white bg-blue-700 hover:text-primary">
                      <Facebook className="h-5 w-5" />
                    </Button>
                  </a>
                  <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" onClick={() => handleSocialClick('Youtube')}>
                    <Button variant="ghost" size="icon" className="text-white bg-red-700 hover:text-primary">
                      <Youtube className="h-5 w-5" />
                    </Button>
                  </a>
                </div>

                {/* Mobile CTA */}
                <div className="mt-auto pb-6">
                  <a href="https://wa.me/5571999176671" target="_blank" rel="noopener noreferrer" onClick={handleWhatsAppClick}>
                    <Button className="w-full bg-gradient-primary hover:bg-gradient-secondary text-white font-semibold py-3 rounded-full transition-smooth shadow-glow">
                      <Calendar className="mr-2 h-5 w-5" />
                      Agendar Consulta
                    </Button>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;