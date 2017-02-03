import React, {PropTypes} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { apiKeys } from '../constants/apiKeys';

class App extends React.Component {

  componentWillMount() {
    const script = document.createElement('script');

    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKeys.googleMapKey}`;  // eslint-disable-line
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    const style = {
      height: '500px',
      width: '800px'
    };

    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Weather Forecast"
            showMenuIconButton={false}
          />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
