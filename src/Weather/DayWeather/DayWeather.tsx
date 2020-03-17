import React from 'react';

import { Icon } from '../Icon/Icon';
import { IForecastWeather } from '../interfaces';
import { convertKelvinToCelsius } from '../../services/converter';

import './DayWeather.scss';

interface DayWeatherProps {
  dayWeather: IForecastWeather;
}

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const DayWeather = (props: DayWeatherProps) => {
  const getDay = (date: string) => DAYS[new Date(date).getDay()];

  return (
    <div className="DayWeather">
      <span className="date">{getDay(props.dayWeather.date)}</span>
      <Icon iconName={props.dayWeather.weather.id} />
      <span>{convertKelvinToCelsius(props.dayWeather.infoWeather.temp_min)}°</span>
      <span>{convertKelvinToCelsius(props.dayWeather.infoWeather.temp_max)}°</span>
    </div>
  );
};