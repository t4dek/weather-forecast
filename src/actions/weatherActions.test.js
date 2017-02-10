import expect from 'expect';
import * as weatherActions from './weatherActions';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

describe('Weather Actions', () => {
  describe('loadWeatherDataSuccess', () => {
    it('should create a LOAD_WEATHER_DATA_SUCCESS action', () => {
      //arrange
      const weatherData = [];
      const expectedAction = {
        type: 'LOAD_WEATHER_DATA_SUCCESS',
        weatherData: weatherData
      };

      //act
      const action = weatherActions.loadWeatherDataSuccess(weatherData);

      //assert
      expect(action).toEqual(expectedAction);
    });
  });
});
