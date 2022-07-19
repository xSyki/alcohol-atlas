import React, { useEffect } from 'react'

const Marker: React.FC<google.maps.MarkerOptions> = (options) => {
  const [marker, setMarker] = React.useState<google.maps.Marker>()

  useEffect(() => {
    if (!marker) {
      setMarker(
        new google.maps.Marker({
          position: options.position,
          map: options.map,
        })
      )
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null)
      }
    }
  }, [options.position])

  useEffect(() => {
    if (marker) {
      marker.setOptions(options)
    }
  }, [marker, options])

  return null
}

export default Marker
