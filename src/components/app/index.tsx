import { FC } from "react";

import { HomePage } from "components/pages/home";

import { Footer, Header } from "./ui";

export const App: FC = () => (
  <>
    <Header />
    <main>
      <HomePage />
    </main>
    <Footer />
  </>
);
