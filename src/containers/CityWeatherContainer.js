import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import CityWeather from '../components/CityWeather';
import { fetchTemperature } from '../actions/temperature/temperatureAC';

class CityWeatherContainer extends Component {
    componentDidUpdate() {
        this.props.fetchTemperature(this.props.match.params.city);
    }

    render() {
        const city = this.props.match.params.city;
        const temperature = this.props.temperature;
        
        return(
            <CityWeather city={city} temperature={temperature} />
        )
    }
}

function mapStateToProps(state) {
    return {
        temperature: state.temperature
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchTemperature: city => dispatch(fetchTemperature(city))
    }
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(CityWeatherContainer)
);