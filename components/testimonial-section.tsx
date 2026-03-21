"use client"

import { Quote } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function TestimonialSection() {
  const { t } = useLanguage()
  
  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 relative">
          <Quote className="w-12 h-12 text-primary/20 absolute top-8 left-8" />
          <blockquote className="text-xl md:text-2xl text-secondary leading-relaxed text-center mb-8 px-8">
            {t("testimonial.quote")}
          </blockquote>
          <div className="text-center">
            <p className="text-muted-foreground text-sm">{t("testimonial.author")}</p>
          </div>
        </div>

        <div className="mt-12 p-6 bg-muted rounded-xl">
          <p className="text-center text-muted-foreground text-sm leading-relaxed">
            {t("testimonial.disclaimer")}
          </p>
        </div>
      </div>
    </section>
  )
}
