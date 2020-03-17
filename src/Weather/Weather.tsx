import React, { Component } from "react";

import './Weather.css';

import CitySelector from './CitySelector/CitySelector';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import { ICity } from './interfaces';

interface WeatherProps {
}

interface WeatherState {
  selectedCity?: ICity;
}

class Weather extends Component<WeatherProps, WeatherState> {
  state: WeatherState = {}

  onCityChange = (selectedCity: ICity) => {
    this.setState({selectedCity});
  }

  render() {
    return (
      <div className="Weather">
        <h2>Météo</h2>
        <CitySelector onCityChange={this.onCityChange}/>
        <CurrentWeather currentCity={this.state.selectedCity} />

      </div>
    );
  }
}

export default Weather;