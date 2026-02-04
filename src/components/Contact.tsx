import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contato" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/50 to-secondary/30" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4 block">
              Vamos Conversar
            </span>
            <h2 className="section-title">Entre em Contato</h2>
            <p className="section-subtitle mx-auto mt-4">
              Estamos prontos para ajudar sua empresa a conquistar os
              benefícios da Zona Franca de Manaus.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-foreground mb-6">
                    Informações de Contato
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="mailto:contato@vertice.com.br"
                      className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <span>contato@vertice.com.br</span>
                    </a>
                    <a
                      href="tel:+559212345678"
                      className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <span>+55 (92) 1234-5678</span>
                    </a>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <span>Manaus, Amazonas - Brasil</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col justify-center">
                <div className="space-y-6">
                  <h4 className="text-xl font-serif text-foreground">
                    Pronto para expandir seu negócio?
                  </h4>
                  <p className="text-muted-foreground">
                    Agende uma consulta gratuita com nossos especialistas e
                    descubra como podemos ajudar sua empresa a aproveitar todas
                    as vantagens da Zona Franca de Manaus.
                  </p>
                  <a
                    href="mailto:contato@vertice.com.br"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_8px_30px_hsl(38_40%_60%_/_0.3)] hover:-translate-y-0.5 group"
                  >
                    Solicitar Consulta
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
