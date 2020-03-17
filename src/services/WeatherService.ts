import { APPID, baseUrl } from '../config';
import { ICity, ICurrentWeather, IForecastWeather } from '../Weather/interfaces';

const _fetch = async (url: string): Promise<any> => {
  const response = await fetch(url);
  return await response.json();
};

export const getCurrentWeather = async (city: ICity): Promise<ICurrentWeather> => {
  const response = await _fetch(`${baseUrl}/weather?id=${city.id}&APPID=${APPID}`);

  return {
    name: response.name,
    weather: response.weather[0],
    infoWeather: response.main
  } as ICurrentWeather;
};

export const getCurrentForecast = async (city: ICity): Promise<IForecastWeather[]> => {
  const response = await _fetch(`${baseUrl}/forecast?id=${city.id}&APPID=${APPID}`);

  return response.list.map((list: any) => ({
    dt: list.dt,
    weather: list.weather[0],
    infoWeather: list.main,
    date: list.dt_txt
  }) as IForecastWeather);
};
