import { FC } from "react";

import { scooterProviders } from "data/scooterProviders";
import { styles } from "utils";

import { Row } from "./ui";

export type PriceComparisonTableProps = {
  className?: string;
};

export const PriceComparisonTable: FC<PriceComparisonTableProps> = ({
  className,
}) => (
  <table
    align="left"
    className={styles(
      "[&_th]:px-4 [&_th]:py-1.5",
      "[&_td]:px-4 [&_td]:py-1.5",
      "[&_td]:border-b [&_th]:border-b",
      className
    )}
  >
    <thead>
      <tr className="[&>th]:text-right">
        <th>{""}</th>
        {scooterProviders.map((scooterProvider) => (
          <th key={scooterProvider.title}>{scooterProvider.title}</th>
        ))}
      </tr>
    </thead>
    <tbody className={styles("[&_tr>th]:text-left", "[&_tr_td]:text-right")}>
      <Row
        label="Розблокування"
        values={scooterProviders.map(
          (scooterProvider) => scooterProvider.unlockPrice
        )}
        highlight="min"
        formatValue={(value) => value + " грн"}
      />
      <Row
        label="Будні"
        values={scooterProviders.map(
          (scooterProvider) => scooterProvider.rideWeekdayPricePerMinute
        )}
        highlight="min"
        formatValue={(value) => value + " грн/хв"}
      />
      <Row
        label="Вихідні"
        values={scooterProviders.map(
          (scooterProvider) => scooterProvider.rideWeekendPricePerMinute
        )}
        highlight="min"
        formatValue={(value) => value + " грн/хв"}
      />
      <Row
        label="Пауза"
        values={scooterProviders.map(
          (scooterProvider) => scooterProvider.pausePricePerMinute
        )}
        highlight="min"
        formatValue={(value) => value + " грн/хв"}
      />
      <Row
        label="Бронювання"
        values={scooterProviders.map((scooterProvider) =>
          scooterProvider.reservationPricePerMinute === undefined &&
          scooterProvider.reservationTimeInMinutes === undefined
            ? undefined
            : scooterProvider.reservationPricePerMinute === null
            ? `${scooterProvider.reservationTimeInMinutes} хв`
            : scooterProvider.reservationPricePerMinute + " грн/хв"
        )}
      />
      <Row
        label="Ліміт на день"
        values={scooterProviders.map(
          (scooterProvider) => scooterProvider.dailyCap
        )}
        formatValue={(value) => (value === null ? "—" : value + " грн")}
      />
      <Row
        label="Максимальна швидкість"
        values={scooterProviders.map(
          (scooterProvider) => scooterProvider.maxSpeedKmPerHour
        )}
        formatValue={(value) => value + " км/г"}
        highlight="max"
      />
    </tbody>
  </table>
);
