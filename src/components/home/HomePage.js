import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Map from '../shared/Map';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <Map/>
      </div>
    );
  }
}

HomePage.propTypes = {
  weatherData: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
  return {
    weatherData: state.weatherData
  };
}

export default connect(mapStateToProps)(HomePage);
