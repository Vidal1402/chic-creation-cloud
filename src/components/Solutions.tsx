import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FileCheck,
  Building2,
  Award,
  Leaf,
  ClipboardList,
  Settings,
} from "lucide-react";

const solutions = [
  {
    icon: Building2,
    title: "Estruturação Técnica",
    description:
      "Estruturação técnica e legal da planta industrial com planejamento completo.",
  },
  {
    icon: FileCheck,
    title: "Licenciamento",
    description:
      "Licenciamento e aprovações junto à SUFRAMA e órgãos competentes.",
  },
  {
    icon: Award,
    title: "Elaboração de PPB",
    description:
      "Elaboração e aprovação do Processo Produtivo Básico junto aos órgãos reguladores.",
  },
  {
    icon: Settings,
    title: "Incentivos Fiscais",
    description:
      "Habilitação aos incentivos fiscais exclusivos da Zona Franca de Manaus.",
  },
  {
    icon: Leaf,
    title: "Sistema de Gestão (SGI)",
    description:
      "Implantação do Sistema de Gestão Integrado com foco em conformidade e ESG.",
  },
  {
    icon: ClipboardList,
    title: "Gestão de Cronograma",
    description:
      "Gestão completa do cronograma até a entrada em operação da empresa.",
  },
];

export function Solutions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solucoes" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4 block">
            O que oferecemos
          </span>
          <h2 className="section-title mx-auto">Solução Vértice</h2>
          <p className="section-subtitle mx-auto mt-4">
            Oferecemos uma solução turnkey que cobre todas as etapas do projeto,
            garantindo agilidade, conformidade e máxima eficiência.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-8 card-hover group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <solution.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                {solution.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
