import { MapContainer, Popup, TileLayer } from "react-leaflet";
import { DeviceLocationModel } from "../../models/location/device-location.model";
import { Skeleton } from "antd";
import styles from './device-map.module.css';

type Props = {
    location?: DeviceLocationModel;
}

export default function DeviceMap({ location }: Props) {
    return <div className={styles.map}>
        {location ? (
            <MapContainer style={{ height: '25em'}} center={[location.latitude, location.longitude]} zoom={13} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
              />
              <Popup position={{
                lat: location.latitude,
                lng: location.longitude,
              }}>Device is here</Popup>
            </MapContainer>
          ) : (<Skeleton/>)}
    </div>
}