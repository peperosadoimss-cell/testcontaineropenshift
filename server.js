const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.json({
    mensaje: "¡Hola desde OpenShift!",
    fecha: new Date(),
    hostname: require('os').hostname() // Útil para ver el ID del POD
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
