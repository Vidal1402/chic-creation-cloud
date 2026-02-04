import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, TrendingDown, Lightbulb, AlertTriangle } from "lucide-react";

const swotData = {
  strengths: {
    icon: TrendingUp,
    title: "Forças",
    color: "from-emerald-500/20 to-emerald-600/10",
    borderColor: "border-emerald-500/30",
    textColor: "text-emerald-400",
    items: [
      "Estruturação de processos com foco em conformidade legal e escalabilidade",
      "Suporte integral para licenciamento e credenciamento SUFRAMA",
      "Sistema de Gestão Integrado (Qualidade, Meio Ambiente, Saúde e Segurança)",
      "Equipe experiente na interlocução com órgãos públicos",
    ],
  },
  weaknesses: {
    icon: TrendingDown,
    title: "Fraquezas que Mitigamos",
    color: "from-amber-500/20 to-amber-600/10",
    borderColor: "border-amber-500/30",
    textColor: "text-amber-400",
    items: [
      "Estrutura administrativa em fase de transição",
      "Necessidade de processos formais em áreas críticas",
      "Familiaridade com trâmites específicos da ZFM",
      "Domínio técnico para aproveitamento de incentivos fiscais",
    ],
  },
  opportunities: {
    icon: Lightbulb,
    title: "Oportunidades",
    color: "from-blue-500/20 to-blue-600/10",
    borderColor: "border-blue-500/30",
    textColor: "text-blue-400",
    items: [
      "Aproveitamento dos incentivos fiscais exclusivos da ZFM",
      "Expansão com ganhos logísticos, operacionais e tributários",
      "Programas de sustentabilidade e certificações",
      "Consolidação de imagem institucional alinhada a práticas ESG",
    ],
  },
  threats: {
    icon: AlertTriangle,
    title: "Ameaças que Gerenciamos",
    color: "from-red-500/20 to-red-600/10",
    borderColor: "border-red-500/30",
    textColor: "text-red-400",
    items: [
      "Complexidade burocrática e conformidade multi-jurisdicional",
      "Riscos de atrasos em aprovações e licenciamentos",
      "Exigências rigorosas da SUFRAMA quanto ao PPB",
      "Instabilidade em políticas públicas e incentivos",
    ],
  },
};

export function SWOT() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="swot" className="py-24 md:py-32 relative overflow-hidden">
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
            Análise Estratégica
          </span>
          <h2 className="heading-section mb-4">
            Análise <span className="text-gradient-gold">SWOT</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entenda como a Vértice identifica oportunidades e gerencia riscos 
            para maximizar o sucesso do seu projeto.
          </p>
        </motion.div>

        {/* SWOT Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(swotData).map(([key, data], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative rounded-2xl p-8 overflow-hidden border ${data.borderColor}`}
              style={{
                background: `linear-gradient(145deg, hsl(220 18% 12%), hsl(220 20% 9%))`,
              }}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${data.color} pointer-events-none`} />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-background/50 flex items-center justify-center`}>
                    <data.icon className={`w-6 h-6 ${data.textColor}`} />
                  </div>
                  <h3 className={`text-xl font-serif font-semibold ${data.textColor}`}>
                    {data.title}
                  </h3>
                </div>
                
                <ul className="space-y-3">
                  {data.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className={`mt-2 w-1.5 h-1.5 rounded-full ${data.textColor.replace('text-', 'bg-')} shrink-0`} />
                      <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
