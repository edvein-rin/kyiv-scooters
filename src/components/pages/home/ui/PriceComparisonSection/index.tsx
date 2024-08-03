import { FC } from "react";

import { ANCHORS, styles } from "utils";
import { TextBlock, Link } from "components/base";
import { ScooterProviderPriceTable } from "components/entities/scooter-providers";

export type PriceComparisonSectionProps = {
  className?: string;
};

export const PriceComparisonSection: FC<PriceComparisonSectionProps> = ({
  className,
}) => (
  <section className={styles("pb-8", className)} id={ANCHORS.priceComparison}>
    <TextBlock>
      <h1>Ціни</h1>
      <p>
        Деякі дані відсутні (порожні комірки). Якщо маєте актуальну інформацію —
        можете повідомити мене в Telegram{" "}
        <Link
          href="https://t.me/edrickedorty"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          @EdrickEdorty
        </Link>
        .{" "}
      </p>
    </TextBlock>
    <div className="flex items-center justify-center">
      <div className="overflow-auto">
        <ScooterProviderPriceTable className="mx-6" />
      </div>
    </div>
  </section>
);
