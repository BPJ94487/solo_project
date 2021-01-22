import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';


const mapStyles = {
  width: '500px',
  height: '500px'
};

export class GoogleMap extends Component {
    state = {
        showingInfoWindow: false,  // Hides or shows the InfoWindow
        activeMarker: {},          // Shows the active marker upon click
        selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
      };


    // <----------------------------Haversine formula----------------------------------->
    calculateDistance =() => {


        let rad = function(x) {
            return x * Math.PI / 180;
        };
      
      var getDistance = function(p1, p2) {
        var R = 6378137; // Earth’s mean radius in meter
        var dLat = rad(p2.lat() - p1.lat());
        var dLong = rad(p2.lng() - p1.lng());
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(rad(p1.lat())) * Math.cos(rad(p2.lat())) *
          Math.sin(dLong / 2) * Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d; // returns the distance in meter
      };
    }
    // <-------------------------------------------------------------------------------->

      onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
        <>
            <Map
                google={this.props.google}
                zoom={12}
                style={mapStyles}
                initialCenter={
                {
                    lat: 44.9375,
                    lng: -93.2010
                }
                }
            />

            <Marker
                onClick={this.onMarkerClick}
                name={'Kenyatta International Convention Centre'}
            />
            <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}
            >   
                <div>
                <h4>{this.state.selectedPlace.name}</h4>
                </div>
            </InfoWindow>          
        </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_KEY
})(GoogleMap);
