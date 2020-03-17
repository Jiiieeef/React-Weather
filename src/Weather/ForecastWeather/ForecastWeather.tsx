import React, { Component } from "react";

import { ICity, IForecastWeather } from '../interfaces';
import { DayWeather } from "../DayWeather/DayWeather";

import './ForecastWeather.scss';

interface ForecastWeatherProps {
  currentCity: ICity;
  forecastWeather: any;
}

interface ForecastWeatherState {
}

class ForecastWeather extends Component<ForecastWeatherProps, ForecastWeatherState> {
  state: ForecastWeatherState = {}

  renderForecast() {
    const curentDay = new Date().getDate();
    return this.props.forecastWeather
      .filter((forecast: IForecastWeather) => {
        const date = new Date(forecast.date);
        return date.getDate() !== curentDay && date.getHours() === 12;
      })
      .slice(0, 3)
      .map((forecast: IForecastWeather) => {
        return (<DayWeather dayWeather={forecast} key={forecast.dt}/>);
      });
  }

  render() {
    return (
      <div className="ForecastWeather">
        {this.renderForecast()}
      </div>
    );
  }
}

export default ForecastWeather;