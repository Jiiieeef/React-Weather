import React, { useState } from "react";

import './Weather.scss';

import CitySelector from './CitySelector/CitySelector';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import ForecastWeather from './ForecastWeather/ForecastWeather';
import { ICity, ICurrentWeather, IForecastWeather } from './interfaces';

import { getCurrentWeather, getCurrentForecast } from '../services/WeatherService';

interface WeatherState {
  selectedCity?: ICity;
  currentWeather?: ICurrentWeather
  forecastWeather?: IForecastWeather[];
}

const Weather = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedCity, setSelectedCity] = useState<ICity>();
  const [currentWeather, setCurrentWeather] = useState<ICurrentWeather>();
  const [forecastWeather, setForecastWeather] = useState<IForecastWeather[]>();

  const onCityChange = async (_selectedCity: ICity) => {
    setIsLoading(true);

    const _currentWeather = await getCurrentWeather(_selectedCity);
    const _forecastWeather = await getCurrentForecast(_selectedCity);

    setSelectedCity(_selectedCity);
    setCurrentWeather(_currentWeather);
    setForecastWeather(_forecastWeather);

    setIsLoading(false);
  };

  const renderWeather = () => {
    if (isLoading) {
      return ('Loading...');
    }

    let currentWeatherTpl, forecastWeatherTpl;
    if (selectedCity) {
      if (currentWeather) {
        currentWeatherTpl = <CurrentWeather currentCity={selectedCity} currentWeather={currentWeather} />
      }

      if (forecastWeather) {
        forecastWeatherTpl = <ForecastWeather currentCity={selectedCity} forecastWeather={forecastWeather} />
      }

    }

    return (
      <React.Fragment>
        {currentWeatherTpl}
        {forecastWeatherTpl}
      </React.Fragment>
    );
  };



  return (
    <div className="Weather">
      <h2>Weather</h2>
      <CitySelector onCityChange={onCityChange} />
      {renderWeather()}
    </div>
  );
}

export default Weather;