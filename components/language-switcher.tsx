"use client"

import { useLanguage } from "@/contexts/language-context"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-1 bg-secondary/90 backdrop-blur-sm border border-accent/30 rounded-full p-1">
      <button
        onClick={() => setLanguage("es")}
        className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
          language === "es"
            ? "bg-primary text-primary-foreground"
            : "text-accent hover:text-secondary-foreground"
        }`}
      >
        ES
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
          language === "en"
            ? "bg-primary text-primary-foreground"
            : "text-accent hover:text-secondary-foreground"
        }`}
      >
        EN
      </button>
    </div>
  )
}
