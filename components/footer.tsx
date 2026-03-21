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
            <a 
              href="https://x.com/Spectrabiotech" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary transition-colors"
              aria-label="Twitter/X"
            >
              <svg 
                viewBox="0 0 24 24" 
                className="w-5 h-5" 
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
