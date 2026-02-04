import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  TreeDeciduous,
  Landmark,
  FileText,
  Hammer,
  Scale,
  BarChart3,
} from "lucide-react";

const services = [
  {
    icon: TreeDeciduous,
    title: "Licenciamento Ambiental e Urbanístico",
    description:
      "Condução completa dos processos de licenciamento junto aos órgãos ambientais e urbanísticos.",
  },
  {
    icon: Landmark,
    title: "Projetos junto à SUFRAMA",
    description:
      "Elaboração e acompanhamento de projetos e aprovações junto à SUFRAMA e demais órgãos.",
  },
  {
    icon: FileText,
    title: "Elaboração de PPB e Incentivos",
    description:
      "Desenvolvimento de Processos Produtivos Básicos e habilitação aos incentivos fiscais.",
  },
  {
    icon: Hammer,
    title: "Apoio na Construção e Operação",
    description:
      "Suporte técnico durante a construção e início das operações da planta industrial.",
  },
  {
    icon: BarChart3,
    title: "ESG: Benefícios Estratégicos",
    description:
      "Diagnóstico ESG inicial, implementação de práticas ligadas ao SGI, conexão com benefícios fiscais e certificações.",
  },
  {
    icon: Scale,
    title: "Apoio Jurídico e Regulatório",
    description:
      "Assessoria jurídica especializada em questões regulatórias da Zona Franca de Manaus.",
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicos" className="py-24 md:py-32 relative">
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
            Escopo completo
          </span>
          <h2 className="section-title mx-auto">Escopo dos Serviços</h2>
          <p className="section-subtitle mx-auto mt-4">
            Nosso escopo abrangente garante que todas as etapas do seu projeto
            sejam conduzidas com excelência e profissionalismo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="glass-card p-8 h-full card-hover">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-xl" />
                <service.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
