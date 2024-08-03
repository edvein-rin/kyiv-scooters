import { type FC } from "react";
import geojsonArea from "@mapbox/geojson-area";

import { styles } from "utils";
import { Row } from "components/base";
import { scooterProviders } from "data/scooterProviders";

const KYIV_AREA = 835_580_000;

export type ScooterProviderCoverageTableProps = {
  className?: string;
};

export const ScooterProviderCoverageTable: FC<
  ScooterProviderCoverageTableProps
> = ({ className }) => (
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
        label="Площа"
        values={scooterProviders.map((scooterProvider) =>
          scooterProvider.coveragePolygons
            .map((polygon) =>
              geojsonArea.geometry(polygon.features[0].geometry as any)
            )
            .reduce((oldSum, value) => oldSum + value, 0)
        )}
        highlight="max"
        formatValue={(value) => {
          const formatter = new Intl.NumberFormat("uk-UA", {
            maximumFractionDigits: 0,
            notation: "compact",
          });
          if (!value) return null;
          if (typeof value === "string") return value;

          return (
            <>
              {formatter.format(value / 1_000_000)} км<sup>2</sup>
            </>
          );
        }}
      />
      <Row
        label="Частина Києва"
        values={scooterProviders.map((scooterProvider) =>
          scooterProvider.coveragePolygons
            .map((polygon) =>
              geojsonArea.geometry(polygon.features[0].geometry as any)
            )
            .reduce((oldSum, value) => oldSum + value, 0)
        )}
        highlight="max"
        formatValue={(value) => {
          if (!value) return null;
          if (typeof value === "string") return value;

          return <>{((value / KYIV_AREA) * 100).toFixed(2)}%</>;
        }}
      />
    </tbody>
  </table>
);
