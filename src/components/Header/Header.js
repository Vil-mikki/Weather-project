import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import CityLink from '../common/CityLink/CityLink';
import CITY_NAMES from '../../constants/cityNames';

import './Header.scss';

class Header extends Component {

    renderLinks = () => {
        const cities = [];
        for(let city in CITY_NAMES) {
            cities.push(<CityLink key={CITY_NAMES[city].id} city={CITY_NAMES[city].value} cityName={CITY_NAMES[city].label} />)
        }
        return cities;
    }

    render() {
        return(
            <div className="header">
                {this.renderLinks()}
            </div> 
        )
    }
}

export default withRouter(Header);