import 'jest-enzyme';

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './components/Header/Header';

Enzyme.configure({ adapter: new Adapter() });

const headerWrapper = mount(
  <Router>
    <Header />
  </Router>
);
expect(headerWrapper.find('.header')).toHaveClassName('header');
expect(headerWrapper).toContainMatchingElements(3, 'CityLink');
