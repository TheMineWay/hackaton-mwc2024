import { useParams } from 'react-router-dom';
import styles from './device.module.css';
import axios from 'axios';

export default function Device() {
  
  const { id } = useParams();

  const device = {name: `Device ${id}`, description: 'Random description', id};

    return (
    <>
      <div className={styles.device}>
        <h2>{device.name}</h2>
        <p>{device.description}</p>
        <h3>Status: 🟢 online</h3>
        <h4>Dispositivo: Móvil</h4>
        <h4>Marca: Nokia</h4>
        <h4>Modelo: Nokia</h4>
        <h4>Nombre de modelo</h4>
        <h4>IMEI</h4>
      </div>
    </>
    )   
}