import React, { Component } from "react";

import './CitySelector.css';
import { City } from '../interfaces';

const cities = require('../../cities-fr.json');

interface CitySelectorProps {
  onCityChange: (selectedCity: City) => void;
}

class CitySelector extends Component<CitySelectorProps> {
  cityOption(city: any) {
    return (<option key={city.id} value={city.id}>{city.nm}</option>);
  }

  citiesSelect = () => {
    return (<select onChange={this.onCityChange} placeholder="Select a city">{cities.map(this.cityOption.bind(this))}</select>);
  }

  onCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.props.onCityChange(cities.find((city: City) => +city.id === +event.target.value));
  }

  render() {
    return (
      <div className="CitySelector">
        {this.citiesSelect()}
      </div>
    );
  }
}

export default CitySelector;