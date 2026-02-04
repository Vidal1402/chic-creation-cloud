import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import logo from "@/assets/logo-vertice.png";
import heroImage from "@/assets/hero-industrial.jpg";

const stats = [
  { value: "15+", label: "Anos de Experiência" },
  { value: "100+", label: "Projetos Entregues" },
  { value: "98%", label: "Taxa de Sucesso" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Distrito Industrial de Manaus"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, hsl(220 20% 8% / 0.95) 0%, hsl(220 20% 8% / 0.85) 40%, hsl(220 20% 8% / 0.5) 70%, hsl(220 20% 8% / 0.3) 100%)"
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-96 h-96 opacity-10 hidden xl:block">
        <img src={logo} alt="" className="w-full h-full object-contain animate-float" />
      </div>

      <div className="container mx-auto relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge-premium mb-8">
              <span className="gold-dot" />
              Especialistas em Zona Franca de Manaus
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="heading-display mb-6"
          >
            Transforme sua{" "}
            <span className="text-gradient-gold italic">Visão</span>
            <br />
            em Realidade
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl"
          >
            Soluções turnkey para implantação e expansão de empresas na Amazônia Legal. 
            Licenciamento, incentivos fiscais, PPB e conformidade ESG com excelência.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a href="#contato" className="btn-primary">
              Iniciar Consultoria
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#processo" className="btn-secondary">
              Ver Nosso Processo
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-8 md:gap-12 pt-8 border-t border-border/30"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-left">
                <p className="stat-number mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.a>
    </section>
  );
}
