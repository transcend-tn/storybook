import GoogleMapReact from 'google-map-react';
import MapMarker from './MapMarker';
import { contactMapProps, data } from './constants';

export default function ContactMap({
  center = { lat: data.center.lat, lng: data.center.lng },
  zoom = data.zoom,
}: contactMapProps): JSX.Element {
  return (
    // Important! Always set the container height explicitly
    <div className="h-full w-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <MapMarker text="Transcend" />
      </GoogleMapReact>
    </div>
  );
}
