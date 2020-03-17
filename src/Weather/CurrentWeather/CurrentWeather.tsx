import React, { Component } from "react";

import { Icon } from "../Icon/Icon";
import { ICity, ICurrentWeather } from '../interfaces';
import { convertKelvinToCelsius } from "../../services/converter";

import './CurrentWeather.scss';

interface CurrentWeatherProps {
  currentCity: ICity;
  currentWeather: ICurrentWeather;
}

interface CurrentWeatherState {
}

class CurrentWeather extends Component<CurrentWeatherProps, CurrentWeatherState> {

  renderWithWeather(weather: ICurrentWeather) {
    return (
      <div className="weather">
        {<span className="city-name">{this.props.currentCity.nm}</span>}
        {<span className="temperature">{convertKelvinToCelsius(weather.infoWeather.temp)}°C</span>}
        {<Icon iconName={weather.weather.id} />}
      </div>
    );
  }

  render() {
    return (
      <div className="CurrentWeather">
        {this.renderWithWeather(this.props.currentWeather)}
      </div>
    );
  }
}

export default CurrentWeather;