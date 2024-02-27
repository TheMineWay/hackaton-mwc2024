import { Link } from "react-router-dom";
import Card from '../../components/Card/DeviceCard';
import styles from './MyDevices.module.css';
import axios from 'axios';

export default function MyDevices() {

  const devices = [
    {name: 'Device 1', description: 'Random description', id: '1', type: 'Mobile'},
    {name: 'Device 2', description: 'Random description', id: '2', type: 'Mobile'},
    {name: 'Device 2', description: 'Random description', id: '2', type: 'PC'},
  ]

    return (
    <>
      <div className={styles.devices__container}>
      {devices ? devices.map((device, index) => (
        <Link to={device.id}>
          <Card key={index} title={device.name} description={device.description} type={device.type} />
        </Link>
      )) 
      : 
      'There are no devices yet'
      }
      </div>
    </>
    )
    
}