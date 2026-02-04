import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const differentials = [
  "Atuação especializada na Zona Franca de Manaus",
  "Conhecimento avançado de trâmites junto à SUFRAMA, SEMMAS, IPAAM, DVISA, ANVISA, IMPLURB, SEFAZ e outros órgãos",
  "Experiência prática em projetos industriais e PPBs",
  "Integração das frentes ESG, digitalização e excelência operacional",
  "Equipe multidisciplinar de alta performance",
  "Auditoria Fiscal e Tributária com análise específica para restituição",
  "Consultoria com visão de longo prazo e geração de valor sustentável",
];

export function Differentials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="diferenciais" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Title and Description */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4 block">
              Por que nos escolher
            </span>
            <h2 className="section-title">Nossos Diferenciais</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              Com anos de experiência na região amazônica, a Vértice se destaca
              pela excelência em seus serviços e pelo profundo conhecimento das
              particularidades regulatórias e de negócios da Zona Franca de Manaus.
            </p>
          </motion.div>

          {/* Right Side - Checklist */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {differentials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors duration-300"
              >
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <p className="text-foreground">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
