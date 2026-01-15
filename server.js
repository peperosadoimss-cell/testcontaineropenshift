const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  console.log("Entrando a la ruta raíz '/'");
  res.json({
    mensaje: "¡Hola jose luis desde OpenShift!",
    fecha: new Date(),
    hostname: require('os').hostname() // Útil para ver el ID del POD
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
