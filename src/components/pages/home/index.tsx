import {
  CoverageMapSection,
  IntroSection,
  PriceComparisonSection,
  SummarySection,
} from "./ui";

export const HomePage = () => (
  <>
    <IntroSection />
    <CoverageMapSection />
    <PriceComparisonSection className="mt-8" />
    <SummarySection />
  </>
);
