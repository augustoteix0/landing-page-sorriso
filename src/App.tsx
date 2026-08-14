import { CallToActionSection } from "./page/CallToActionSection";
import { PricingSection } from "./page/PricingSection";
import { GuaranteeSection } from "./page/GuaranteeSection";
import { FAQSection } from "./page/FaqSection";
import { HeroSection } from "./page/HeroSection";
import { ProblemSection } from "./page/ProblemSection";
import { TransformationSection } from "./page/TransformationSection";
import { ShowcaseSection } from "./page/ShowcaseSection";
import { PillarsSection } from "./page/PillarsSection";

export function App() {

  return (
    <div className="w-full overflow-hidden bg-[#09090B] text-white">
      <HeroSection/>
      <ProblemSection/>
      <PillarsSection />
      <TransformationSection />
      <ShowcaseSection />
      <PricingSection />
      <GuaranteeSection />
      <FAQSection/>
      <CallToActionSection />
    </div>
  )
}

