import { FC } from "react";

import { Header } from "components/header";

import { IntroSection } from "./ui";
import { PriceComparisonSection } from "./ui/PriceComparisonSection";
import { ANCHORS } from "utils";

export const App: FC = () => (
  <>
    <Header />
    <main>
      <IntroSection />
      <div
        id={ANCHORS.coverageMap}
        className="bg-gray-400 h-[512px] flex items-center justify-center"
      >
        *Мапа покриття*
      </div>
      <PriceComparisonSection />
    </main>
    <footer className="flex items-center justify-center h-16 border-t">
      <span>
        Всі дані на сайті актуальні на <b>03.08.2024</b>.
      </span>
    </footer>
  </>
);
