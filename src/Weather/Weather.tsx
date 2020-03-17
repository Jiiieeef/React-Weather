import React, { Component } from "react";

import './Weather.css';

import CitySelector from './CitySelector/CitySelector';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import { ICity, ICurrentWeather } from './interfaces';
import { getCurrentWeather } from '../services/WeatherService';

interface WeatherProps {
}

interface WeatherState {
  selectedCity?: ICity;
  currentWeather?: ICurrentWeather
}

class Weather extends Component<WeatherProps, WeatherState> {
  state: WeatherState = {}

  onCityChange = async (selectedCity: ICity) => {
    const currentWeather = await getCurrentWeather(selectedCity);

    this.setState({selectedCity, currentWeather});
  }

  render() {
    let currentWeather;

    if (this.state.selectedCity && this.state.currentWeather) {
      currentWeather = <CurrentWeather currentCity={this.state.selectedCity} currentWeather={this.state.currentWeather} />
    }

    return (
      <div className="Weather">
        <h2>Météo</h2>
        <CitySelector onCityChange={this.onCityChange}/>
        {currentWeather}

      </div>
    );
  }
}

export default Weather;