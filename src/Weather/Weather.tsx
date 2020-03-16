import React, { Component } from "react";

import './Weather.css';

import CitySelector from './CitySelector/CitySelector';
import { City } from './interfaces';

class Weather extends Component {
  selectedCity?: City;

  onCityChange = (selectedCity: City) => {
    this.selectedCity = selectedCity;
  }

  render() {
    return (
      <div className="Weather">
        <h2>Météo</h2>
        <CitySelector onCityChange={this.onCityChange}/>
      </div>
    );
  }
}

export default Weather;