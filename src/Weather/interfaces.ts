export interface ICity {
  id: string;
  nm: string;
  lat: number;
  lon: number;
}

export interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IInfoWeather {
  temp: string;
  pressure: string;
  humidity: string;
  temp_min: string;
  temp_max: string;
  sea_level: string;
  grnd_level: string;
}

export interface ICurrentWeather {
  name: string;
  weather: IWeather[];
  infoWeather: IInfoWeather;
}