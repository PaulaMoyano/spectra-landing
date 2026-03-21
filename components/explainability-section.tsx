"use client"

import { useState } from "react"

const shapFeatures = [
  { name: "CRP elevada", value: 0.35, positive: false, detail: "Proteina C-reactiva elevada (>3 mg/L) es un marcador de inflamacion sistemica asociado a menor respuesta a SSRIs." },
  { name: "IL-6 > 2.5 pg/mL", value: 0.28, positive: false, detail: "Interleucina-6 elevada sugiere activacion inmune que puede interferir con la neurotransmision serotoninergica." },
  { name: "Asimetria alfa frontal", value: 0.22, positive: true, detail: "La asimetria alfa frontal derecha > izquierda predice mejor respuesta a farmacos activadores como bupropion." },
  { name: "CYP2D6 normal", value: 0.15, positive: true, detail: "Metabolizador normal de CYP2D6 permite dosis estandar sin ajustes por farmacogenetica." },
  { name: "Theta frontal bajo", value: 0.12, positive: true, detail: "Theta frontal bajo correlaciona con menor desregulacion emocional y mejor pronostico general." },
  { name: "HAMD baseline", value: 0.08, positive: false, detail: "Puntaje HAMD elevado indica depresion severa, lo cual puede requerir tratamiento combinado." },
]

const patientProfiles = [
  { 
    name: "Perfil Inflamatorio", 
    features: [0.35, 0.28, 0.10, 0.15, 0.08, 0.20],
    recommendation: "Bupropion + antiinflamatorio adjunto",
    confidence: 87
  },
  { 
    name: "Perfil EEG Respondedor", 
    features: [0.08, 0.05, 0.32, 0.15, 0.28, 0.10],
    recommendation: "SSRI (escitalopram o sertralina)",
    confidence: 91
  },
  { 
    name: "Metabolizador Lento", 
    features: [0.10, 0.08, 0.15, 0.40, 0.12, 0.15],
    recommendation: "Dosis reducida o farmaco sin CYP2D6",
    confidence: 84
  },
]

export function ExplainabilitySection() {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null)
  const [selectedProfile, setSelectedProfile] = useState(0)

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
              Explicabilidad
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground text-balance mb-6">
              No solo una recomendacion — el razonamiento completo
            </h2>
            <p className="text-accent leading-relaxed mb-6">
              Lo que diferencia a Spectra es la <span className="text-primary font-semibold">explicabilidad</span>: 
              el psiquiatra no recibe solo una recomendacion, recibe el razonamiento detras de ella.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                </span>
                <span className="text-accent">
                  <strong className="text-secondary-foreground">Waterfall SHAP:</strong> visualizacion de que features empujaron la prediccion y en que direccion
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                </span>
                <span className="text-accent">
                  <strong className="text-secondary-foreground">Resumen clinico:</strong> parrafo en lenguaje natural generado automaticamente
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                </span>
                <span className="text-accent">
                  <strong className="text-secondary-foreground">Transparencia total:</strong> el medico decide mejor cuando entiende el porque
                </span>
              </li>
            </ul>

            {/* Profile selector */}
            <div className="flex flex-wrap gap-2">
              {patientProfiles.map((profile, i) => (
                <button
                  key={profile.name}
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
                  {profile.name}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive SHAP Waterfall visualization */}
          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-secondary">Contribucion de features (SHAP)</h3>
              <span className="text-xs text-primary font-medium">
                Confianza: {currentProfile.confidence}%
              </span>
            </div>
            <div className="space-y-3">
              {displayFeatures.map((feature, index) => (
                <button
                  key={feature.name}
                  onClick={() => setSelectedFeature(selectedFeature === index ? null : index)}
                  className={`w-full flex items-center gap-3 p-2 rounded-lg transition-all ${
                    selectedFeature === index 
                      ? "bg-muted ring-2 ring-primary" 
                      : "hover:bg-muted/50"
                  }`}
                >
                  <span className="text-xs text-muted-foreground w-32 text-left truncate">{feature.name}</span>
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
                    {shapFeatures[selectedFeature].detail}
                  </p>
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground mb-2">
                <span className="font-medium text-secondary">Recomendacion:</span>
              </p>
              <p className="text-primary font-semibold">
                {currentProfile.recommendation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
