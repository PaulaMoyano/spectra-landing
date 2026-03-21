import { Upload, Cpu, FileText } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Upload,
      title: "Ingreso de datos",
      description: "El médico ingresa el perfil del paciente: resultados del panel de sangre (CRP, IL-6), features EEG pre-computadas, status CYP y HAMD baseline."
    },
    {
      number: "02",
      icon: Cpu,
      title: "Clasificación multimodal",
      description: "Spectra clasifica el subtipo clínico y calcula probabilidades de respuesta para cada tratamiento: SSRI, SNRI, bupropion y antiinflamatorio adjunto."
    },
    {
      number: "03",
      icon: FileText,
      title: "Informe explicable",
      description: "El médico recibe el subtipo asignado, gauges de probabilidad por fármaco, waterfall SHAP con features relevantes y un párrafo clínico explicativo."
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-4">
            Cómo funciona
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-balance">
            Tres pasos hacia el tratamiento correcto
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="bg-card border border-border rounded-xl p-8 h-full hover:border-primary transition-colors">
                <span className="text-6xl font-bold text-primary/20 absolute top-4 right-6">
                  {step.number}
                </span>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
