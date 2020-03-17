import React, { Component } from "react";

import { Icon } from "../Icon/Icon";
import { ICity, IForecastWeather } from '../interfaces';
import { convertKelvinToCelsius } from "../../services/converter";

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
    return this.props.forecastWeather.slice(0, 3).map((forecast: IForecastWeather) => {
      return (
        <div key={forecast.dt}>
          <p>{forecast.date}</p>
          <Icon iconName={forecast.weather.id} />
          <div>{convertKelvinToCelsius(forecast.infoWeather.temp_min)}</div>
          <div>{convertKelvinToCelsius(forecast.infoWeather.temp_max)}</div>
        </div>
      );
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