import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Eduardo Silva",
    role: "Diretor Industrial",
    company: "TechParts Brasil",
    content: "A Vértice foi fundamental para nossa entrada na Zona Franca de Manaus. O conhecimento técnico e a agilidade no processo de licenciamento superaram todas as expectativas. Economizamos meses de trabalho.",
    rating: 5,
  },
  {
    name: "Ana Paula Martins",
    role: "CEO",
    company: "EcoSolutions Amazônia",
    content: "Profissionalismo impecável. A equipe da Vértice nos guiou por todo o processo de PPB e incentivos fiscais. Hoje operamos com total conformidade e aproveitando 100% dos benefícios disponíveis.",
    rating: 5,
  },
  {
    name: "Roberto Nascimento",
    role: "Gerente de Operações",
    company: "Indústria Metalúrgica Norte",
    content: "O suporte jurídico e regulatório da Vértice é excepcional. Eles antecipam problemas antes que aconteçam e sempre têm soluções criativas. Parceria que vale cada centavo investido.",
    rating: 5,
  },
  {
    name: "Mariana Costa",
    role: "Diretora Financeira",
    company: "Componentes Eletrônicos AM",
    content: "A auditoria fiscal realizada pela Vértice identificou oportunidades de restituição que nem imaginávamos. Recuperamos valores significativos e otimizamos nossa estrutura tributária.",
    rating: 5,
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="depoimentos" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

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
            Depoimentos
          </span>
          <h2 className="heading-section mb-4">
            O que nossos <span className="text-gradient-gold">Clientes</span> dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empresas que confiaram na Vértice para transformar seus projetos em realidade.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-premium p-8 group"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-10 h-10 text-primary/30" />
              </div>

              {/* Content */}
              <p className="text-foreground/90 leading-relaxed mb-6 text-lg italic">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                  <span className="text-lg font-serif font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
