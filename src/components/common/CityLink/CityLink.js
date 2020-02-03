import React from 'react';
import { NavLink } from 'react-router-dom';

import './CityLink.scss';

const className = 'city-link';
const CityLink = ({ city, cityName }) => (
  <div className={className}>
    <NavLink
      exact
      to={`/${city}`}
      className={`${className}__insiders`}
      activeClassName={`${className}__insiders--active`}
    >
      {cityName}
    </NavLink>
  </div>
);

export default CityLink;
