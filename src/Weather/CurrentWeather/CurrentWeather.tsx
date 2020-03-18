import React from "react";

import { Icon } from "../Icon/Icon";
import { ICity, ICurrentWeather } from '../interfaces';
import { convertKelvinToCelsius } from "../../services/converter";

import './CurrentWeather.scss';

interface CurrentWeatherProps {
  currentCity: ICity;
  currentWeather: ICurrentWeather;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = (props: CurrentWeatherProps) => {

  const renderWithWeather = (weather: ICurrentWeather) => {
    return (
      <div className="weather">
        {<span className="city-name">{props.currentCity.nm}</span>}
        {<span className="temperature">{convertKelvinToCelsius(weather.infoWeather.temp)}°C</span>}
        {<Icon iconName={weather.weather.id} />}
      </div>
    );
  };

  return (
    <div className="CurrentWeather">
      {renderWithWeather(props.currentWeather)}
    </div>
  );
}

export default CurrentWeather;