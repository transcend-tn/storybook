import GoogleMapReact from 'google-map-react';
import { data } from './map.constants';
import { contactMapProps } from './map.interface';

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
