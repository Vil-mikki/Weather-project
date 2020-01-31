import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from './components/Header/Header';
import { default as CityWeather } from './containers/CityWeatherContainer';
import { errorMessage } from './constants/errorMessages';

import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import './App.scss';

class App extends Component {
  static propTypes = {
    weather: PropTypes.object,
    isError: PropTypes.bool
  }

  render() {
    const city = this.props.match.params.city;
    return (
      <div className="App">
        <Header />
        <div className='city-weather__container'>
          {!this.props.isError ?
            <CityWeather city={city} /> :
            <Snackbar open={this.props.isError}>
              <Alert severity="error">
                {errorMessage}
              </Alert>
            </Snackbar>
          }
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