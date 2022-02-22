import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import React from 'react';


function PinnedLocation(props) {
    function onMarkerClick() {

    }

    let onInfoWindowClose;
    return (
        <Map google={props.google} zoom={14}>

            <Marker onClick={onMarkerClick}
                    name={'Walnut Creek'} />

            <InfoWindow onClose={onInfoWindowClose}>

            </InfoWindow>
        </Map>
    );
}

export default GoogleApiWrapper({
    apiKey: (" ")
})(PinnedLocation)