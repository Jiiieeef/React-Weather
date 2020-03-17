import React, { Component } from "react";

import { Icon } from "../Icon/Icon";
import { ICity, ICurrentWeather } from '../interfaces';

interface CurrentWeatherProps {
  currentCity: ICity;
  currentWeather: ICurrentWeather;
}

interface CurrentWeatherState {
}

class CurrentWeather extends Component<CurrentWeatherProps, CurrentWeatherState> {

  convertKelvinToCelsius(tempKelvin: string) {
    return parseFloat('' + (parseInt(tempKelvin, 10) - 273.15)).toFixed(2);
  }

  renderWithWeather(weather: ICurrentWeather) {
    return (
      <div className="CurrentWeather">
        {<p>Current city is: {this.props.currentCity.nm}</p>}
        {<p>{this.convertKelvinToCelsius(weather.infoWeather.temp)}°C</p>}
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