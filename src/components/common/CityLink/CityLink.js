import React from 'react';
import { NavLink } from 'react-router-dom';

import './CityLink.scss';

const CityLink = ({ city, cityName }) => (
  <div className='city-link'>
    <NavLink
      exact
      to={`/${city}`}
      style={{
        textDecoration: 'none',
        color: 'white'
      }}
      activeStyle={{
        color: '#feb020'
      }}
    >
      {cityName}
    </NavLink>
  </div>
);

export default CityLink;