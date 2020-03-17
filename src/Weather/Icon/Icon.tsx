import React from 'react';

import '../../css/weathericons.css';

interface IconProps {
  iconName: number;
}

export const Icon = (props: IconProps) => {
  return (
    <i className={`wi wi-icon-${props.iconName}`}></i>
  );
};