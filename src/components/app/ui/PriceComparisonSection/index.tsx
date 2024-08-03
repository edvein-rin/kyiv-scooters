import { FC } from "react";

import { ANCHORS } from "utils";
import { TextSection } from "components/text-section";
import { PriceComparisonTable } from "components/price-comparison-table";
import { Link } from "components/link";

export const PriceComparisonSection: FC = () => (
  <div className="pb-8">
    <TextSection id={ANCHORS.priceComparison}>
      <h1>Порівняння цін</h1>
      <p>
        Деякі дані відсутні (порожні комірки). Якщо маєте актуальну інформацію — можете повідомити
        мене в Telegram{" "}
        <Link
          href="https://t.me/edrickedorty"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          @EdrickEdorty
        </Link>
        .{" "}
      </p>
    </TextSection>
    <div className="flex items-center justify-center">
      <div className="overflow-auto">
        <PriceComparisonTable className="mx-6" />
      </div>
    </div>
  </div>
);
