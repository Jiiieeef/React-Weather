import React, { Component } from "react";

import './Weather.css';

import CitySelector from './CitySelector/CitySelector';

class Weather extends Component {
  render() {
    return (
      <div className="Weather">
        <h2>Météo</h2>
        <CitySelector/>
      </div>
    );
  }
}

export default Weather;