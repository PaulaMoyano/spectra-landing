"use client"

import { useState } from "react"
import { X, Check, AlertTriangle, Clock, FlaskConical } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function ProblemSection() {
  const [activeStep, setActiveStep] = useState(3)
  const [showSpectra, setShowSpectra] = useState(false)
  const { t } = useLanguage()

  const treatments = [
    { id: 1, name: "Escitalopram", dose: "10mg", status: "failed", messageKey: "problem.noResponse" },
    { id: 2, name: "Sertralina", dose: "50mg", status: "adverse", messageKey: "problem.adverseEffects" },
    { id: 3, name: "Venlafaxina", dose: "75mg", status: "partial", messageKey: "problem.partialResponse" },
    { id: 4, name: "Bupropión", dose: "150mg", status: "success", messageKey: "problem.response" },
  ]

  const handleTreatmentClick = (index: number) => {
    setActiveStep(index)
  }

  const toggleSpectra = () => {
    setShowSpectra(!showSpectra)
  }

  const progress = ((activeStep + 1) / treatments.length) * 75

  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-4">
            {t("problem.title")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground text-balance">
            {t("problem.subtitle")}
          </h2>
        </div>

        {/* Reason cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-secondary-foreground mb-3">
              {t("problem.card1.title")}
            </h3>
            <p className="text-accent leading-relaxed">
              {t("problem.card1.desc")}
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-secondary-foreground mb-3">
              {t("problem.card2.title")}
            </h3>
            <p className="text-accent leading-relaxed">
              {t("problem.card2.desc")}
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <FlaskConical className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-secondary-foreground mb-3">
              {t("problem.card3.title")}
            </h3>
            <p className="text-accent leading-relaxed">
              {t("problem.card3.desc")}
            </p>
          </div>
        </div>

        {/* Interactive Timeline */}
        <div className="bg-[#0A1929] rounded-2xl p-8 md:p-12">
          <p className="text-accent text-xs uppercase tracking-widest mb-8">
            {t("problem.timeline")}
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
              <span className="text-accent">{t("problem.start")}</span>
              <span className="text-orange-400">&#8593; {t("problem.now")}</span>
              <span className="text-accent">{t("problem.remission")}</span>
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
                    {t("problem.attempt")} {treatment.id}
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
                    {t(treatment.messageKey)}
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
              {t("problem.withSpectra")}
            </p>
            <p className="text-secondary-foreground leading-relaxed">
              {showSpectra ? (
                <>
                  <span className="text-primary font-semibold">{t("problem.spectraDetail1")}</span>
                  {t("problem.spectraDetail2")}
                  <span className="block mt-2 text-accent text-sm">
                    {t("problem.spectraTime")}
                  </span>
                </>
              ) : (
                <>
                  {t("problem.spectraSummary")}
                  <span className="block mt-2 text-accent text-sm">
                    {t("problem.clickMore")}
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
