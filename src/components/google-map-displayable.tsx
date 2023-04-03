import React from 'react'
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api'
import LoopLogo from '../components/logos/loop-logo'

const center = {
  lat: 33.484319,
  lng: -112.04797,
}

const GoogleMapDisplyable = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.LOOPARCH_MAPS_KEY || ''}>
      <GoogleMap
        id="map"
        mapContainerClassName="w-full h-full min-h-[25vh]"
        center={center}
        zoom={10}
      >
        <Marker position={center} />
        <InfoWindow position={center}>
          <div>
            <LoopLogo
              className="block w-6 h-6 mb-2 rounded-sm"
              fillcolor="rgb(131, 182, 104)"
              textcolor="rgb(255, 255, 255)"
            />
            <p className="font-medium">Loop Architectural Materials</p>
            <p>3110 N 16th Street</p>
            <p>Phoenix, AZ 85013</p>
          </div>
        </InfoWindow>
      </GoogleMap>
    </LoadScript>
  )
}

export default GoogleMapDisplyable
