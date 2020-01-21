import { call, put, takeEvery } from 'redux-saga/effects';

import { baseUrl, APIKey } from '../constants/api';
import { successTemperature, failureTemperature } from '../actions/temperature/temperatureAC';
import temperatureAT from '../actions/temperature/temperatureAT';

const axios = require('axios');

const fetchWeather = async city => {
    const weather = await axios.get(`${baseUrl}/data/2.5/weather?q=${city}&APPID=${APIKey}`);
    return weather;
}

function* fetchWeatherData(action) {
    try{
        const weather = yield call(fetchWeather, action.city)
        yield put(successTemperature(weather));
    } catch(error) {
        yield put(failureTemperature(error));
    }
}

function* rootSaga() {
    yield takeEvery(temperatureAT.FETCH_TEMPERATURE, fetchWeatherData);
}

export default rootSaga;