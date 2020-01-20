import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import HeaderContainer from './containers/HeaderContainer';
import CityWeatherContainer from './containers/CityWeatherContainer';
import LoadingIndicator from './components/common/LoadingIndicator';
import { fetchWeather } from './actions/temperature/temperatureAC';

import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import './App.scss';

class App extends Component {
  static propTypes = {
    weather: PropTypes.object,
    isLoading: PropTypes.bool,
    isError: PropTypes.bool,
    fetchWeather: PropTypes.func
  }

  componentDidMount() {
    if(this.props.match.params.city) {
      this.props.fetchWeather(this.props.match.params.city);
    }
  }

  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <div className='city-weather__container'>
          <LoadingIndicator isVisible={this.props.isLoading}>
            <CityWeatherContainer weather={this.props.weather} />
          </LoadingIndicator>
          <Snackbar open={this.props.isError}>
            <Alert severity="error">
              Sorry, we can't find this city! Please, try again!
            </Alert>
          </Snackbar>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weatherData,
    isLoading: state.isLoading,
    isError: state.isError
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