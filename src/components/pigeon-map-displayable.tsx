import React from 'react'
import { Map, Marker, ZoomControl } from 'pigeon-maps'

const center = { lat: 33.484319, lng: -112.04797 }
const centerArray: [number, number] = [center.lat, center.lng]

const PigeonMapDisplayable = () => {
  return (
    <Map
      height={300}
      defaultCenter={centerArray}
      defaultZoom={11}
      metaWheelZoom={true}
    >
      <Marker width={50} anchor={centerArray} />

      {/* <Overlay anchor={centerArray} offset={[100,100]}>
        <div className="p-4 text-xs bg-white rounded-md shadow-md">
          <p className="font-semibold">Loop Architectural Materials</p>
          <p>3110 N 16th Street</p>
          <p>Phoenix, AZ 85013</p>
        </div>
      </Overlay> */}
      <ZoomControl />
    </Map>
  )
}

export default PigeonMapDisplayable

export const Head = () => {}
