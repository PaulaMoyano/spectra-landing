"use client"

import { Upload, Cpu, FileText } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useLanguage } from "@/contexts/language-context"

export function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })
  const { t } = useLanguage()

  const steps = [
    {
      number: "01",
      icon: Upload,
      titleKey: "how.step1.title",
      descKey: "how.step1.desc"
    },
    {
      number: "02",
      icon: Cpu,
      titleKey: "how.step2.title",
      descKey: "how.step2.desc"
    },
    {
      number: "03",
      icon: FileText,
      titleKey: "how.step3.title",
      descKey: "how.step3.desc"
    }
  ]

  return (
    <section id="how-it-works" className="py-24 bg-background" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-5xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-4">
            {t("how.title")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-balance">
            {t("how.subtitle")}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className={`relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="bg-card border border-border rounded-xl p-8 h-full hover:border-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <span className="text-6xl font-bold text-primary/20 absolute top-4 right-6">
                  {step.number}
                </span>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-3">
                  {t(step.titleKey)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(step.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
