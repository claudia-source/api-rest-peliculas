# 🎬 API REST Películas

## 📌 Descripción
API REST desarrollada con Node.js, Express y MongoDB para gestionar información de películas, géneros, directores, productoras y tipos.

## 🚀 Funcionalidades
- CRUD de Géneros
- CRUD de Directores
- CRUD de Productoras
- CRUD de Tipos
- CRUD de Media (Películas)

## 🛠️ Tecnologías
- Node.js
- Express
- MongoDB
- Mongoose

## ⚙️ Instalación

1. Clonar repositorio:
git clone https://github.com/claudia-source/api-rest-peliculas.git

2. Instalar dependencias:
npm install

3. Configurar variables de entorno:
Crear archivo `.env` con:
PORT=3000
MONGO_URI=mongodb+srv://claudiacabrera_db_user:claudia281218@cluster0.4gfqydl.mongodb.net/?appName=Cluster0

4. Ejecutar servidor:
npm run dev

## 🔗 Endpoints principales

- GET /api/genero
- POST /api/genero
- GET /api/media
- PUT /api/media/:id
- DELETE /api/media/:id

## 👨‍💻 Autor
[Claudia Cabrera]