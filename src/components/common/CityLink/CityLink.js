import React from 'react';
import { NavLink } from 'react-router-dom';

import './CityLink.scss';

const CityLink = ({ city, cityName }) => (
  <div className='city-link'>
    <NavLink
      exact
      to={`/${city}`}
      className='city-link__insiders'
      activeStyle={{color: '#feb020'}}
    >
      {cityName}
    </NavLink>
  </div>
);

export default CityLink;