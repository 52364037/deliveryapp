import React, { useEffect, useState } from 'react';
import { auth, database } from './firebase';

function MyEndpointComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Ejemplo de cómo obtener datos de la base de datos de Firebase
    const fetchData = async () => {
      const snapshot = await database.ref('ruta_en_la_base_de_datos').once('value');
      setData(snapshot.val());
    };

    fetchData();
  }, []);

  // Resto de tu código para utilizar los datos obtenidos de Firebase
  return (
    <div>
      {/* Renderiza los datos obtenidos de Firebase */}
    </div>
  );
}
export default MyEndpointComponent;

const express = require('express');
const app = express();

// Datos de ejemplo de los restaurantes
const restaurantes = [
  {
    id:1,
    nombre: '',
    clasificacion: 4,
    tiempoDeTrabajo: '09:00 - 22:00'
  },
  {
    id:2,
    nombre: 'Restaurante 2',
    clasificacion: 5,
    tiempoDeTrabajo: '10:00 - 23:00'
  },
  // Agrega más restaurantes aquí
];

// Endpoint para obtener todos los restaurantes
app.get('/restaurantes', (req, res) => {
  res.json(restaurantes);
});

// Inicia el servidor en el puerto 3000 (o el puerto que desees)
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
