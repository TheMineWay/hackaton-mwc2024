import { useParams } from 'react-router-dom';
import styles from './device.module.css';
import axios from 'axios';

export default function Device() {
  
  const { id } = useParams();

  const device = {name: `Device ${id}`, description: 'Random description', id, online: true, type: 'Mobile'};

    return (
    <>
      <div className={styles.device}>
        <h2>{device.name}</h2>
        <p>{device.description}</p>
        <h3>Status: {device.online ? '🟢 online' : '🔴 offline'}</h3>
        <h5>Dispositivo: {device.type}</h5>
        <h5>Marca: Nokia</h5>
        <h5>Modelo: Nokia</h5>
        <h5>Nombre de modelo</h5>
        <h5>IMEI</h5>
      </div>
    </>
    )   
}