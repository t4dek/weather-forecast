export default function weatherReducer(state={weatherData:[]}, action){
  switch(action.type) {
    case 'LOAD_WEATHER_DATA_SUCCESS':
      return { weatherData:
        [
          ...state.weatherData,
          action.weatherData
        ]
      };
    default:
      return state;
  }
}
