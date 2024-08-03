import { FC, useState } from "react";
import { Source, Layer } from "react-map-gl";

import { scooterProviders } from "data/scooterProviders";
import { Map } from "components/base";

const KYIV_COORDINATES = {
  latitude: 50.450001,
  longitude: 30.523333,
};

export const ScooterProviderCoverageMap: FC = () => {
  const [providersVisibility, setProvidersVisibility] = useState<{
    [providerId: string]: boolean;
  }>(
    Object.fromEntries(
      scooterProviders.map((scooterProvider) => [scooterProvider.id, true])
    )
  );

  return (
    <div>
      <div className="h-[512px]">
        <Map
          initialViewState={{
            ...KYIV_COORDINATES,
            zoom: 10,
          }}
          scrollZoom={false}
        >
          {scooterProviders.flatMap((scooterProvider) =>
            scooterProvider.coveragePolygons.map((coveragePolygon, index) => {
              if (!providersVisibility[scooterProvider.id]) return null;

              const id = scooterProvider.id + "_" + index;
              return (
                <Source key={id} id={id} type="geojson" data={coveragePolygon}>
                  <Layer
                    type="fill"
                    paint={{
                      "fill-color": scooterProvider.brandColor,
                      "fill-opacity": 0.5,
                    }}
                  />
                  <Layer
                    type="line"
                    paint={{
                      "line-color": "#2f313f",
                      "line-width": 1,
                    }}
                  />
                </Source>
              );
            })
          )}
        </Map>
      </div>
      <fieldset className="flex items-center justify-center gap-2 mt-4 px-2 flex-wrap">
        {scooterProviders.flatMap((scooterProvider) => {
          const handleChange = () => {
            setProvidersVisibility((oldProvidersVisibility) => ({
              ...oldProvidersVisibility,
              [scooterProvider.id]: !oldProvidersVisibility[scooterProvider.id],
            }));
          };

          return (
            <label
              key={scooterProvider.id}
              className="flex gap-2 justify-center items-center p-2 hover:cursor-pointer select-none"
            >
              <input
                type="checkbox"
                name={scooterProvider.id}
                className="hover:cursor-pointer"
                checked={providersVisibility[scooterProvider.id]}
                onChange={handleChange}
              />
              <span
                className="leading-none pb-0.5 font-bold"
                style={{ color: scooterProvider.brandColor }}
              >
                {scooterProvider.title}
              </span>
            </label>
          );
        })}
      </fieldset>
    </div>
  );
};
