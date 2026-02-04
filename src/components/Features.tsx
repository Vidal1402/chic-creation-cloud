import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Building2,
  FileCheck,
  Users,
  Leaf,
  Scale,
  BarChart3,
  Shield,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Expertise em SUFRAMA",
    description: "Conhecimento avançado de trâmites junto à SUFRAMA, SEMMAS, IPAAM e demais órgãos reguladores.",
  },
  {
    icon: FileCheck,
    title: "Elaboração de PPB",
    description: "Desenvolvimento e aprovação de Processos Produtivos Básicos junto aos órgãos competentes.",
  },
  {
    icon: Users,
    title: "Equipe Multidisciplinar",
    description: "Profissionais especializados em direito, engenharia, contabilidade e gestão empresarial.",
  },
  {
    icon: Leaf,
    title: "Conformidade ESG",
    description: "Integração de práticas de governança e sustentabilidade desde a concepção do projeto.",
  },
  {
    icon: Scale,
    title: "Apoio Jurídico",
    description: "Assessoria jurídica especializada em questões regulatórias e tributárias da ZFM.",
  },
  {
    icon: BarChart3,
    title: "Auditoria Fiscal",
    description: "Análise específica para restituição e otimização dos benefícios fiscais.",
  },
  {
    icon: Shield,
    title: "Gestão de Riscos",
    description: "Identificação e mitigação de riscos regulatórios e operacionais do projeto.",
  },
  {
    icon: Zap,
    title: "Agilidade",
    description: "Processos otimizados para reduzir tempo de aprovação e início de operações.",
  },
];

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="diferenciais" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="badge-premium mb-6">
            <span className="gold-dot" />
            Diferenciais
          </span>
          <h2 className="heading-section mb-4">
            Excelência <span className="text-gradient-gold">Profissional</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada recurso projetado para profissionais que exigem credibilidade e 
            resultados em seus projetos na Zona Franca de Manaus.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-premium p-6 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
