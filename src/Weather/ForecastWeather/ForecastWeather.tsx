import React from "react";

import { ICity, IForecastWeather } from '../interfaces';
import { DayWeather } from "../DayWeather/DayWeather";

import './ForecastWeather.scss';

interface ForecastWeatherProps {
  currentCity: ICity;
  forecastWeather: any;
}

const ForecastWeather = (props: ForecastWeatherProps) => {
  const renderForecast = () => {
    const curentDay = new Date().getDate();
    return props.forecastWeather
      .filter((forecast: IForecastWeather) => {
        const date = new Date(forecast.date);
        return date.getDate() !== curentDay && date.getHours() === 12;
      })
      .slice(0, 3)
      .map((forecast: IForecastWeather) => {
        return (<DayWeather dayWeather={forecast} key={forecast.dt}/>);
      });
  };

  return (
    <div className="ForecastWeather">
      {renderForecast()}
    </div>
  );
}

export default ForecastWeather;