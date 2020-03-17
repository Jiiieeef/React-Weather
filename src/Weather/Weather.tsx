import React, { Component } from "react";

import './Weather.scss';

import CitySelector from './CitySelector/CitySelector';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import ForecastWeather from './ForecastWeather/ForecastWeather';
import { ICity, ICurrentWeather, IForecastWeather } from './interfaces';

import { getCurrentWeather, getCurrentForecast } from '../services/WeatherService';

interface WeatherProps {
}

interface WeatherState {
  selectedCity?: ICity;
  currentWeather?: ICurrentWeather
  forecastWeather?: IForecastWeather[];
}

class Weather extends Component<WeatherProps, WeatherState> {
  state: WeatherState = {}

  onCityChange = async (selectedCity: ICity) => {
    const currentWeather = await getCurrentWeather(selectedCity);
    const forecastWeather = await getCurrentForecast(selectedCity);

    this.setState({selectedCity, currentWeather, forecastWeather});
  }

  render() {
    let currentWeather, forecastWeather;

    if (this.state.selectedCity) {
      if (this.state.currentWeather) {
        currentWeather = <CurrentWeather currentCity={this.state.selectedCity} currentWeather={this.state.currentWeather} />
      }

      if (this.state.forecastWeather) {
        forecastWeather = <ForecastWeather currentCity={this.state.selectedCity} forecastWeather={this.state.forecastWeather} />
      }
    }

    return (
      <div className="Weather">
        <h2>Weather</h2>
        <CitySelector onCityChange={this.onCityChange}/>
        {currentWeather}
        {forecastWeather}

      </div>
    );
  }
}

export default Weather;