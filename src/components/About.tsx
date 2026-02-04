import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import teamImage from "@/assets/team-meeting.jpg";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={teamImage}
                alt="Equipe Vértice em reunião"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-4 md:right-8 card-glass p-6 max-w-[260px]"
            >
              <p className="stat-number text-3xl mb-1">50+</p>
              <p className="text-sm text-muted-foreground">Clientes Satisfeitos na ZFM</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="badge-premium mb-6">
              <span className="gold-dot" />
              Sobre Nós
            </span>

            <h2 className="heading-section mb-6">
              Quem <span className="text-gradient-gold">Somos</span>
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                A <span className="text-foreground font-medium">Vértice Consultoria</span> é uma 
                empresa especializada na implantação e expansão de empresas na Amazônia Legal, 
                com foco na Zona Franca de Manaus (ZFM).
              </p>
              <p>
                Atuamos como parceira estratégica no desenvolvimento de{" "}
                <span className="text-primary font-medium">soluções turnkey</span> que integram 
                licenciamento, planejamento industrial, benefícios fiscais e ESG.
              </p>
              <p>
                Nossa experiência assegura agilidade, conformidade e máxima eficiência em 
                todos os processos necessários para a instalação e operação da sua empresa.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <span className="text-foreground">Licenciamento Completo</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <span className="text-foreground">Incentivos Fiscais</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <span className="text-foreground">Conformidade ESG</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
