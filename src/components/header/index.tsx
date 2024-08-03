import { FC } from "react";

import { Navigation } from "components/navigation";
import { styles } from "utils";

export const Header: FC = () => (
  <header className="border h-16 flex justify-center">
    <div
      className={styles(
        "container max-w-[680px] h-full mx-6",
        "flex items-center"
      )}
    >
      <Navigation />
    </div>
  </header>
);
