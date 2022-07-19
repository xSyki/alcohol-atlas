import React, { useEffect, useState } from 'react'
import { markerContentInterface } from '../../assets/markers'
import InfoWindowContent from '../InfoWindowContent/InfoWindowContent'
import ReactDOMServer from 'react-dom/server'

interface MarkerPropsInterface extends google.maps.MarkerOptions {
  markerContent: markerContentInterface
}

const Marker = (options: MarkerPropsInterface) => {
  const { markerContent } = options
  const [marker, setMarker] = useState<google.maps.Marker>(
    new google.maps.Marker({
      position: options.position,
      icon: markerContent.icon,
    })
  )
  const [infoWindow, setInfoWindow] = useState(
    new google.maps.InfoWindow({
      content: '',
      disableAutoPan: true,
    })
  )

  useEffect(() => {
    marker.addListener('click', () => {
      infoWindow.setContent(
        ReactDOMServer.renderToString(
          <InfoWindowContent markerContent={markerContent} />
        )
      )
      infoWindow.open(options.map, marker)
    })

    return () => {
      if (marker) {
        marker.setMap(null)
      }
    }
  }, [])

  useEffect(() => {
    if (marker) {
      marker.setOptions(options)
    }
  }, [marker, options])

  return null
}

export default Marker
