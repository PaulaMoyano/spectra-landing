"use client"

import { SpectraLogo } from "./spectra-logo"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()
  
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
            <a href="#" className="hover:text-primary transition-colors">{t("footer.privacy")}</a>
            <a href="#" className="hover:text-primary transition-colors">{t("footer.terms")}</a>
            <a href="#" className="hover:text-primary transition-colors">{t("footer.contact")}</a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
