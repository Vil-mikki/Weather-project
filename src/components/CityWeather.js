import React from 'react';

function CityWeather(props) {
    return(
            <p>{props.city}: {props.temperature}</p>
    )
}

export default CityWeather;