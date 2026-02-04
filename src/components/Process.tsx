import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import factoryImage from "@/assets/factory-interior.jpg";
import portImage from "@/assets/port-logistics.jpg";

const steps = [
  {
    number: "01",
    title: "Análise Inicial",
    description: "Avaliamos seu projeto, necessidades e objetivos para criar um plano estratégico personalizado para a ZFM.",
    image: null,
  },
  {
    number: "02",
    title: "Estruturação Legal",
    description: "Estruturação técnica e legal da planta, licenciamento junto à SUFRAMA e órgãos competentes.",
    image: factoryImage,
  },
  {
    number: "03",
    title: "Incentivos e PPB",
    description: "Elaboração e aprovação do PPB, habilitação aos incentivos fiscais exclusivos da Zona Franca.",
    image: null,
  },
  {
    number: "04",
    title: "Operação",
    description: "Gestão completa do cronograma, implantação de SGI e suporte até a entrada em operação.",
    image: portImage,
  },
];

export function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="processo" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="badge-premium mb-6">
            <span className="gold-dot" />
            Nosso Processo
          </span>
          <h2 className="heading-section mb-4">
            Do Planejamento à <span className="text-gradient-gold">Operação</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nossa metodologia comprovada garante agilidade e conformidade em cada etapa 
            da implantação do seu projeto na Zona Franca de Manaus.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              {/* Content */}
              <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="card-premium p-8 md:p-10">
                  <div className="flex items-start gap-6">
                    <div className="step-number shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-semibold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                {step.image ? (
                  <div className="relative rounded-2xl overflow-hidden h-[280px]">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                  </div>
                ) : (
                  <div className="h-[280px] rounded-2xl bg-gradient-to-br from-card to-secondary/50 border border-border/50 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-7xl font-serif text-gradient-gold font-bold opacity-30">
                        {step.number}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
