import React, {PropTypes} from 'react';
import { apiKeys } from '../constants/apiKeys';

class App extends React.Component {

  componentWillMount() {
    const script = document.createElement('script');

    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKeys.googleMapKey}`;  // eslint-disable-line
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
