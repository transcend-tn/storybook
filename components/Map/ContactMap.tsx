import GoogleMapReact from 'google-map-react';
import MapMarker from './MapMarker';

interface contactMapProps {
  center?: {
    lat: number;
    lng: number;
  };
  zoom?: number;
}
export default function ContactMap({
  center = { lat: 35.83679602257312, lng: 10.63148022053524 },
  zoom = 18.2,
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
