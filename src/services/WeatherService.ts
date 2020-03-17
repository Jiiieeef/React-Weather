import { APPID, baseUrl } from '../config';
import { ICity, ICurrentWeather } from '../Weather/interfaces';

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

