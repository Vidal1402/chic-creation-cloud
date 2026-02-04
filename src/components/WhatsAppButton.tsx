import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "5592912345678"; // Replace with actual number
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços da Vértice Consultoria.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white fill-white" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 px-4 py-2 bg-card rounded-lg text-sm font-medium text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg border border-border/50">
        Fale conosco
      </span>
    </a>
  );
}
