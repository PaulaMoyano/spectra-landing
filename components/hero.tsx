"use client"

import { Button } from "@/components/ui/button"
import { SpectraLogo } from "./spectra-logo"
import { Play, ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-secondary overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A3A52_1px,transparent_1px),linear-gradient(to_bottom,#1A3A52_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        {/* Logo + Name */}
        <div className="flex items-center gap-3 mb-12">
          <SpectraLogo className="w-10 h-10 text-primary" />
          <span className="text-2xl font-semibold tracking-tight text-secondary-foreground">Spectra</span>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-secondary/50 mb-10">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-primary font-medium text-xs uppercase tracking-widest">
            Clinical Decision Support
          </span>
        </div>

        {/* Main headline - styled like the reference */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-foreground leading-[1.1] mb-8">
          Biomarker-driven
          <br />
          <span className="font-serif italic text-primary">antidepressant</span>
          <br />
          treatment
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-accent max-w-2xl mb-12 leading-relaxed">
          Spectra predice que antidepresivo tiene mayor probabilidad de funcionar 
          para cada paciente, integrando EEG, biomarcadores inflamatorios y 
          farmacogenomica con explicabilidad SHAP.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 h-14"
            onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Play className="mr-2 h-4 w-4" />
            VER DEMO
          </Button>
          <Button 
            size="lg" 
            variant="ghost" 
            className="text-accent hover:text-secondary-foreground hover:bg-accent/10 font-medium h-14"
            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
          >
            COMO FUNCIONA
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
