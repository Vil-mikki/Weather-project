import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import HeaderContainer from './containers/HeaderContainer';
import CityWeatherContainer from './containers/CityWeatherContainer';
import { fetchTemperature } from './actions/temperature/temperatureAC';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchTemperature(this.props.match.params.city);
  }

  render() {
    return (
      <div className="App">
          <HeaderContainer />
          <CityWeatherContainer />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
      fetchTemperature: city => dispatch(fetchTemperature(city))
  }
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);