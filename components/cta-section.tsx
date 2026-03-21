import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section id="cta" className="py-24 bg-secondary">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground text-balance mb-6">
          Queres ver Spectra
          <br />
          en accion?
        </h2>
        <p className="text-lg text-accent mb-10">
          EEG + panel inflamatorio + farmacogenomica. Una inversion que cambia el resultado.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8">
            Solicitar acceso demo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-accent text-secondary-foreground hover:bg-accent/20">
            Contactar equipo
          </Button>
        </div>

        <p className="mt-8 text-sm text-accent/70">
          Actualmente en fase piloto. Solicita acceso para tu clinica o institucion.
        </p>
      </div>
    </section>
  )
}
