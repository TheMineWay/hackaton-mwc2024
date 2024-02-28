import { Link } from "react-router-dom";
import { Badge, Table } from 'antd';
import { useDeviceStatus } from '../../hooks/status/use-device-status';
import { useAllDevices } from '../../hooks/devices/use-all-devices';
import { routes } from '../../router/routes';
import { DeviceModel } from '../../models/device/device.model';
import { ColumnType } from 'antd/es/table';

const DashboardTable: React.FC = () => {

  const { data: devices } = useAllDevices();

  const columns:ColumnType<DeviceModel>[] = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Type',
      dataIndex: 'type',
    },
    {
      title: 'Status',
      render: (_, { id }) => <Status id={id}/>,
    },
    {
      title: 'Connection',
      dataIndex: 'connection',
    },
    {
      title: 'Action',
      render: (_, { id }) => <Link to={routes.DEVICE(id)}>Check</Link>
    }
  ]

  return (
    <>
      <Table columns={columns} dataSource={devices} />
    </>
  );
};

export default DashboardTable;

const Status = ({ id }: { id: string }) => {
  const { isOnline } = useDeviceStatus(id, true);

  return <Badge status={isOnline ? 'success' : 'error'} text={isOnline ? 'Connected' : 'No connection'} ></Badge>
}