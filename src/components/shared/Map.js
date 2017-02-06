import React, { Component, PropTypes } from 'react';

class Map extends React.Component {
  constructor(props) {
    super(props);

    const mapInitData = {
      center: {lat: 48.52000046, lng: 32.20000076}, //approximate center of Ukraine on map
      zoom: 7
    };

    const iconShape = {
      coords: [50, 1, 1, 20, 18, 20, 18, 50],
      type: 'poly'
    };

    this.state = {
      mapInitData,
      iconShape
    };
  }

  componentDidMount() {
    if(!this.state.map){
      const map = new google.maps.Map(document.getElementById('map'), this.state.mapInitData); // eslint-disable-line no-undef
      this.props.markersData.forEach(marker => {
        this.placeMarker(map, marker);
      });
      //bad habbit but needed in order to use it in componentWillReceiveProps
      this.setState({map}); // eslint-disable-line react/no-did-mount-set-state
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.markersData && nextProps.markersData.length){
      nextProps.markersData.forEach(marker => {
        this.placeMarker(this.state.map, marker);
      });
    }
  }

  placeMarker(map, markerData) {
    if(!map){return;}
    const markerPosition = {
      lat: parseFloat(markerData.lat),
      lng: parseFloat(markerData.lng)
    };

    const image = {
      url: markerData.iconUrl,
      size: new google.maps.Size(50, 50), // eslint-disable-line no-undef
      origin: new google.maps.Point(0, 0), // eslint-disable-line no-undef
      anchor: new google.maps.Point(0, 32) // eslint-disable-line no-undef
    };

    const marker = new google.maps.Marker({ // eslint-disable-line no-undef
      position: markerPosition,
      map: map,
      icon: image,
      shape: this.state.iconShape
    });

    marker.addListener('click',() => {
      this.infoWindow(markerData).open(map, marker);
    });
  }

  infoWindow(data) {
    const contentString = `<div id="conent">
      <h2>${data.city}</h2>
      <h4>${data.lastUpdated}</h4>
      <h3>${data.weather}</h3>
      <h4>Wind info: </h4><span>${data.windInfo}</span>
      <h4>Feels like: </h4><span>${data.feelslike}</span>
      <h4>Detailed Forecast: </h4><a target="_blank" href="${data.detailedUrl}">here<a>
      </div>`;

    return new google.maps.InfoWindow({ // eslint-disable-line no-undef
      content: contentString
    });
  }

  render(){
    return (
      <div id="map"></div>
    );
  }
}

Map.propTypes = {
  markersData: PropTypes.array.isRequired
};

export default Map;
