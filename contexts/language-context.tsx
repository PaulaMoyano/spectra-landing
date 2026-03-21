"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type Language = "es" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  es: {
    // Hero
    "hero.badge": "CLINICAL DECISION SUPPORT",
    "hero.title1": "Biomarker-driven",
    "hero.title2": "antidepressant",
    "hero.title3": "treatment",
    "hero.subtitle": "Spectra predice qué antidepresivo tiene mayor probabilidad de funcionar para cada paciente, integrando EEG, biomarcadores inflamatorios y farmacogenómica con explicabilidad SHAP.",
    "hero.cta1": "VER DEMO",
    "hero.cta2": "CÓMO FUNCIONA",
    
    // Problem
    "problem.title": "El problema",
    "problem.subtitle": "¿Por qué los psiquiatras prescriben por ensayo y error?",
    "problem.card1.title": "Alta tasa de fracaso",
    "problem.card1.desc": "El 50% de los pacientes con depresión mayor no responde al primer antidepresivo que le recetan.",
    "problem.card2.title": "Años de espera",
    "problem.card2.desc": "El proceso de encontrar el tratamiento correcto tarda en promedio 2 a 3 años y requiere probar 3 o 4 fármacos distintos.",
    "problem.card3.title": "Falta de datos biológicos",
    "problem.card3.desc": "No es falta de opciones — es falta de información biológica para elegir la correcta desde el principio.",
    "problem.timeline": "Recorrido típico hasta respuesta — 2.5 años",
    "problem.start": "Inicio",
    "problem.now": "Ahora",
    "problem.remission": "Remisión posible",
    "problem.attempt": "INTENTO",
    "problem.noResponse": "Sin respuesta",
    "problem.adverseEffects": "Efectos adversos",
    "problem.partialResponse": "Respuesta parcial",
    "problem.response": "Respuesta",
    "problem.withSpectra": "CON SPECTRA",
    "problem.spectraDetail1": "Bupropión prescripto como primera línea.",
    "problem.spectraDetail2": " El perfil inflamatorio detectado en la evaluación inicial indicaba alta probabilidad de respuesta a este fármaco.",
    "problem.spectraTime": "Tiempo hasta respuesta: ~6 semanas en lugar de 2.5 años.",
    "problem.spectraSummary": "Perfil inflamatorio detectado en la evaluación inicial → Bupropión prescripto como primera línea.",
    "problem.clickMore": "Click para ver más detalles",
    
    // How it works
    "how.title": "Cómo funciona",
    "how.subtitle": "Tres fuentes de datos, un informe accionable",
    "how.step1.title": "Ingreso de datos",
    "how.step1.desc": "EEG cuantitativo, panel inflamatorio (IL-6, PCR, TNF-α) y test farmacogenómico del paciente.",
    "how.step2.title": "Clasificación ML",
    "how.step2.desc": "Modelo entrenado en datos clínicos identifica el subtipo de depresión y predice respuesta a cada fármaco.",
    "how.step3.title": "Informe explicable",
    "how.step3.desc": "Reporte SHAP que muestra qué biomarcadores contribuyen a la recomendación, para decisiones informadas.",
    
    // Subtypes
    "subtypes.title": "Subtipos clínicos",
    "subtypes.subtitle": "No todos los pacientes con depresión son iguales",
    "subtypes.inflammatory.title": "Perfil Inflamatorio",
    "subtypes.inflammatory.tag": "IL-6 elevada",
    "subtypes.inflammatory.desc": "Pacientes con marcadores inflamatorios elevados. Mejor respuesta a bupropión y agentes antiinflamatorios adjuntos.",
    "subtypes.eeg.title": "EEG Respondedor",
    "subtypes.eeg.tag": "Theta frontal alta",
    "subtypes.eeg.desc": "Patrones específicos de actividad theta frontal predicen respuesta a SSRIs como escitalopram.",
    "subtypes.metabolizer.title": "Metabolizador Lento",
    "subtypes.metabolizer.tag": "CYP2D6 poor",
    "subtypes.metabolizer.desc": "Variantes genéticas que afectan el metabolismo. Requieren ajuste de dosis o fármacos alternativos.",
    "subtypes.mixed.title": "Perfil Mixto",
    "subtypes.mixed.tag": "Multi-biomarcador",
    "subtypes.mixed.desc": "Combinación de señales de múltiples fuentes. El modelo integra todas las variables para una recomendación personalizada.",
    
    // Comparison
    "comparison.title": "Diferenciadores",
    "comparison.subtitle": "El único sistema que integra las tres fuentes de datos",
    "comparison.feature": "Característica",
    "comparison.eeg": "Análisis EEG",
    "comparison.inflammatory": "Panel inflamatorio",
    "comparison.pharmacogenomics": "Farmacogenómica",
    "comparison.shap": "Explicabilidad SHAP",
    "comparison.prediction": "Predicción de respuesta",
    "comparison.competitor1": "Solo Genética",
    "comparison.competitor2": "Solo Escalas",
    
    // Explainability
    "explainability.title": "Explicabilidad",
    "explainability.subtitle": "Cada recomendación viene con su justificación",
    "explainability.selectProfile": "Seleccionar perfil de paciente:",
    "explainability.inflammatory": "Inflamatorio",
    "explainability.eegResponder": "EEG Respondedor",
    "explainability.slowMetabolizer": "Metabolizador Lento",
    "explainability.prediction": "Predicción:",
    "explainability.confidence": "confianza",
    "explainability.shapTitle": "Contribución SHAP de cada feature",
    "explainability.clickBar": "Click en cualquier barra para ver detalles",
    "explainability.increases": "aumenta",
    "explainability.decreases": "disminuye",
    "explainability.probability": "la probabilidad de respuesta",
    
    // Testimonial
    "testimonial.quote": "\"Por primera vez puedo mostrarle al paciente por qué elijo un fármaco sobre otro. La explicabilidad cambia la conversación clínica.\"",
    "testimonial.author": "— Psiquiatra, Hospital Universitario",
    "testimonial.disclaimer": "Spectra es una herramienta de apoyo a la decisión clínica. No reemplaza el juicio médico ni constituye diagnóstico.",
    
    // CTA
    "cta.title": "¿Querés ver Spectra en acción?",
    "cta.subtitle": "EEG + panel inflamatorio + farmacogenómica. Una inversión que cambia el resultado.",
    "cta.demo": "Solicitar acceso demo",
    "cta.contact": "Contactar equipo",
    "cta.pilot": "Actualmente en fase piloto. Solicitá acceso para tu clínica o institución.",
    
    // Footer
    "footer.copyright": "© 2024 Spectra. Herramienta de apoyo a la decisión clínica.",
    "footer.privacy": "Privacidad",
    "footer.terms": "Términos",
    "footer.contact": "Contacto",
  },
  en: {
    // Hero
    "hero.badge": "CLINICAL DECISION SUPPORT",
    "hero.title1": "Biomarker-driven",
    "hero.title2": "antidepressant",
    "hero.title3": "treatment",
    "hero.subtitle": "Spectra predicts which antidepressant is most likely to work for each patient, integrating EEG, inflammatory biomarkers, and pharmacogenomics with SHAP explainability.",
    "hero.cta1": "VIEW DEMO",
    "hero.cta2": "HOW IT WORKS",
    
    // Problem
    "problem.title": "The problem",
    "problem.subtitle": "Why do psychiatrists prescribe by trial and error?",
    "problem.card1.title": "High failure rate",
    "problem.card1.desc": "50% of patients with major depression don't respond to the first antidepressant prescribed.",
    "problem.card2.title": "Years of waiting",
    "problem.card2.desc": "Finding the right treatment takes an average of 2-3 years and requires trying 3-4 different drugs.",
    "problem.card3.title": "Lack of biological data",
    "problem.card3.desc": "It's not a lack of options — it's a lack of biological information to choose the right one from the start.",
    "problem.timeline": "Typical journey to response — 2.5 years",
    "problem.start": "Start",
    "problem.now": "Now",
    "problem.remission": "Possible remission",
    "problem.attempt": "ATTEMPT",
    "problem.noResponse": "No response",
    "problem.adverseEffects": "Adverse effects",
    "problem.partialResponse": "Partial response",
    "problem.response": "Response",
    "problem.withSpectra": "WITH SPECTRA",
    "problem.spectraDetail1": "Bupropion prescribed as first line.",
    "problem.spectraDetail2": " The inflammatory profile detected in the initial evaluation indicated high probability of response to this drug.",
    "problem.spectraTime": "Time to response: ~6 weeks instead of 2.5 years.",
    "problem.spectraSummary": "Inflammatory profile detected in initial evaluation → Bupropion prescribed as first line.",
    "problem.clickMore": "Click for more details",
    
    // How it works
    "how.title": "How it works",
    "how.subtitle": "Three data sources, one actionable report",
    "how.step1.title": "Data input",
    "how.step1.desc": "Quantitative EEG, inflammatory panel (IL-6, CRP, TNF-α) and patient's pharmacogenomic test.",
    "how.step2.title": "ML Classification",
    "how.step2.desc": "Model trained on clinical data identifies depression subtype and predicts response to each drug.",
    "how.step3.title": "Explainable report",
    "how.step3.desc": "SHAP report showing which biomarkers contribute to the recommendation, for informed decisions.",
    
    // Subtypes
    "subtypes.title": "Clinical subtypes",
    "subtypes.subtitle": "Not all depression patients are the same",
    "subtypes.inflammatory.title": "Inflammatory Profile",
    "subtypes.inflammatory.tag": "Elevated IL-6",
    "subtypes.inflammatory.desc": "Patients with elevated inflammatory markers. Better response to bupropion and adjunct anti-inflammatory agents.",
    "subtypes.eeg.title": "EEG Responder",
    "subtypes.eeg.tag": "High frontal theta",
    "subtypes.eeg.desc": "Specific patterns of frontal theta activity predict response to SSRIs like escitalopram.",
    "subtypes.metabolizer.title": "Slow Metabolizer",
    "subtypes.metabolizer.tag": "CYP2D6 poor",
    "subtypes.metabolizer.desc": "Genetic variants affecting metabolism. Require dose adjustment or alternative drugs.",
    "subtypes.mixed.title": "Mixed Profile",
    "subtypes.mixed.tag": "Multi-biomarker",
    "subtypes.mixed.desc": "Combination of signals from multiple sources. The model integrates all variables for a personalized recommendation.",
    
    // Comparison
    "comparison.title": "Differentiators",
    "comparison.subtitle": "The only system that integrates all three data sources",
    "comparison.feature": "Feature",
    "comparison.eeg": "EEG Analysis",
    "comparison.inflammatory": "Inflammatory panel",
    "comparison.pharmacogenomics": "Pharmacogenomics",
    "comparison.shap": "SHAP Explainability",
    "comparison.prediction": "Response prediction",
    "comparison.competitor1": "Genetics Only",
    "comparison.competitor2": "Scales Only",
    
    // Explainability
    "explainability.title": "Explainability",
    "explainability.subtitle": "Every recommendation comes with its justification",
    "explainability.selectProfile": "Select patient profile:",
    "explainability.inflammatory": "Inflammatory",
    "explainability.eegResponder": "EEG Responder",
    "explainability.slowMetabolizer": "Slow Metabolizer",
    "explainability.prediction": "Prediction:",
    "explainability.confidence": "confidence",
    "explainability.shapTitle": "SHAP contribution of each feature",
    "explainability.clickBar": "Click any bar to see details",
    "explainability.increases": "increases",
    "explainability.decreases": "decreases",
    "explainability.probability": "response probability",
    
    // Testimonial
    "testimonial.quote": "\"For the first time I can show the patient why I choose one drug over another. Explainability changes the clinical conversation.\"",
    "testimonial.author": "— Psychiatrist, University Hospital",
    "testimonial.disclaimer": "Spectra is a clinical decision support tool. It does not replace medical judgment nor constitute diagnosis.",
    
    // CTA
    "cta.title": "Want to see Spectra in action?",
    "cta.subtitle": "EEG + inflammatory panel + pharmacogenomics. An investment that changes the outcome.",
    "cta.demo": "Request demo access",
    "cta.contact": "Contact team",
    "cta.pilot": "Currently in pilot phase. Request access for your clinic or institution.",
    
    // Footer
    "footer.copyright": "© 2024 Spectra. Clinical decision support tool.",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",
    "footer.contact": "Contact",
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
