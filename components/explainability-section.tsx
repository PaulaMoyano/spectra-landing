"use client"

export function ExplainabilitySection() {
  // Simulated SHAP waterfall data
  const shapFeatures = [
    { name: "CRP elevada", value: 0.35, positive: false },
    { name: "IL-6 > 2.5 pg/mL", value: 0.28, positive: false },
    { name: "Asimetría alfa frontal", value: 0.22, positive: true },
    { name: "CYP2D6 normal", value: 0.15, positive: true },
    { name: "Theta frontal bajo", value: 0.12, positive: true },
    { name: "HAMD baseline", value: 0.08, positive: false },
  ]

  const maxValue = Math.max(...shapFeatures.map(f => Math.abs(f.value)))

  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-4">
              Explicabilidad
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground text-balance mb-6">
              No solo una recomendación — el razonamiento completo
            </h2>
            <p className="text-accent leading-relaxed mb-6">
              Lo que diferencia a Spectra es la <span className="text-primary font-semibold">explicabilidad</span>: 
              el psiquiatra no recibe solo una recomendación, recibe el razonamiento detrás de ella.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                </span>
                <span className="text-accent">
                  <strong className="text-secondary-foreground">Waterfall SHAP:</strong> visualización de qué features empujaron la predicción y en qué dirección
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                </span>
                <span className="text-accent">
                  <strong className="text-secondary-foreground">Resumen clínico:</strong> párrafo en lenguaje natural generado automáticamente
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                </span>
                <span className="text-accent">
                  <strong className="text-secondary-foreground">Transparencia total:</strong> el médico decide mejor cuando entiende el porqué
                </span>
              </li>
            </ul>
          </div>

          {/* SHAP Waterfall visualization */}
          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-secondary">Contribución de features (SHAP)</h3>
              <span className="text-xs text-muted-foreground">Predicción: SSRI ↓</span>
            </div>
            <div className="space-y-3">
              {shapFeatures.map((feature) => (
                <div key={feature.name} className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground w-32 truncate">{feature.name}</span>
                  <div className="flex-1 h-6 bg-muted rounded relative flex items-center">
                    <div
                      className={`h-4 rounded ${feature.positive ? 'bg-primary' : 'bg-red-400'}`}
                      style={{ width: `${(Math.abs(feature.value) / maxValue) * 100}%` }}
                    />
                  </div>
                  <span className={`text-xs font-mono w-12 text-right ${feature.positive ? 'text-primary' : 'text-red-500'}`}>
                    {feature.positive ? '+' : '-'}{feature.value.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-secondary">Interpretación:</span> Los marcadores inflamatorios elevados (CRP, IL-6) reducen significativamente la probabilidad de respuesta a SSRIs. Se recomienda considerar bupropion o antiinflamatorio adjunto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
