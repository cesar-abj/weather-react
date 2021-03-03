export interface ICurrent {
  cloud: number,
  condition: {
    text: string, 
    icon: string
  },
  feelsLikeC: number,
  gustMph: number,
  humidity: number,
  precipMm: number,
  pressureMb: number,
  tempC: number,
  uv: number,
  visKm: number,
  windDegree: number,
  windDir: string,
  windKph: number,
};

export interface ILocation {
  name: string;
  region: string;
  country: string;
  lat: number;
  long: number;
  localTimeEpoch: string;
  localTime: string;
};

export interface IDay {
  avgHumidity: number,
  avgTempC:number,
  avgVisKm: number,
  condition: {
    code: number,
    icon: string,
    text: string,
  },
  dailyChanceOfRain: string,
  dailyChanceOfSnow: string,
  dailyWillItRain: number,
  dailyWillItSnow: number,
  date: string,
  maxTempC: number,
  maxWindMph: number,
  minTempC: number,
  totalPrecipMm: number,
  uv: number,
};

export interface IHour {
  chanceOfRain: string,
  chanceOfSnow: string,
  cloud: number,
  condition: {
    code: number,
    icon: string,
    text: string,
  },
  dewPointC: number,
  feelsLikeC: number,
  gustMph: number,
  heatIndexC: number,
  humidity: number,
  isDay: number,
  precipMm: number,
  pressureMb: number,
  tempC: number,
  time: string,
  visKm: number,
  willItRain: number,
  willItSnow: number,
  windDegree: number,
  windDir: string,
  windMph: number,
  windChillC: number,
};

export interface IAstro {
  moonIllumination: string,
  moonPhase: string,
  sunrise: string,
  sunset: string,
};

export interface IForecast {
  astro: IAstro,
  date: string,
  day: IDay,
  hour: IHour,
  current: ICurrent,
  location: ILocation
}
