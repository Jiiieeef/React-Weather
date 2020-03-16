import React, { Component } from "react";

import './CitySelector.css';

const cities = require('../../cities-fr.json');

class CitySelector extends Component {
  cityOption(city: any) {
    return (<option key={city.id} value={city.id}>{city.nm}</option>);
  }

  citiesSelect = () => {
    return (<select onChange={this.onCityChange} placeholder="Select a city">{cities.map(this.cityOption.bind(this))}</select>);
  }

  onCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
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