const express = require('express');
const path = require('path'); // Necesario para manejar rutas de carpetas
const app = express();
const port = 8080;

// 1. MIDDLEWARE PARA ARCHIVOS ESTÁTICOS
// Esto dice: "Si te piden un archivo, búscalo primero en la carpeta 'public'"
app.use(express.static(path.join(__dirname, 'public')));

// 2. ENDPOINT DE API (BACKEND)
app.get('/api/info', (req, res) => {
    console.log("¡Alguien llamó a la API!");
    res.json({
        id: Math.floor(Math.random() * 1000),
        mensaje: "¡Hola desde el Backend en Node.js!",
        timestamp: new Date()
    });
});

// 3. RUTA POR DEFECTO (OPCIONAL PERO RECOMENDADA)
// Si piden algo que no existe, devolvemos el index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`App Fullstack escuchando en puerto ${port}`);
});