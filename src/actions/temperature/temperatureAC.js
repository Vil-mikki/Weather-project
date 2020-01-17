import temperatureAT from './temperatureAT';
import { baseUrl, APIKey } from '../../constants/api';

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

const successTemperature = temperature => ({
    type: FETCH_TEMPERATURE_SUCCESS,
    isLoading: false,
    isError: false,
    temperature
});

const failureTemperature = error => ({
    type: FETCH_TEMPERATURE_FAILURE,
    isLoading: false,
    isError: true,
    error
});

export const fetchTemperature = city => async dispatch => {
    dispatch(requestTemperature());
    try {
        const temperature = await axios.get(`${baseUrl}/data/2.5/weather?q=${city}&APPID=${APIKey}`);
        dispatch(successTemperature(temperature.data.main.temp));
    } catch (error) {
        dispatch(failureTemperature(error));
    }
}