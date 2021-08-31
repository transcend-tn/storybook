import GoogleMapReact from 'google-map-react';
import SvgIcon from '../SvgIcon/SvgIcon';
import { iconsPath } from '../SvgIcon/constant.icons';
const AnyReactComponent = ({ text }) => (
  <div>
    <SvgIcon
      path={iconsPath.transcend}
      viewBox="0 0 400 400"
      width={50}
      height={50}
      fill={'white'}
    />
    <h2 className="text-white">{text}</h2>
  </div>
);

export default function ContactMap() {
  const defaultProps = {
    center: {
      lat: 35.83679602257312,
      lng: 10.63148022053524,
    },
    zoom: 18.2,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={35.83679602257312}
          lng={10.63148022053524}
          text="Transcend"
        />
      </GoogleMapReact>
    </div>
  );
}
