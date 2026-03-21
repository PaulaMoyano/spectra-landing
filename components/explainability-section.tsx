"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"

export function ExplainabilitySection() {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null)
  const [selectedProfile, setSelectedProfile] = useState(0)
  const { t, language } = useLanguage()

  const shapFeatures = [
    { 
      nameEs: "CRP elevada", nameEn: "Elevated CRP",
      value: 0.35, positive: false, 
      detailEs: "Proteína C-reactiva elevada (>3 mg/L) es un marcador de inflamación sistémica asociado a menor respuesta a SSRIs.",
      detailEn: "Elevated C-reactive protein (>3 mg/L) is a systemic inflammation marker associated with lower SSRI response."
    },
    { 
      nameEs: "IL-6 > 2.5 pg/mL", nameEn: "IL-6 > 2.5 pg/mL",
      value: 0.28, positive: false, 
      detailEs: "Interleucina-6 elevada sugiere activación inmune que puede interferir con la neurotransmisión serotoninérgica.",
      detailEn: "Elevated Interleukin-6 suggests immune activation that may interfere with serotonergic neurotransmission."
    },
    { 
      nameEs: "Asimetría alfa frontal", nameEn: "Frontal alpha asymmetry",
      value: 0.22, positive: true, 
      detailEs: "La asimetría alfa frontal derecha > izquierda predice mejor respuesta a fármacos activadores como bupropión.",
      detailEn: "Right > left frontal alpha asymmetry predicts better response to activating drugs like bupropion."
    },
    { 
      nameEs: "CYP2D6 normal", nameEn: "CYP2D6 normal",
      value: 0.15, positive: true, 
      detailEs: "Metabolizador normal de CYP2D6 permite dosis estándar sin ajustes por farmacogenética.",
      detailEn: "Normal CYP2D6 metabolizer allows standard dosing without pharmacogenetic adjustments."
    },
    { 
      nameEs: "Theta frontal bajo", nameEn: "Low frontal theta",
      value: 0.12, positive: true, 
      detailEs: "Theta frontal bajo correlaciona con menor desregulación emocional y mejor pronóstico general.",
      detailEn: "Low frontal theta correlates with less emotional dysregulation and better overall prognosis."
    },
    { 
      nameEs: "HAMD baseline", nameEn: "HAMD baseline",
      value: 0.08, positive: false, 
      detailEs: "Puntaje HAMD elevado indica depresión severa, lo cual puede requerir tratamiento combinado.",
      detailEn: "Elevated HAMD score indicates severe depression, which may require combination treatment."
    },
  ]

  const patientProfiles = [
    { 
      nameKey: "explainability.inflammatory", 
      features: [0.35, 0.28, 0.10, 0.15, 0.08, 0.20],
      recommendationEs: "Bupropión + antiinflamatorio adjunto",
      recommendationEn: "Bupropion + adjunct anti-inflammatory",
      confidence: 87
    },
    { 
      nameKey: "explainability.eegResponder", 
      features: [0.08, 0.05, 0.32, 0.15, 0.28, 0.10],
      recommendationEs: "SSRI (escitalopram o sertralina)",
      recommendationEn: "SSRI (escitalopram or sertraline)",
      confidence: 91
    },
    { 
      nameKey: "explainability.slowMetabolizer", 
      features: [0.10, 0.08, 0.15, 0.40, 0.12, 0.15],
      recommendationEs: "Dosis reducida o fármaco sin CYP2D6",
      recommendationEn: "Reduced dose or non-CYP2D6 drug",
      confidence: 84
    },
  ]

  const currentProfile = patientProfiles[selectedProfile]
  const displayFeatures = shapFeatures.map((f, i) => ({
    ...f,
    value: currentProfile.features[i],
    positive: shapFeatures[i].positive
  }))
  
  const maxValue = Math.max(...displayFeatures.map(f => Math.abs(f.value)))

  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-4">
              {t("explainability.title")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground text-balance mb-6">
              {t("explainability.subtitle")}
            </h2>

            {/* Profile selector */}
            <p className="text-accent mb-4">{t("explainability.selectProfile")}</p>
            <div className="flex flex-wrap gap-2">
              {patientProfiles.map((profile, i) => (
                <button
                  key={profile.nameKey}
                  onClick={() => {
                    setSelectedProfile(i)
                    setSelectedFeature(null)
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedProfile === i
                      ? "bg-primary text-primary-foreground"
                      : "bg-accent/20 text-accent hover:bg-accent/30"
                  }`}
                >
                  {t(profile.nameKey)}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive SHAP Waterfall visualization */}
          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-secondary">{t("explainability.shapTitle")}</h3>
              <span className="text-xs text-primary font-medium">
                {t("explainability.confidence")}: {currentProfile.confidence}%
              </span>
            </div>
            <p className="text-xs text-muted-foreground mb-4">{t("explainability.clickBar")}</p>
            <div className="space-y-3">
              {displayFeatures.map((feature, index) => (
                <button
                  key={language === "es" ? feature.nameEs : feature.nameEn}
                  onClick={() => setSelectedFeature(selectedFeature === index ? null : index)}
                  className={`w-full flex items-center gap-3 p-2 rounded-lg transition-all ${
                    selectedFeature === index 
                      ? "bg-muted ring-2 ring-primary" 
                      : "hover:bg-muted/50"
                  }`}
                >
                  <span className="text-xs text-muted-foreground w-32 text-left truncate">
                    {language === "es" ? feature.nameEs : feature.nameEn}
                  </span>
                  <div className="flex-1 h-6 bg-muted rounded relative flex items-center">
                    <div
                      className={`h-4 rounded transition-all duration-500 ${feature.positive ? 'bg-primary' : 'bg-red-400'}`}
                      style={{ width: `${(Math.abs(feature.value) / maxValue) * 100}%` }}
                    />
                  </div>
                  <span className={`text-xs font-mono w-12 text-right ${feature.positive ? 'text-primary' : 'text-red-500'}`}>
                    {feature.positive ? '+' : '-'}{feature.value.toFixed(2)}
                  </span>
                </button>
              ))}
            </div>

            {/* Feature detail */}
            <div className={`mt-4 overflow-hidden transition-all duration-300 ${
              selectedFeature !== null ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}>
              {selectedFeature !== null && (
                <div className="p-4 bg-muted rounded-lg border-l-4 border-primary">
                  <p className="text-sm text-secondary">
                    {language === "es" ? shapFeatures[selectedFeature].detailEs : shapFeatures[selectedFeature].detailEn}
                  </p>
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground mb-2">
                <span className="font-medium text-secondary">{t("explainability.prediction")}</span>
              </p>
              <p className="text-primary font-semibold">
                {language === "es" ? currentProfile.recommendationEs : currentProfile.recommendationEn}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
