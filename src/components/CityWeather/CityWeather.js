import React from 'react';
import { format } from 'date-fns';

import './CityWeather.scss';

function CityWeather(props) {
    
    const weather = props.weather;

    const getCurrentTime = () => {
        return format(new Date(), 'kk:mm MMM d');
    }

    return(
        <div className='weather-card'>
            <div className='weather-card__header'>
                <h2 className='weather-card__header-cityName'>
                    {props.city}
                </h2>
                <p className='weather-card__header-description'>
                    {weather.description}
                </p>
            </div>
            <div className='weather-card__temperature'>
                <h1 className='weather-card__temperature-temp'>{weather.temperature}°C</h1>
            </div>
            <div className='weather-card__details'>
                <h3 className='weather-card__details-title'>
                    Details
                </h3>
                <p className='weather-card__details-description'>
                    Feels like
                    <span className='weather-card__details-info'> {weather.feels_like}°C</span>
                </p>
                <p className='weather-card__details-description'>
                    Wind 
                    <span className='weather-card__details-info'> {weather.wind}m/s</span>
                </p>
                <p className='weather-card__details-description'>
                    Humidity 
                    <span className='weather-card__details-info'> {weather.humidity}%</span>
                </p>
                <p className='weather-card__details-description'>
                    Pressure
                    <span className='weather-card__details-info'> {weather.pressure}hPa</span>
                </p>
            </div>
            <div className='weather-card__time'>{getCurrentTime()}</div>
        </div>
    )
}

export default CityWeather;