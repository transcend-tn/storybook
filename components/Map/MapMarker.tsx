import { iconsPath } from '../SvgIcon/constant.icons';
import SvgIcon from '../SvgIcon/SvgIcon';
interface MapMarkerProps {
  text: string;
}

const MapMarker = ({ text }: MapMarkerProps): JSX.Element => (
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

export default MapMarker;
