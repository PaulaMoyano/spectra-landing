import { AlertTriangle, Clock, FlaskConical } from "lucide-react"

export function ProblemSection() {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-4">
            El problema
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground text-balance">
            Los psiquiatras prescriben por ensayo y error
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-secondary-foreground mb-3">
              Alta tasa de fallo
            </h3>
            <p className="text-accent leading-relaxed">
              El 50% de los pacientes con depresión mayor no responde al primer antidepresivo que le recetan.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-secondary-foreground mb-3">
              Años de espera
            </h3>
            <p className="text-accent leading-relaxed">
              El proceso de encontrar el tratamiento correcto tarda en promedio 2 a 3 años y requiere probar 3 o 4 fármacos distintos.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <FlaskConical className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-secondary-foreground mb-3">
              Falta de datos biológicos
            </h3>
            <p className="text-accent leading-relaxed">
              No es falta de opciones — es falta de información biológica para elegir la correcta desde el principio.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
