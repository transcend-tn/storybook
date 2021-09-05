import GoogleMapReact from 'google-map-react';
import { contactMapProps, data } from './constants';

export default function ContactMap({
  center = { lat: data.center.lat, lng: data.center.lng },
  zoom = data.zoom,
  children,
}: contactMapProps): JSX.Element {
  return (
    // Important! Always set the container height explicitly
    <div className="h-full w-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {children}
      </GoogleMapReact>
    </div>
  );
}
