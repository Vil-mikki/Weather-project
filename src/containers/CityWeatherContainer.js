import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoadingIndicator from '../components/common/LoadingIndicator';

import CityWeather from '../components/CityWeather/CityWeather';
import { fetchWeather } from '../actions/temperature/temperatureAC';

class CityWeatherContainer extends Component {
    static propTypes = {
        fetchWeather: PropTypes.func,
        weather: PropTypes.object,
        isLoading: PropTypes.bool,
        city: PropTypes.string
    }

    componentDidMount() {
    if(this.props.city) {
      this.props.fetchWeather(this.props.city);
    }
  }

    componentDidUpdate(prevProps) {
        const city = this.props.city;
        if(city && prevProps.city !== city) {
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
        fetchWeather: city => dispatch(fetchWeather(city))
    }
}

export default connect(
        mapStateToProps,
        mapDispatchToProps
)(CityWeatherContainer);