import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import CityWeather from '../components/CityWeather/CityWeather';
import { fetchWeather } from '../actions/temperature/temperatureAC';

class CityWeatherContainer extends Component {
    componentDidUpdate() {
        this.props.fetchWeather(this.props.match.params.city);
    }

    render() {
        const city = this.props.match.params.city;

        return(
            <CityWeather city={city} weather={this.props.weather} />
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchWeather: city => dispatch(fetchWeather(city))
    }
}

export default withRouter(
    connect(
        null,
        mapDispatchToProps
    )(CityWeatherContainer)
);