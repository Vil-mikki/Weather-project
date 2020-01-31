import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import CityWeather from './CityWeather';

const props = {
    weather: {
        name: "Yangon",
        description: "clear sky",
        temperature: 34,
        feels_like: 33,
        wind: 3.6,
        humidity: 34,
        pressure: 1012
    }
}

const cityWeather = shallow(<CityWeather {...props} />);


describe('<CityWeather />', () => {
	it('should match snapshot', () => {
		expect(toJson(cityWeather)).toMatchSnapshot();
    });
    
    it('should render Loader when data is fetching', () => {
        cityWeather.setProps({isLoading: true});
        expect(toJson(cityWeather)).toMatchSnapshot();
    })
});