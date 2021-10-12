export const getFahrenheit = (kalvin) => Math.round(1.8 * (kalvin - 273) + 32);
export const getCelsius = (kalvin) => Math.round(kalvin - 273.15);
export const getMilesPerHour = (metrePerSec) => Math.round(metrePerSec * 2.23693629);