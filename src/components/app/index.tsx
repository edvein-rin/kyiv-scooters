import { FC } from "react";

import { Header } from "components/header";
import { Footer } from "components/footer";

import { IntroSection } from "./ui";
import { PriceComparisonSection } from "./ui/PriceComparisonSection";
import { CoverageMapSection } from "./ui/CoverageMapSection";

export const App: FC = () => (
  <>
    <Header />
    <main>
      <IntroSection />
      <CoverageMapSection />
      <PriceComparisonSection />
    </main>
    <Footer />
  </>
);
