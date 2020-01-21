import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoadingIndicator from '../components/common/LoadingIndicator';

import CityWeather from '../components/CityWeather/CityWeather';
import { fetchTemperature } from '../actions/temperature/temperatureAC';

class CityWeatherContainer extends Component {
    static propTypes = {
        fetchWeather: PropTypes.func,
        weather: PropTypes.object
    }

    componentDidMount() {
    if(this.props.match.params.city) {
      this.props.fetchWeather(this.props.match.params.city);
    }
  }

    componentDidUpdate(prevProps) {
        const city = this.props.match.params.city;
        if(city && prevProps.match.params.city !== city) {
            this.props.fetchWeather(city);
        }
    }

    render() {
        return(
            <LoadingIndicator isVisible={this.props.isLoading}>
                <CityWeather weather={this.props.weather} />
            </LoadingIndicator>
        )
    }
}

function mapStateToProps(state) {
    return {
      weather: state.weatherData,
      isLoading: state.isLoading
    }
  }

function mapDispatchToProps(dispatch) {
    return {
        fetchWeather: city => dispatch(fetchTemperature(city))
    }
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(CityWeatherContainer)
);