import React, { Component } from "react";
import { City } from '../interfaces';

interface CurrentWeatherProps {
  currentCity?: City;
}

interface CurrentWeatherState {
  currentCity?: City;
}

class CurrentWeather extends Component<CurrentWeatherProps, CurrentWeatherState> {
  state: CurrentWeatherState = {}

  componentDidUpdate(previousProps: CurrentWeatherProps) {
    if (previousProps.currentCity !== this.props.currentCity) {
      console.log('Current city has change.');
    }
  }

  render() {
    const paragraph = this.props.currentCity
      ? <p>Current city is: {this.props?.currentCity?.nm}</p>
      : <p>Select a city!</p>;

    return (
      paragraph
    );
  }
}

export default CurrentWeather;