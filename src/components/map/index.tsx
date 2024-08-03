import type { Map as MapType } from "mapbox-gl";
import {
  type ComponentProps,
  forwardRef,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
  type MutableRefObject,
} from "react";
import {
  type MapRef,
  Map as MapboxMap,
  GeolocateControl,
  NavigationControl,
} from "react-map-gl";

import { envs, styles, useBreakpoints } from "utils";

import "mapbox-gl/dist/mapbox-gl.css";

export interface MapProps
  extends Omit<ComponentProps<typeof MapboxMap>, "children"> {
  innerRef?: MutableRefObject<MapRef | null | undefined>;
  className?: string;
  children?: ReactNode | ((map: MapType | null) => ReactNode);
}

export const Map = forwardRef<MapRef, MapProps>(
  ({ innerRef, className, children, onLoad, ...restProps }, reference) => {
    const { isMobile } = useBreakpoints();

    const [map, setMap] = useState<MapType | null>(null);

    const resizeObserver = useMemo(
      () =>
        new ResizeObserver(() => {
          if (map?.getCanvas()) {
            map.resize();
          }
        }),
      [map]
    );

    useEffect(
      () => () => {
        resizeObserver.disconnect();
      },
      [resizeObserver]
    );

    return (
      <div
        ref={(element) => {
          if (element) {
            resizeObserver.observe(element);
          }
        }}
        className={styles("flex h-full w-full flex-col", className)}
      >
        <MapboxMap
          ref={(element) => {
            if (element) {
              setMap(element.getMap());
            }

            if (typeof reference === "function") {
              reference(element);
            } else if (reference) {
              reference.current = element;
            }

            if (innerRef) {
              innerRef.current = element;
            }
          }}
          mapStyle="mapbox://styles/mapbox/light-v11"
          mapboxAccessToken={envs.MAPBOX_API_KEY}
          style={{
            borderRadius: "inherit",
            flexGrow: 1,
          }}
          attributionControl={false}
          onLoad={(event) => {
            (event.target as any).setLanguage("uk");

            onLoad?.(event);
          }}
          touchPitch={false}
          // WARNING: may cause issues.
          reuseMaps
          {...restProps}
        >
          <GeolocateControl position="bottom-right" />
          <NavigationControl
            key={String(isMobile)}
            position="bottom-right"
            showZoom={!isMobile}
          />
          {typeof children === "function" ? children(map) : children}
        </MapboxMap>
      </div>
    );
  }
);

Map.displayName = "Map";

export default Map;
