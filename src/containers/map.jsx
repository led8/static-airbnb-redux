import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';

class Map extends Component {
  render() {
    const style = {height: '100vh'}
    let marker = null;
    let center = { lat: 48.856614, lng: 2.352222 };

    if (this.props.selectedFlat) {
      marker = <div style={{ width: '20px', height: '20px',
                              backgroundColor: 'red',
                              borderRadius: '50%' }}
        lat={this.props.selectedFlat.lat}
        lng={this.props.selectedFlat.lng} />;

        center = { lat: this.props.selectedFlat.lat,
                  lng: this.props.selectedFlat.lng };
    }

    return (
      <div className="col-sm-5" style={style}>
        <GoogleMapReact bootstrapURLKeys={{ key: "AIzaSyA0B8vEtPNbY0QljCcdPmB3ctx4VpSl_A4" }}
                        center={center}
                        defaultZoom={15}>
          {marker}
        </GoogleMapReact>
      </div>
    )
  }
}

function mapStateToProps(reduxState) {
  return { selectedFlat: reduxState.selectedFlat };
}
export default connect(mapStateToProps)(Map);;
