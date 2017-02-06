import React, {PropTypes} from 'react';
import { apiKeys } from '../constants/apiKeys';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentWillMount() {
    const script = document.createElement('script');

    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKeys.googleMapKey}`;  // eslint-disable-line
    script.async = true;
    script.onload = this.setLoadingState.bind(this);

    document.body.appendChild(script);
  }

  setLoadingState(){
    const loading = !window.google; //assume that loading is end when maps are available
    this.setState({loading});
  }

  render() {
    return (
      <div>
        {this.state.loading ? <h2>Loading Map...</h2> : this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
