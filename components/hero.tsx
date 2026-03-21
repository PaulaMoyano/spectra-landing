"use client"

import { Button } from "@/components/ui/button"
import { SpectraLogo } from "./spectra-logo"
import { Play, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import { useLanguage } from "@/contexts/language-context"

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center bg-secondary overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A3A52_1px,transparent_1px),linear-gradient(to_bottom,#1A3A52_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        {/* Logo + Name */}
        <div className={`flex items-center gap-3 mb-12 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
          <SpectraLogo className="w-10 h-10 text-primary" />
          <span className="text-2xl font-semibold tracking-tight text-secondary-foreground">Spectra</span>
        </div>

        {/* Badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-secondary/50 mb-10 transition-all duration-700 delay-100 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-primary font-medium text-xs uppercase tracking-widest">
            {t("hero.badge")}
          </span>
        </div>

        {/* Main headline - styled like the reference */}
        <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-foreground leading-[1.1] mb-8 transition-all duration-1000 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className={`inline-block transition-all duration-700 delay-300 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>{t("hero.title1")}</span>
          <br />
          <span className={`font-serif italic text-primary inline-block transition-all duration-700 delay-500 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>{t("hero.title2")}</span>
          <br />
          <span className={`inline-block transition-all duration-700 delay-700 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>{t("hero.title3")}</span>
        </h1>

        {/* Subtitle */}
        <p className={`text-lg md:text-xl text-accent max-w-2xl mb-12 leading-relaxed transition-all duration-700 delay-[800ms] ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          {t("hero.subtitle")}
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-[1000ms] ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 h-14 hover:scale-105 transition-transform"
            onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Play className="mr-2 h-4 w-4" />
            {t("hero.cta1")}
          </Button>
          <Button 
            size="lg" 
            variant="ghost" 
            className="text-accent hover:text-secondary-foreground hover:bg-accent/10 font-medium h-14"
            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t("hero.cta2")}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-[1200ms] ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <div className="w-6 h-10 rounded-full border-2 border-accent/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
