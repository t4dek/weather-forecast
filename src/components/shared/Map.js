import React, { Component, PropTypes } from 'react';

class Map extends React.Component {
  componentDidMount() {
    setTimeout(function(){
      const map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 49.41999817, lng: 32.04999924},
        zoom: 6
      });

      const image = {
        url: "http://icons.wxug.com/i/c/k/mostlycloudy.gif",
        size: new google.maps.Size(50, 50),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 32)
      }

      const shape = {
        coords: [50, 1, 1, 20, 18, 20, 18, 50],
        type: 'poly'
      };

      const marker = new google.maps.Marker({
        position: {lat: 50.40000153, lng: 30.56999969},
        map: map,
        icon: image,
        shape: shape
      });
      const contentString = "HELLO"

      const infowindow = new google.maps.InfoWindow({
        content: contentString
      });

      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });
    }, 300);
  }

  render(){
    return (
      <div id="map"></div>
    );
  }
}

Map.propTypes = {
  markersData: PropTypes.array.isRequired
}

export default Map;
