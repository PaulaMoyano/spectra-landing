"use client"

import { useState } from "react"
import { X, Check, AlertTriangle, Clock, FlaskConical } from "lucide-react"

const treatments = [
  { id: 1, name: "Escitalopram", dose: "10mg", status: "failed", message: "Sin respuesta" },
  { id: 2, name: "Sertralina", dose: "50mg", status: "adverse", message: "Efectos adversos" },
  { id: 3, name: "Venlafaxina", dose: "75mg", status: "partial", message: "Respuesta parcial" },
  { id: 4, name: "Bupropion", dose: "150mg", status: "success", message: "Respuesta" },
]

export function ProblemSection() {
  const [activeStep, setActiveStep] = useState(3)
  const [showSpectra, setShowSpectra] = useState(false)

  const handleTreatmentClick = (index: number) => {
    setActiveStep(index)
  }

  const toggleSpectra = () => {
    setShowSpectra(!showSpectra)
  }

  const progress = ((activeStep + 1) / treatments.length) * 75 // Max 75% until full response

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

        {/* Reason cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
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

        {/* Interactive Timeline */}
        <div className="bg-[#0A1929] rounded-2xl p-8 md:p-12">
          <p className="text-accent text-xs uppercase tracking-widest mb-8">
            Recorrido típico hasta respuesta — 2.5 años
          </p>

          {/* Progress bar */}
          <div className="relative mb-8">
            <div className="h-1.5 bg-accent/20 rounded-full">
              <div 
                className="h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div 
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-orange-400 rounded-full border-2 border-[#0A1929] transition-all duration-500 shadow-lg shadow-orange-400/50"
              style={{ left: `${progress}%` }}
            />
            <div className="flex justify-between mt-3 text-sm">
              <span className="text-accent">Inicio</span>
              <span className="text-orange-400">&#8593; Ahora</span>
              <span className="text-accent">Remision posible</span>
            </div>
          </div>

          {/* Treatment cards - clickable */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {treatments.map((treatment, index) => {
              const isActive = index <= activeStep
              const isCurrent = index === activeStep
              const isSuccess = treatment.status === "success"
              
              return (
                <button
                  key={treatment.id}
                  onClick={() => handleTreatmentClick(index)}
                  className={`p-4 rounded-lg border text-left transition-all duration-300 ${
                    isCurrent 
                      ? "border-orange-400 bg-orange-400/10 scale-105" 
                      : isActive
                        ? "border-accent/30 bg-accent/5"
                        : "border-accent/10 bg-transparent opacity-50"
                  } hover:scale-105 hover:border-primary/50 cursor-pointer`}
                >
                  <p className="text-accent text-xs uppercase tracking-wider mb-2">
                    Intento {treatment.id}
                  </p>
                  <p className="text-secondary-foreground font-semibold mb-1">
                    {treatment.name} <span className="font-normal">{treatment.dose}</span>
                  </p>
                  <p className={`text-sm flex items-center gap-1 ${
                    isSuccess ? "text-primary" : "text-red-400"
                  }`}>
                    {isSuccess ? (
                      <Check className="w-3 h-3" />
                    ) : (
                      <X className="w-3 h-3" />
                    )}
                    {treatment.message}
                  </p>
                </button>
              )
            })}
          </div>

          {/* Spectra alternative - toggleable */}
          <button
            onClick={toggleSpectra}
            className={`w-full p-6 rounded-lg border transition-all duration-500 text-left ${
              showSpectra 
                ? "border-primary bg-primary/10" 
                : "border-primary/30 bg-primary/5 hover:border-primary/50"
            }`}
          >
            <p className="text-primary text-xs uppercase tracking-wider mb-2 font-medium">
              Con Spectra
            </p>
            <p className="text-secondary-foreground leading-relaxed">
              {showSpectra ? (
                <>
                  <span className="text-primary font-semibold">Bupropión prescripto como primera línea.</span>
                  {" "}El perfil inflamatorio detectado en la evaluación inicial indicaba alta probabilidad de respuesta a este fármaco.
                  <span className="block mt-2 text-accent text-sm">
                    Tiempo hasta respuesta: ~6 semanas en lugar de 2.5 años.
                  </span>
                </>
              ) : (
                <>
                  Perfil inflamatorio detectado en la evaluación inicial → Bupropión prescripto como primera línea.
                  <span className="block mt-2 text-accent text-sm">
                    Click para ver más detalles
                  </span>
                </>
              )}
            </p>
          </button>
        </div>
      </div>
    </section>
  )
}
