import boltGeoJson from "data/coverage/bolt.json";
import jetGeoJson from "data/coverage/jet.json";
import jet2GeoJson from "data/coverage/jet2.json";
import bikeNowGeoJson from "data/coverage/bike-now.json";
import zelectraGeoJson from "data/coverage/zelectra.json";
import flyGoGeoJson from "data/coverage/fly-go.json";
import birdGeoJson from "data/coverage/bird.json";

export type ScooterProvider = {
  id: string;
  title: string;
  androidAppDownloadUrl: string;
  iosAppDownloadUrl: string;
  unlockPrice: number | null | undefined;
  rideWeekdayPricePerMinute: number | null | undefined;
  rideWeekendPricePerMinute: number | null | undefined;
  pausePricePerMinute: number | null | undefined;
  reservationTimeInMinutes: number | null | undefined;
  reservationPricePerMinute: number | null | undefined;
  dailyCap: number | null | undefined;
  maxSpeedKmPerHour: number | undefined;
  coveragePolygons: (typeof boltGeoJson)[];
  brandColor: string;
};

export const scooterProviders: ScooterProvider[] = [
  {
    id: "bolt",
    title: "Bolt",
    androidAppDownloadUrl:
      "https://play.google.com/store/apps/details?id=ee.mtakso.client",
    iosAppDownloadUrl: "https://apps.apple.com/ua/app/bolt-taxify/id675033630",
    unlockPrice: 9,
    rideWeekdayPricePerMinute: 4.1,
    rideWeekendPricePerMinute: 4.1,
    pausePricePerMinute: 4.1,
    reservationTimeInMinutes: 3,
    reservationPricePerMinute: null,
    dailyCap: 490,
    maxSpeedKmPerHour: 20,
    coveragePolygons: [boltGeoJson],
    brandColor: "#35d187",
  },
  {
    id: "jet",
    title: "Jet",
    androidAppDownloadUrl:
      "https://play.google.com/store/apps/details?id=jet.ua.app",
    iosAppDownloadUrl: "https://apps.apple.com/ua/app/jet-ua/id1633318494",
    unlockPrice: 10,
    rideWeekdayPricePerMinute: 4.25,
    pausePricePerMinute: 4.25,
    rideWeekendPricePerMinute: 3.9,
    reservationTimeInMinutes: 5,
    reservationPricePerMinute: null,
    dailyCap: null,
    maxSpeedKmPerHour: 25,
    coveragePolygons: [jetGeoJson, jet2GeoJson],
    brandColor: "#017fe6",
  },
  {
    id: "bike-now",
    title: "BikeNow",
    androidAppDownloadUrl:
      "https://play.google.com/store/apps/details?id=ua.com.bikenow",
    iosAppDownloadUrl: "https://apps.apple.com/ua/app/kolobike/id1519069886",
    unlockPrice: 9,
    rideWeekdayPricePerMinute: 3.5,
    rideWeekendPricePerMinute: 3.5,
    pausePricePerMinute: undefined,
    reservationTimeInMinutes: 10,
    reservationPricePerMinute: null,
    dailyCap: null,
    maxSpeedKmPerHour: 20,
    coveragePolygons: [bikeNowGeoJson],
    brandColor: "#2368a8",
  },
  {
    id: "zelectra",
    title: "Zelectra",
    androidAppDownloadUrl:
      "https://play.google.com/store/apps/details?id=zelectra.app",
    iosAppDownloadUrl: "https://apps.apple.com/ua/app/zelectra/id1545583319",
    unlockPrice: 9,
    rideWeekdayPricePerMinute: 4.25,
    rideWeekendPricePerMinute: 4.25,
    pausePricePerMinute: 4.25,
    reservationTimeInMinutes: 5,
    reservationPricePerMinute: null,
    dailyCap: 499,
    maxSpeedKmPerHour: undefined,
    coveragePolygons: [zelectraGeoJson],
    brandColor: "#56fade",
  },
  {
    id: "fly-go",
    title: "FlyGo",
    androidAppDownloadUrl:
      "https://play.google.com/store/apps/details?id=com.zapi.flygo",
    iosAppDownloadUrl: "https://apps.apple.com/ua/app/flygo/id6443449862",
    unlockPrice: 9,
    rideWeekdayPricePerMinute: 3.5,
    rideWeekendPricePerMinute: 3.5,
    pausePricePerMinute: 1,
    reservationTimeInMinutes: null,
    reservationPricePerMinute: 1,
    dailyCap: null,
    maxSpeedKmPerHour: undefined,
    coveragePolygons: [flyGoGeoJson],
    brandColor: "#fed000",
  },
  {
    id: "bird",
    title: "Bird",
    androidAppDownloadUrl:
      "https://play.google.com/store/apps/details?id=co.bird.android",
    iosAppDownloadUrl:
      "https://apps.apple.com/ua/app/bird-be-free-enjoy-the-ride/id1260842311",
    unlockPrice: 10,
    rideWeekdayPricePerMinute: 7,
    rideWeekendPricePerMinute: 7,
    pausePricePerMinute: undefined,
    reservationTimeInMinutes: undefined,
    reservationPricePerMinute: undefined,
    dailyCap: null,
    maxSpeedKmPerHour: undefined,
    coveragePolygons: [birdGeoJson],
    brandColor: "#2ccef1",
  },
];
