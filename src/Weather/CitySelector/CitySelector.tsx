import React, { Component } from "react";

import './CitySelector.css';
import { ICity } from '../interfaces';

const cities = require('../../cities-fr.json');

interface CitySelectorProps {
  onCityChange: (selectedCity: ICity) => void;
}

class CitySelector extends Component<CitySelectorProps> {
  state = {
    selectedCityId: '0'
  }

  cityOption(city: ICity) {
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
    this.props.onCityChange(cities.find((city: ICity) => +city.id === +event.target.value));
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