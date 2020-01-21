import temperatureAT from './temperatureAT';
import { baseUrl, APIKey } from '../../constants/api';
import { convertKelvinToCelsius } from '../../util/convertKelvinToCelsius';

const axios = require('axios');

const {
    FETCH_TEMPERATURE,
    FETCH_TEMPERATURE_REQUEST,
    FETCH_TEMPERATURE_SUCCESS,
    FETCH_TEMPERATURE_FAILURE
} = temperatureAT;

export const fetchTemperature = city => ({
    type: FETCH_TEMPERATURE,
    city
})

export const requestTemperature = () => ({
    type: FETCH_TEMPERATURE_REQUEST,
    isLoading: true,
    isError: false
});

export const successTemperature = weather => {
    weather = weather.data;
    
    const weatherData = {
        name: weather.name,
        description: weather.weather[0].description,
        temperature: convertKelvinToCelsius(weather.main.temp),
        feels_like: convertKelvinToCelsius(weather.main.feels_like),
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

export const failureTemperature = error => ({
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