import React, { Component } from "react";

import { Icon } from "../Icon/Icon";
import { ICity, ICurrentWeather } from '../interfaces';
import { convertKelvinToCelsius } from "../../services/converter";

interface CurrentWeatherProps {
  currentCity: ICity;
  currentWeather: ICurrentWeather;
}

interface CurrentWeatherState {
}

class CurrentWeather extends Component<CurrentWeatherProps, CurrentWeatherState> {

  renderWithWeather(weather: ICurrentWeather) {
    return (
      <div className="CurrentWeather">
        {<p>Current city is: {this.props.currentCity.nm}</p>}
        {<p>{convertKelvinToCelsius(weather.infoWeather.temp)}°C</p>}
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