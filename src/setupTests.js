import 'jest-enzyme';

import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { format } from 'date-fns';
import CityWeather from './components/CityWeather/CityWeather';

Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;

function setup() {
    const props = {
      weather: jest.object
    };

    const enzymeWrapper = shallow(<CityWeather {...props} />);

    return {
      props,
      enzymeWrapper
    }
}

describe('components', () => {
    describe('CityWeather', () => {
      it('should render self and subcomponents', () => {
        const { enzymeWrapper, props } = setup()
        expect(enzymeWrapper.find('div').hasClass('weather-card')).toBe(true)

        expect(enzymeWrapper.find('div').hasClass('weather-card__header')).toBe(true)
        expect(enzymeWrapper.find('h2').hasClass('weather-card__header-cityName').text()).toBe(props.weather.name)
        expect(enzymeWrapper.find('p').hasClass('weather-card__header-description').text()).toBe(props.weather.description)

        expect(enzymeWrapper.find('div').hasClass('weather-card__temperature')).toBe(true)
        expect(enzymeWrapper.find('h1').hasClass('weather-card__temperature-temp').text()).toBe(`${props.weather.temperature}°C`)

        expect(enzymeWrapper.find('div').hasClass('weather-card__details')).toBe(true)
        expect(enzymeWrapper.find('h3').hasClass('weather-card__details-title').text()).toBe('Details')
        expect(enzymeWrapper.find('p').hasClass('weather-card__details-description').text()).toBe('Feels like')
        expect(enzymeWrapper.find('span').hasClass('weather-card__details-info').text()).toBe(` ${props.weather.feels_like}°C`)
        expect(enzymeWrapper.find('p').hasClass('weather-card__details-description').text()).toBe('Wind')
        expect(enzymeWrapper.find('span').hasClass('weather-card__details-info').text()).toBe(` ${props.weather.wind}m/s`)
        expect(enzymeWrapper.find('p').hasClass('weather-card__details-description').text()).toBe('Humidity')
        expect(enzymeWrapper.find('span').hasClass('weather-card__details-info').text()).toBe(` ${props.weather.humidity}%`)
        expect(enzymeWrapper.find('p').hasClass('weather-card__details-description').text()).toBe('Pressure')
        expect(enzymeWrapper.find('span').hasClass('weather-card__details-info').text()).toBe(` ${props.weather.pressure}hPa`)
        
        expect(enzymeWrapper.find('div').hasClass('weather-card__time').text()).toBe(format(new Date(), 'kk:mm MMM d'))
      })
    })
})