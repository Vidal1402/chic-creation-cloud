import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, TrendingUp, Shield } from "lucide-react";

const stats = [
  { icon: Target, label: "Projetos Entregues", value: "100+" },
  { icon: Users, label: "Clientes Atendidos", value: "50+" },
  { icon: TrendingUp, label: "Anos de Experiência", value: "15+" },
  { icon: Shield, label: "Taxa de Sucesso", value: "98%" },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="quem-somos" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4 block">
              Sobre Nós
            </span>
            <h2 className="section-title">Quem Somos</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                A <span className="text-foreground font-medium">Vértice Consultoria</span> é uma 
                empresa especializada na implantação e expansão de empresas na Amazônia Legal, 
                com foco na Zona Franca de Manaus (ZFM).
              </p>
              <p>
                Atuamos como parceira estratégica no desenvolvimento de soluções turnkey que 
                integram licenciamento, planejamento industrial, benefícios fiscais e ESG.
              </p>
              <p>
                Nossa experiência assegura agilidade, conformidade e máxima eficiência em 
                todos os processos necessários para a instalação e operação da sua empresa.
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="glass-card p-6 md:p-8 text-center card-hover group"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
