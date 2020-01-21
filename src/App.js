import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import HeaderContainer from './containers/HeaderContainer';
import CityWeatherContainer from './containers/CityWeatherContainer';

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

  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <div className='city-weather__container'>
          <CityWeatherContainer />   
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
    isError: state.isError
  }
}

export default withRouter(
  connect(
    mapStateToProps
  )(App)
);