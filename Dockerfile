# 1. Usamos la imagen oficial de Node.js 18 sobre Red Hat UBI 8
# Esta imagen es pública y perfecta para OpenShift
FROM registry.access.redhat.com/ubi8/nodejs-18:latest

# 2. Descripción opcional
LABEL descripcion="Mi primera app en OpenShift con UBI"

# NOTA: Esta imagen ya define el WORKDIR en /opt/app-root/src
# y configura un usuario no-root por seguridad. No hace falta crear WORKDIR manual.

# 3. Copiar dependencias (el usuario de la imagen tiene permisos aquí)
COPY package*.json ./

# 4. Instalar dependencias
RUN npm install --production

# 5. Copiar el código
COPY . .

# 6. Exponer puerto (8080 es el estándar en estas imágenes)
EXPOSE 8080

# 7. Ejecutar
CMD ["npm", "start"]