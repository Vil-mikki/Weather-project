import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CityWeather from '../components/CityWeather/CityWeather';
import { fetchWeather } from '../actions/temperature/temperatureAC';

class CityWeatherContainer extends Component {
    static propTypes = {
        fetchWeather: PropTypes.func,
        weather: PropTypes.object
    }

    componentDidUpdate() {
        if(this.props.match.params.city) {
            this.props.fetchWeather(this.props.match.params.city);
        }
    }

    render() {
        return(
            <CityWeather weather={this.props.weather} />
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