import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import CityLink from '../common/CityLink/CityLink';
import CITY_NAMES from '../../constants/cityNames';

import './Header.scss';

function Header() {
  function renderLinks() {
    return Object.keys(CITY_NAMES).map(city => (
      <CityLink
        key={CITY_NAMES[city].id}
        city={CITY_NAMES[city].value}
        cityName={CITY_NAMES[city].label}
      />
    ));
  }

  return <div className="header">{renderLinks()}</div>;
}

export default withRouter(Header);
