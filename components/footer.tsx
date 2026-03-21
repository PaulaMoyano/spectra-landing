import { SpectraLogo } from "./spectra-logo"

export function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <SpectraLogo className="w-8 h-8 text-secondary" />
            <span className="text-lg font-semibold text-secondary">Spectra</span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Biomarker-driven antidepressant treatment
          </p>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Ciencia</a>
            <a href="#" className="hover:text-primary transition-colors">Equipo</a>
            <a href="#" className="hover:text-primary transition-colors">Contacto</a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>Referencias: STAR*D Study, EMBARC Dataset (N=309), Li et al. 2025</p>
          <p className="mt-2">© 2026 Spectra. Herramienta de apoyo a la decisión clínica.</p>
        </div>
      </div>
    </footer>
  )
}
