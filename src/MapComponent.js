import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Definindo um ícone personalizado
const customIcon = new L.Icon({
  iconUrl: './9041415_geo_fill_icon.icns', // URL do ícone
  iconSize: [38, 95], // Tamanho do ícone
  iconAnchor: [22, 94], // Ponto de ancoragem
  popupAnchor: [-3, -76], // Ponto de ancoragem para o popup
});

const MapClickHandler = ({ onMapClick }) => {
  useMapEvents({
    click(e) {
      onMapClick(e.latlng);
    },
  });
  return null;
};

const MapComponent = () => {
  const [position, setPosition] = useState(null);
  const [address, setAddress] = useState('');

  // Função para obter a localização atual do usuário
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setPosition({ lat: latitude, lng: longitude });
        },
        (err) => {
          console.error(err);
        },
        { enableHighAccuracy: true }
      );
    } else {
      alert('Geolocalização não é suportada pelo seu navegador.');
    }
  }, []);

  const handleMapClick = async (latlng) => {
    setPosition(latlng);

    // Fazendo uma requisição à API Nominatim para obter o endereço
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latlng.lat}&lon=${latlng.lng}`
    );
    const data = await response.json();
    setAddress(data.display_name || 'Endereço não encontrado');
  };

  return (
    <div>
      {position ? (
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: '500px', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <MapClickHandler onMapClick={handleMapClick} />
          <Marker position={position} icon={customIcon}></Marker>
        </MapContainer>
      ) : (
        <p>Obtendo a localização...</p>
      )}

      {position && (
        <div style={{ marginTop: '10px' }}>
          <p><strong>Coordenadas:</strong> {position.lat}, {position.lng}</p>
          <p><strong>Endereço:</strong> {address}</p>
        </div>
      )}
    </div>
  );
};

export default MapComponent;
