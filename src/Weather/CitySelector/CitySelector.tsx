import React, { Component } from "react";

import './CitySelector.css';
import { City } from '../interfaces';

const cities = require('../../cities-fr.json');

interface CitySelectorProps {
  onCityChange: (selectedCity: City) => void;
}

class CitySelector extends Component<CitySelectorProps> {
  state = {
    selectedCityId: '0'
  }

  cityOption(city: any) {
    return (<option key={city.id} value={city.id}>{city.nm}</option>);
  }

  citiesSelect = () => {
    return (
      <select onChange={this.onCityChange} value={this.state.selectedCityId}>
        <option value='0' disabled>Select a city</option>
        {cities.map(this.cityOption.bind(this))}
      </select>
      );
  }

  onCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({selectedCityId: event.target.value});
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