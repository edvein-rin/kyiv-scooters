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
        Найменші ціні у <b>BikeNow</b> та <b>FlyGo</b>. Тим не менш <b>Bolt</b>,{" "}
        <b>Jet</b> та <b>Zelectra</b> мають не сильно вище ціну: гривня різниці
        при розблокуванні та в межах пів гривні за хвилину на їзду.
        <br />
        <b>Bird</b> єдині хто виділяється: майже в два рази більше ціна за
        проїзд.
      </p>
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
