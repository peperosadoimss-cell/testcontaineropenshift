# 1. Usar una imagen base ligera de Node
FROM node:18-alpine

# 2. Crear el directorio de trabajo dentro del contenedor
WORKDIR /app

# 3. Copiar los archivos de dependencias
COPY package*.json ./

# 4. Instalar dependencias
RUN npm install --production

# 5. Copiar el resto del código fuente
COPY . .

# 6. Exponer el puerto que usamos en server.js
EXPOSE 8080

# 7. Comando para iniciar la app
CMD ["npm", "start"]
