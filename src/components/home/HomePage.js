import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Map from '../shared/Map';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weatherData: [...props.weatherData]
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.weatherData && nextProps.weatherData.length){
      const newState = this.state;
      newState.weatherData = nextProps.weatherData;
      this.setState({newState});
    }
  }

  render() {
    return (
      <div className="jumbotron">
        <Map markersData={this.state.weatherData}/>
      </div>
    );
  }
}

HomePage.propTypes = {
  weatherData: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){

  const formattedWeatherData = state.weatherData.map(data => {
    return {
      city: data.current_observation.display_location.city,
      lat: data.current_observation.display_location.latitude,
      lng: data.current_observation.display_location.longitude,
      weather: data.current_observation.weather,
      temp: data.current_observation.temp_c,
      wind_info: data.current_observation.wind_string,
      feelslike: data.current_observation.feelslike_string,
      detailed_url: data.current_observation.forecast_url,
      icon_url: data.current_observation.icon_url,
      last_updated: data.current_observation.observation_time
    };
  });
  return {
    weatherData: formattedWeatherData
  };
}

export default connect(mapStateToProps)(HomePage);
