import React, { useState } from 'react'
import { Wrapper, Status } from '@googlemaps/react-wrapper'
import Map from '../Map/Map'
import Marker from '../Marker/Marker'
import markers from '../../assets/markers'

const render = (status: Status) => {
  return <h1>{status}</h1>
}

function MapContainer() {
  const [zoom, setZoom] = useState(3)
  const [center, setCenter] = useState<google.maps.LatLngLiteral>({
    lat: 0,
    lng: 0,
  })

  const onIdle = (m: google.maps.Map) => {
    setZoom(m.getZoom()!)
    setCenter(m.getCenter()!.toJSON())
  }
  return (
    <div style={{ height: '100%' }}>
      <Wrapper
        apiKey={`${process.env.GOOGLE_MAPS_API_KEY}`}
        render={render}
      >
        <Map
          center={center}
          onIdle={onIdle}
          zoom={zoom}
          style={{ flexGrow: '1', height: '100%' }}
        >
          {markers.map((latLng, i) => (
            <Marker key={i} position={latLng} />
          ))}
        </Map>
      </Wrapper>
    </div>
  )
}

export default MapContainer