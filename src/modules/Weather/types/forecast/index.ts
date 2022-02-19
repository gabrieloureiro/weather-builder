type ForecastCoordType = {
  lat: number;
  lon: number;
};

type ForecastCityType = {
  coord: ForecastCoordType;
  country: string;
  id: number;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
};

type ForecastCloudsType = {
  all: number;
};

type ForecastRainType = {
  "3h": number;
};

type ForecastSysType = {
  pod: string;
};

type ForecastMainType = {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_kf: number;
  temp_max: number;
  temp_min: number;
};

type ForecastWeatherType = {
  description: string;
  icon: string;
  id: number;
  main: string;
};

type ForecastWindType = {
  deg: number;
  speed: number;
  gust: number;
};

type ForecastListType = {
  clouds: ForecastCloudsType;
  dt: number;
  dt_txt: string;
  main: ForecastMainType;
  pop: number;
  rain: ForecastRainType;
  sys: ForecastSysType;
  visibility: number;
  weather: ForecastWeatherType[];
  wind: ForecastWindType;
};

export type ForecastQueryResponse = {
  city: ForecastCityType;
  cnt: number;
  cod: string;
  list: ForecastListType[];
  message: number;
};
