import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const whatsappNumber = "5571999176671";
  const message = "Olá! Gostaria de agendar uma consulta na BCO - Blanca Centro Odontológico.";
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      id="whatsapp-float-btn" // identificador para GTM
      className="float-whatsapp group"
      aria-label="Entrar em contato via WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />

      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-background border border-border rounded-lg px-3 py-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        <span className="text-sm font-medium">Entre em contato</span>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
          <div className="w-2 h-2 bg-background border-r border-b border-border rotate-45 -translate-x-1"></div>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppFloat;
