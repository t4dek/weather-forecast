import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import Map from './Map';

function setup(){
  const props = {
    markersData: []
  }

  return shallow(<Map {...props} />);
}

it('renders div with #map', () => {
  const wrapper = setup(false);
  expect(wrapper.find('#map').length).toBe(1);
});
