"use client"

import { Check, X } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function ComparisonSection() {
  const { t } = useLanguage()
  
  const features = [
    { nameKey: "comparison.pharmacogenomics", spectra: true, competitor1: true, competitor2: true },
    { nameKey: "comparison.eeg", spectra: true, competitor1: false, competitor2: false },
    { nameKey: "comparison.inflammatory", spectra: true, competitor1: false, competitor2: false },
    { nameKey: "comparison.shap", spectra: true, competitor1: false, competitor2: false },
    { nameKey: "comparison.prediction", spectra: true, competitor1: false, competitor2: false },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-4">
            {t("comparison.title")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-balance">
            {t("comparison.subtitle")}
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 font-semibold text-secondary">{t("comparison.feature")}</th>
                <th className="text-center py-4 px-4">
                  <span className="font-bold text-primary">Spectra</span>
                </th>
                <th className="text-center py-4 px-4">
                  <span className="font-medium text-muted-foreground">{t("comparison.competitor1")}</span>
                </th>
                <th className="text-center py-4 px-4">
                  <span className="font-medium text-muted-foreground">{t("comparison.competitor2")}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
                <tr key={feature.nameKey} className={i % 2 === 0 ? "bg-muted/50" : ""}>
                  <td className="py-4 px-4 text-secondary font-medium">{t(feature.nameKey)}</td>
                  <td className="py-4 px-4 text-center">
                    {feature.spectra ? (
                      <Check className="w-5 h-5 text-primary mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-muted-foreground mx-auto" />
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {feature.competitor1 ? (
                      <Check className="w-5 h-5 text-primary mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-muted-foreground mx-auto" />
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {feature.competitor2 ? (
                      <Check className="w-5 h-5 text-primary mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-muted-foreground mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
