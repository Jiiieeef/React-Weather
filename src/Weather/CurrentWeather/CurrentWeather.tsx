import React, { Component } from "react";

import { ICity } from '../interfaces';
import { getCurrentWeather } from '../../services/WeatherService';
import { ICurrentWeather } from '../interfaces';

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

  render() {
    const paragraph = this.props.currentCity
      ? <p>Current city is: {this.props?.currentCity?.nm}</p>
      : <p>Select a city!</p>;

    let temperature;
    if (this.state.weather) {
      temperature = <p>{this.convertKelvinToCelsius(this.state.weather.infoWeather.temp)}°C</p>;
    }

    return (
      <div className="CurrentWeather">
        {paragraph}
        {temperature}
      </div>
    );
  }
}

export default CurrentWeather;