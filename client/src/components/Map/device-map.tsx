import { MapContainer, Popup, TileLayer } from "react-leaflet";
import { DeviceLocationModel } from "../../models/location/device-location.model";
import { Button, Col, Row, Skeleton } from "antd";
import styles from './device-map.module.css';
import { EyeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { routes } from "../../router/routes";

type Props = {
    location?: DeviceLocationModel;
    pointers?: {lat: number, lng: number, deviceId?: string}[];
    className?: string;
}

export default function DeviceMap({ location, pointers, className }: Props) {

  const navigate = useNavigate();

    return <div className={styles.map}>
        {location ? (
            <MapContainer className={className} style={{ height: '25em'}} center={[location.latitude, location.longitude]} zoom={12} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
              />
              {
                pointers?.map(({ lng, lat, deviceId }) => (<Popup key={deviceId} position={{
                  lat,
                  lng,
                }}>
                  <Row gutter={[3, 3]}>
                    <Col span={24}>
                      <p>Device is here</p>
                    </Col>
                    {
                      deviceId && (
                        <Col span={24}>
                         <Button icon={<EyeOutlined/>} onClick={() => navigate(routes.DEVICE(deviceId))}/>
                        </Col>
                      )
                    }
                  </Row>
                </Popup>))
              }
            </MapContainer>
          ) : (<Skeleton/>)}
    </div>
}