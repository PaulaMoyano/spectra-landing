import { Hero } from "@/components/hero"
import { ProblemSection } from "@/components/problem-section"
import { HowItWorks } from "@/components/how-it-works"
import { SubtypesSection } from "@/components/subtypes-section"
import { ComparisonSection } from "@/components/comparison-section"
import { ExplainabilitySection } from "@/components/explainability-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <SubtypesSection />
      <ComparisonSection />
      <ExplainabilitySection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </main>
  )
}
