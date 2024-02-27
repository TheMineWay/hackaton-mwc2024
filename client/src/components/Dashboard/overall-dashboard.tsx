import { Col, Row, Skeleton } from 'antd';
import DeviceMap from '../Map/device-map';
import { useAllDevicesInfo } from '../../hooks/devices/use-all-devices-info';

export function OverallDashboard() {

    const { data, isLoading } = useAllDevicesInfo();

    if (!data || isLoading) return <Skeleton/>;

    const sumLoc = { latitude: 0, longitude: 0, country: data.find(() => true)?.location.country ?? 'ES' };
    for (const { location } of data) {
        sumLoc.latitude += location.latitude;
        sumLoc.longitude += location.longitude;
    }

    sumLoc.latitude = sumLoc.latitude / data.length;
    sumLoc.longitude = sumLoc.longitude / data.length;

    return (
        <Row>
            <Col xs={24} md={12}>
            </Col>
            <Col xs={24} md={12}>
                <DeviceMap location={sumLoc} pointers={data.map((l) => ({
                    lng: l.location.longitude,
                    lat: l.location.latitude,
                }))}/>
            </Col>
        </Row>
    );
}