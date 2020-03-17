export const convertKelvinToCelsius = (tempKelvin: string) => {
  return parseFloat('' + (parseInt(tempKelvin, 10) - 273.15)).toFixed(2);
};