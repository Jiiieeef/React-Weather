import React, { useState } from "react";

import './CitySelector.scss';
import { ICity } from '../interfaces';

const cities = require('../../cities-fr.json');

interface CitySelectorProps {
  onCityChange: (selectedCity: ICity) => void;
}

const CitySelector = (props: CitySelectorProps) => {
  const [selectedCityId, setSelectedCityId] = useState<string>('0');

  const cityOption = (city: ICity) => {
    return (<option key={city.id} value={city.id}>{city.nm}</option>);
  }

  const citiesSelect = () => {
    return (
      <select onChange={onCityChange} value={selectedCityId}>
        <option value='0' disabled>Select a city</option>
        {cities.map(cityOption)}
      </select>
      );
  }

  const onCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCityId(event.target.value);
    props.onCityChange(cities.find((city: ICity) => +city.id === +event.target.value));
  }

  return (
    <div className="CitySelector">
      {citiesSelect()}
    </div>
  );
}

export default CitySelector;