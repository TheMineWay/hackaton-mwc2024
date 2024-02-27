import { useParams } from 'react-router-dom';
import styles from './device.module.css';
import axios from 'axios';
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';

export default function Device() {
  
  const { id } = useParams();

  const device = {name: `Device ${id}`, description: 'Random description', id, online: true, type: 'Mobile'};

    return (
      <div className={styles.device}>
        <h2>{device.name}</h2>
        <p>{device.description}</p>
        <h3>Status: {device.online ? '🟢 online' : '🔴 offline'}</h3>
        <h5>Dispositivo: {device.type}</h5>
        <h5>Marca: Nokia</h5>
        <h5>Modelo: Nokia</h5>
        <h5>Nombre de modelo</h5>
        <h5>IMEI</h5>

        <MapContainer style={{ height: '25em'}} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    )   
}