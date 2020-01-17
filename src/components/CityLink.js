import React from 'react';
import { NavLink } from 'react-router-dom';

const CityLink = ({ city, cityName }) => (
  <NavLink
    exact
    to={`/${city}`}
    activeStyle={{
      textDecoration: 'none',
      color: 'black'
    }}
  >
    {cityName}
  </NavLink>
);

export default CityLink;