import React from 'react';

import { Icon } from '../Icon/Icon';
import { IForecastWeather } from '../interfaces';
import { convertKelvinToCelsius } from '../../services/converter';

interface DayWeatherProps {
  dayWeather: IForecastWeather;
}

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const DayWeather = (props: DayWeatherProps) => {
  const getDay = (date: string) => DAYS[new Date(date).getDay()];

  return (
    <div className="DayWeather">
      <p>{getDay(props.dayWeather.date)}</p>
      <Icon iconName={props.dayWeather.weather.id} />
      <div>{convertKelvinToCelsius(props.dayWeather.infoWeather.temp_min)}°</div>
      <div>{convertKelvinToCelsius(props.dayWeather.infoWeather.temp_max)}°</div>
    </div>
  );
};