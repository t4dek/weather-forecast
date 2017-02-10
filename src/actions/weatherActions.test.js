import expect from 'expect';
import * as weatherActions from './weatherActions';

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
