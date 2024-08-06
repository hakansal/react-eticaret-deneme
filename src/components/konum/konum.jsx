import React from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: 41.0865168,
    lng: 28.6519112
};


const Konum = () => {
    return <div className=" ">
        <LoadScript
            googleMapsApiKey="AIzaSyDi4Kr5H_dDiNYwdmCpnqDQggyFHwQWwnU" // Buraya Google Maps API anahtarınızı ekleyin
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    </div>
}

export default Konum;