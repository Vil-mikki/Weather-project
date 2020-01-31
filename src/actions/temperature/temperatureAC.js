import temperatureAT from './temperatureAT';
import { getWeather } from '../../constants/api';
import { convertKelvinToCelsius } from '../../util/convertKelvinToCelsius';

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

    const { temp, feels_like, humidity, pressure } = weather.main;
    
    const weatherData = {
        name: weather.name,
        description: weather.weather[0].description,
        temperature: convertKelvinToCelsius(temp),
        feels_like: convertKelvinToCelsius(feels_like),
        wind: weather.wind.speed,
        humidity,
        pressure
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
        const weather = await getWeather(city);
        dispatch(successTemperature(weather.data));
    } catch (error) {
        dispatch(failureTemperature(error));
    }
}