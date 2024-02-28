import { Skeleton } from 'antd';
import { useAllDevicesInfo } from '../../hooks/devices/use-all-devices-info';
import DeviceMap from '../Map/device-map';
import DashboardTable from '../Table/dashboardTable';
import BandwidthChart from '../Charts/bandwidth-chart';
import './overall-dashboard.css';

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
      <>
        <div className="dashboard__container">
          <div className="dashboardTable__container">
            <DashboardTable />
          </div>
          <div className="doughnut_map__container">
            <div className="doughnut__container container">
              <BandwidthChart/>
            </div>
            <div className="map__container container">
              <h2>All Devices ({data.length ?? 0})</h2>
              <DeviceMap className="map" location={sumLoc} pointers={data.map((l) => ({
                  lng: l.location.longitude,
                  lat: l.location.latitude,
              }))}/>
            </div>
          </div>
        </div>
      </>
    );
}