import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import HeaderContainer from './containers/HeaderContainer';
import CityWeatherContainer from './containers/CityWeatherContainer';
import LoadingIndicator from './components/common/LoadingIndicator';
import { fetchWeather } from './actions/temperature/temperatureAC';

import './App.scss';

class App extends Component {
  componentDidMount() {
    this.props.fetchWeather(this.props.match.params.city);
  }

  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <div className='city-weather__container'>
          <LoadingIndicator isVisible={this.props.isLoading}>
            <CityWeatherContainer weather={this.props.weather} />
          </LoadingIndicator>
        </div>
      </div>
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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);