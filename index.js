
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({
    mensaje: 'API de energía activa',
    consumoActual: 125.5,
    unidad: 'kWh'
  });
});

app.listen(3000, () => {
  console.log('API corriendo en http://localhost:3000');
});