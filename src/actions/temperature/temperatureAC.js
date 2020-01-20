import temperatureAT from './temperatureAT';
import { baseUrl, APIKey } from '../../constants/api';
import { convertKelvinToCelsium } from '../../util/convertKelvinToCelsius';

const axios = require('axios');

const {
    FETCH_TEMPERATURE_REQUEST,
    FETCH_TEMPERATURE_SUCCESS,
    FETCH_TEMPERATURE_FAILURE
} = temperatureAT;

const requestTemperature = () => ({
    type: FETCH_TEMPERATURE_REQUEST,
    isLoading: true,
    isError: false
});

const successTemperature = weather => {
    weather = weather.data;
    
    const weatherData = {
        name: weather.name,
        description: weather.weather[0].description,
        temperature: convertKelvinToCelsium(weather.main.temp),
        feels_like: convertKelvinToCelsium(weather.main.feels_like),
        wind: weather.wind.speed,
        humidity: weather.main.humidity,
        pressure: weather.main.pressure
    };

    return ({
        type: FETCH_TEMPERATURE_SUCCESS,
        isLoading: false,
        isError: false,
        weatherData
    })
};

const failureTemperature = error => ({
    type: FETCH_TEMPERATURE_FAILURE,
    isLoading: false,
    isError: true,
    error
});

export const fetchWeather = city => async dispatch => {
    dispatch(requestTemperature());
    try {
        const weather = await axios.get(`${baseUrl}/data/2.5/weather?q=${city}&APPID=${APIKey}`);
        dispatch(successTemperature(weather));
    } catch (error) {
        dispatch(failureTemperature(error));
    }
}