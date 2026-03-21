import { Button } from "@/components/ui/button"
import { SpectraLogo } from "./spectra-logo"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#D1E3ED_1px,transparent_1px),linear-gradient(to_bottom,#D1E3ED_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        {/* Logo + Name */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <SpectraLogo className="w-12 h-12 text-secondary" />
          <span className="text-3xl font-semibold tracking-tight text-secondary">Spectra</span>
        </div>

        {/* Tagline */}
        <p className="text-primary font-medium text-sm uppercase tracking-widest mb-4">
          Biomarker-driven antidepressant treatment
        </p>

        {/* Main headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight text-balance mb-6">
          Predecimos qué antidepresivo funcionará para cada paciente
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
          Integramos EEG, biomarcadores inflamatorios y farmacogenómica para que el psiquiatra elija el tratamiento correcto desde el primer día.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8">
            Ver demo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
            Conocer más
          </Button>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="p-4 rounded-lg bg-card border border-border">
            <p className="text-3xl font-bold text-primary">50%</p>
            <p className="text-sm text-muted-foreground">de pacientes falla el primer antidepresivo</p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <p className="text-3xl font-bold text-primary">2-3 años</p>
            <p className="text-sm text-muted-foreground">promedio para encontrar el tratamiento correcto</p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <p className="text-3xl font-bold text-primary">84%</p>
            <p className="text-sm text-muted-foreground">sensibilidad del modelo EEG para predecir remisión</p>
          </div>
        </div>
      </div>
    </section>
  )
}
