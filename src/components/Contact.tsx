import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, ArrowRight, Clock, MessageCircle, Instagram } from "lucide-react";
import { WHATSAPP_URL, INSTAGRAM_URL, ENDERECO, PHONE_DISPLAY, INSTAGRAM_HANDLE, EMAIL } from "@/lib/contact";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contato" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card/50" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: "radial-gradient(ellipse at bottom right, hsl(38 55% 55% / 0.1), transparent 60%)"
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <span className="badge-premium mb-6">
              <span className="gold-dot" />
              Vamos Conversar
            </span>
            <h2 className="heading-section mb-4">
              Pronto para <span className="text-gradient-gold">Expandir</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Agende uma consulta gratuita e descubra como podemos ajudar sua empresa 
              a conquistar os benefícios da Zona Franca de Manaus.
            </p>
          </div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="card-premium p-10 md:p-14"
          >
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-foreground mb-8">
                    Informações de Contato
                  </h3>
                  <div className="space-y-5">
                    <a
                      href={`mailto:${EMAIL}`}
                      className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                        <span className="text-foreground">{EMAIL}</span>
                      </div>
                    </a>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <MessageCircle className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">WhatsApp</p>
                        <span className="text-foreground">{PHONE_DISPLAY}</span>
                      </div>
                    </a>
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Instagram className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Instagram</p>
                        <span className="text-foreground">{INSTAGRAM_HANDLE}</span>
                      </div>
                    </a>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Localização</p>
                        <span className="text-foreground">{ENDERECO}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Horário</p>
                        <span className="text-foreground">Seg - Sex: 8h às 18h</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="flex flex-col justify-center">
                <div className="space-y-6">
                  <h4 className="text-2xl font-serif text-foreground">
                    Agende sua Consultoria Gratuita
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Nossa equipe de especialistas está pronta para analisar seu projeto e 
                    apresentar as melhores oportunidades para sua empresa na Zona Franca de Manaus.
                  </p>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-3 text-muted-foreground">
                      <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary text-xs">✓</span>
                      </span>
                      Análise inicial sem compromisso
                    </li>
                    <li className="flex items-center gap-3 text-muted-foreground">
                      <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary text-xs">✓</span>
                      </span>
                      Proposta personalizada em 48h
                    </li>
                    <li className="flex items-center gap-3 text-muted-foreground">
                      <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary text-xs">✓</span>
                      </span>
                      Atendimento exclusivo
                    </li>
                  </ul>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex mt-4"
                  >
                    Falar no WhatsApp
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
