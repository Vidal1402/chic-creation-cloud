import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Lightbulb,
  Percent,
  GraduationCap,
  Ship,
  Leaf,
  FileCheck,
} from "lucide-react";

const benefits = [
  {
    icon: Percent,
    title: "Incentivos Fiscais Exclusivos",
    description:
      "Acesso a benefícios tributários diferenciados para empresas instaladas na Zona Franca de Manaus.",
  },
  {
    icon: Lightbulb,
    title: "Inovação e P&D Industrial",
    description:
      "Programas de apoio à pesquisa e modernização industrial, linhas de financiamento para inovação.",
  },
  {
    icon: GraduationCap,
    title: "Acesso a Talentos e P&D",
    description:
      "Universidades, centros de pesquisa e capacitação tecnológica para inovação e desenvolvimento.",
  },
  {
    icon: Ship,
    title: "Logística Estratégica",
    description:
      "Hub para Brasil e América Latina com porto, aeroporto internacional e integração fluvial.",
  },
  {
    icon: Leaf,
    title: "Diferencial ESG",
    description:
      "Integração de práticas de governança e sustentabilidade, fortalecendo imagem institucional.",
  },
  {
    icon: FileCheck,
    title: "Ambiente Regulatório Previsível",
    description:
      "SUFRAMA e órgãos reguladores com precedentes consolidados, reduzindo riscos.",
  },
];

export function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4 block">
            Vantagens Competitivas
          </span>
          <h2 className="section-title mx-auto">
            Benefícios de Investir em Manaus
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Descubra as vantagens estratégicas de estabelecer sua operação na
            Zona Franca de Manaus.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 card-hover group relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-colors duration-500" />
              <div className="relative z-10">
                <benefit.icon className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
