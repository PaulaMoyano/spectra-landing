"use client"

import { Badge } from "@/components/ui/badge"
import { Flame, Brain, Dna, Layers } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function SubtypesSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 })

  const subtypes = [
    {
      icon: Flame,
      name: "Inflamatorio",
      badge: "Alto riesgo SSRI",
      badgeColor: "bg-red-500/10 text-red-600 border-red-500/20",
      criteria: "CRP > 3 mg/L + IL-6 elevada",
      outcome: "SSRIs fallan en el 73% de los casos",
      recommendation: "Primera línea: bupropión o antiinflamatorio adjunto"
    },
    {
      icon: Brain,
      name: "EEG Respondedor",
      badge: "Alta respuesta",
      badgeColor: "bg-primary/10 text-primary border-primary/20",
      criteria: "Asimetría alfa frontal positiva (F4 > F3)",
      outcome: "74% de tasa de respuesta observada",
      recommendation: "Alta probabilidad de respuesta a SSRI"
    },
    {
      icon: Dna,
      name: "Metabolizador lento CYP",
      badge: "Ajuste dosis",
      badgeColor: "bg-amber-500/10 text-amber-600 border-amber-500/20",
      criteria: "CYP2D6 o CYP2C19 poor metabolizer",
      outcome: "Riesgo de acumulación tóxica",
      recommendation: "Requiere ajuste de dosis estándar"
    },
    {
      icon: Layers,
      name: "Perfil mixto",
      badge: "Multimodal",
      badgeColor: "bg-secondary/10 text-secondary border-secondary/20",
      criteria: "Combinación de factores de riesgo",
      outcome: "Predicción compleja necesaria",
      recommendation: "Análisis multimodal integrado"
    }
  ]

  return (
    <section className="py-24 bg-muted" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-4">
            Subtipos clínicos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-balance">
            Clasificación basada en evidencia biológica
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {subtypes.map((subtype, index) => (
            <div
              key={subtype.name}
              className={`bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-500 cursor-default ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <subtype.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-lg font-semibold text-secondary">
                      {subtype.name}
                    </h3>
                    <Badge variant="outline" className={subtype.badgeColor}>
                      {subtype.badge}
                    </Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground">
                      <span className="font-medium text-secondary">Criterio:</span> {subtype.criteria}
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-secondary">Resultado:</span> {subtype.outcome}
                    </p>
                    <p className="text-primary font-medium">
                      {subtype.recommendation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
