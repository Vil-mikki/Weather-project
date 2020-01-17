import React from 'react';
import CityLink from './CityLink';
import CITY_NAMES from '../constants/cityNames';

function Header() {

    return(
        <div className="header">
            <CityLink city={CITY_NAMES.SAINT_PETERSBURG.value} cityName={CITY_NAMES.SAINT_PETERSBURG.label} />
            <CityLink city={CITY_NAMES.MOSCOW.value} cityName={CITY_NAMES.MOSCOW.label} />
            <CityLink city={CITY_NAMES.ROSTOV_ON_DON.value} cityName={CITY_NAMES.ROSTOV_ON_DON.label} />
        </div> 
    )
}

export default Header;