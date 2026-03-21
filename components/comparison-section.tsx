import { Check, X } from "lucide-react"

export function ComparisonSection() {
  const features = [
    { name: "Farmacogenómica (CYP)", spectra: true, neomente: true, genesight: true },
    { name: "Biomarcadores EEG", spectra: true, neomente: false, genesight: false },
    { name: "Panel inflamatorio", spectra: true, neomente: false, genesight: false },
    { name: "Integración multimodal", spectra: true, neomente: false, genesight: false },
    { name: "Explicabilidad SHAP", spectra: true, neomente: false, genesight: false },
    { name: "Resumen clínico en lenguaje natural", spectra: true, neomente: false, genesight: false },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-4">
            Diferenciadores
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-balance">
            El único sistema que integra las tres fuentes de datos
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 font-semibold text-secondary">Característica</th>
                <th className="text-center py-4 px-4">
                  <span className="font-bold text-primary">Spectra</span>
                </th>
                <th className="text-center py-4 px-4">
                  <span className="font-medium text-muted-foreground">Neomente</span>
                </th>
                <th className="text-center py-4 px-4">
                  <span className="font-medium text-muted-foreground">GeneSight</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
                <tr key={feature.name} className={i % 2 === 0 ? "bg-muted/50" : ""}>
                  <td className="py-4 px-4 text-secondary font-medium">{feature.name}</td>
                  <td className="py-4 px-4 text-center">
                    {feature.spectra ? (
                      <Check className="w-5 h-5 text-primary mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-muted-foreground mx-auto" />
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {feature.neomente ? (
                      <Check className="w-5 h-5 text-primary mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-muted-foreground mx-auto" />
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {feature.genesight ? (
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

        <p className="text-center text-muted-foreground mt-8 text-sm">
          EEG + inflamación + farmacogenómica con explicabilidad SHAP — ningún otro sistema ofrece esta combinación.
        </p>
      </div>
    </section>
  )
}
