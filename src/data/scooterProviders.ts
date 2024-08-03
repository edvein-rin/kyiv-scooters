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
  },
];
