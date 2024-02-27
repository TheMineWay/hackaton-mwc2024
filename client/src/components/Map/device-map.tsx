import { MapContainer, Popup, TileLayer } from "react-leaflet";
import { DeviceLocationModel } from "../../models/location/device-location.model";
import { Skeleton } from "antd";
import styles from './device-map.module.css';

type Props = {
    location?: DeviceLocationModel;
    pointers?: {lat: number, lng: number}[];
    className?: string;
}

export default function DeviceMap({ location, pointers, className }: Props) {
    return <div className={styles.map}>
        {location ? (
            <MapContainer className={className} style={{ height: '25em'}} center={[location.latitude, location.longitude]} zoom={12} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
              />
              {
                pointers?.map(({ lng, lat }, i) => (<Popup key={i} position={{
                  lat,
                  lng,
                }}>Device is here</Popup>))
              }
            </MapContainer>
          ) : (<Skeleton/>)}
    </div>
}