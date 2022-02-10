type WeatherMainType = {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
};

type WeatherSysType = {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;
};

type WeatherType = {
  description: string;
  icon: string;
  id: number;
  main: string;
};

export type WeatherQueryParams = {
  lat: number;
  lon: number;
  units?: string;
};

export type WeatherQueryResponse = {
  base: string;
  clouds: { all: number };
  cod: number;
  coord: { lat: number; lon: number };
  dt: number;
  id: number;
  main: WeatherMainType;
  name: string;
  sys: WeatherSysType;
  timezone: number;
  visibility: number;
  weather: WeatherType[];
  wind: { speed: number; deg: number };
};
