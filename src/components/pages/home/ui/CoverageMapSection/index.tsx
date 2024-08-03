import { FC } from "react";

import { ANCHORS } from "utils";

import { TextBlock } from "components/base";
import {
  ScooterProviderCoverageMap,
  ScooterProviderCoverageTable,
} from "components/entities/scooter-providers";

export const CoverageMapSection: FC = () => (
  <section id={ANCHORS.coverageMap}>
    <ScooterProviderCoverageMap />
    <TextBlock>
      <h1>Покриття</h1>
      <p>
        <b>Bolt</b> має найбільше покриття. Інші провайдери розташовані в його
        межах з виключенням у вигляді <b>Jet</b>, що додатково покриває
        Троєщину, а також <b>FlyGo</b> який покриває Караваєві Дачі, Кадетский
        гай та Першотравневий масив.
      </p>
      <p>
        Майже всі провайдери працюють на обох берегах Києва, лише <b>FlyGo</b>{" "}
        та <b>Bird</b> працюють тільки на правому березі.
      </p>
    </TextBlock>
    <div className="flex items-center justify-center">
      <div className="overflow-auto">
        <ScooterProviderCoverageTable className="mx-6" />
      </div>
    </div>
  </section>
);
