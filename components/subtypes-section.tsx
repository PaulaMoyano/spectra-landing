"use client"

import { Badge } from "@/components/ui/badge"
import { Flame, Brain, Dna, Layers } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useLanguage } from "@/contexts/language-context"

export function SubtypesSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 })
  const { t } = useLanguage()

  const subtypes = [
    {
      icon: Flame,
      nameKey: "subtypes.inflammatory.title",
      tagKey: "subtypes.inflammatory.tag",
      badgeColor: "bg-red-500/10 text-red-600 border-red-500/20",
      descKey: "subtypes.inflammatory.desc"
    },
    {
      icon: Brain,
      nameKey: "subtypes.eeg.title",
      tagKey: "subtypes.eeg.tag",
      badgeColor: "bg-primary/10 text-primary border-primary/20",
      descKey: "subtypes.eeg.desc"
    },
    {
      icon: Dna,
      nameKey: "subtypes.metabolizer.title",
      tagKey: "subtypes.metabolizer.tag",
      badgeColor: "bg-amber-500/10 text-amber-600 border-amber-500/20",
      descKey: "subtypes.metabolizer.desc"
    },
    {
      icon: Layers,
      nameKey: "subtypes.mixed.title",
      tagKey: "subtypes.mixed.tag",
      badgeColor: "bg-secondary/10 text-secondary border-secondary/20",
      descKey: "subtypes.mixed.desc"
    }
  ]

  return (
    <section className="py-24 bg-muted" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-4">
            {t("subtypes.title")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-balance">
            {t("subtypes.subtitle")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {subtypes.map((subtype, index) => (
            <div
              key={subtype.nameKey}
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
                      {t(subtype.nameKey)}
                    </h3>
                    <Badge variant="outline" className={subtype.badgeColor}>
                      {t(subtype.tagKey)}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t(subtype.descKey)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
