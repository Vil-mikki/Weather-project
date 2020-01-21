import { createSelector } from 'reselect';

const getWeatherData = state => state.weatherData;

export const selectWeatherData = createSelector(
    getWeatherData,
    allWeatherData => allWeatherData
);