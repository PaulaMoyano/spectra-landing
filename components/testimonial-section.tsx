import { Quote } from "lucide-react"

export function TestimonialSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-4">
            Para el psiquiatra
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 relative">
          <Quote className="w-12 h-12 text-primary/20 absolute top-8 left-8" />
          <blockquote className="text-xl md:text-2xl text-secondary leading-relaxed text-center mb-8 px-8">
            {"\"Spectra no reemplaza mi criterio clínico — lo potencia. Por primera vez puedo ver el perfil biológico completo de mi paciente y tomar una decisión informada desde la primera consulta.\""}
          </blockquote>
          <div className="text-center">
            <p className="font-semibold text-secondary">Dr. María González</p>
            <p className="text-muted-foreground text-sm">Psiquiatra, Hospital Universitario</p>
          </div>
        </div>

        <div className="mt-12 p-6 bg-muted rounded-xl">
          <p className="text-center text-muted-foreground text-sm leading-relaxed">
            <strong className="text-secondary">Importante:</strong> Spectra no es un sistema de diagnóstico de depresión. 
            No reemplaza al psiquiatra ni toma decisiones clínicas. Es una herramienta de apoyo que sintetiza 
            información biológica compleja para que el médico pueda decidir mejor. El output siempre es 
            una recomendación fundamentada, nunca una prescripción automática.
          </p>
        </div>
      </div>
    </section>
  )
}
