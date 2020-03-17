import React, { Component } from "react";

import { ICity } from '../interfaces';
import { getCurrentWeather } from '../../services/WeatherService';
import { ICurrentWeather } from '../interfaces';
import { Icon } from "../Icon/Icon";

interface CurrentWeatherProps {
  currentCity?: ICity;
}

interface CurrentWeatherState {
  currentCity?: ICity;
  weather?: ICurrentWeather;
}

class CurrentWeather extends Component<CurrentWeatherProps, CurrentWeatherState> {
  state: CurrentWeatherState = {}

  async componentDidUpdate(previousProps: CurrentWeatherProps) {
    if (previousProps.currentCity !== this.props.currentCity && this.props.currentCity) {
      const response = await getCurrentWeather(this.props.currentCity);

      this.setState({weather: response});
    }
  }

  convertKelvinToCelsius(tempKelvin: string) {
    return parseFloat('' + (parseInt(tempKelvin, 10) - 273.15)).toFixed(2);
  }

  renderNoCity() {
    return <p>Select a city!</p>;
  }

  renderWithWeather(weather: ICurrentWeather) {
    return (
      <div className="CurrentWeather">
        {<p>Current city is: {this.props?.currentCity?.nm}</p>}
        {<p>{this.convertKelvinToCelsius(weather.infoWeather.temp)}°C</p>}
        {<Icon iconName={weather.weather.id} />}
      </div>
    );
  }

  render() {
    const content = this.state.weather ? this.renderWithWeather(this.state.weather) : this.renderNoCity();

    return (
      <div className="CurrentWeather">
        {content}
      </div>
    );
  }
}

export default CurrentWeather;