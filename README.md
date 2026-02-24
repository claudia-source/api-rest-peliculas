# 🎬 API REST Películas y Series

API REST desarrollada con Node.js y Express para la gestión de películas y series, como evidencia de aprendizaje del módulo **API REST - NodeJs**.

## 🚀 Tecnologías utilizadas
- Node.js
- Express.js
- MySQL
- MySQL2
- Postman
- Git & GitHub

## 📂 Estructura del proyecto
peliculasdb/
│── app.js
│── config/
│   └── db.js
│── routes/
│   ├── genero.routes.js
│   ├── director.routes.js
│   ├── productora.routes.js
│   ├── tipo.routes.js
│   └── media.routes.js
│── package.json
│── .gitignore
│── README.md
## 🔗 Endpoints principales

### Géneros
- GET `/api/generos`
- POST `/api/generos`

### Directores
- GET `/api/directores`
- POST `/api/directores`

### Productoras
- GET `/api/productoras`
- POST `/api/productoras`

### Tipos
- GET `/api/tipos`
- POST `/api/tipos`

### Media (Películas y Series)
- GET `/api/media`
- POST `/api/media`

## ⚙️ Configuración del proyecto

1. Clonar el repositorio:
```bash
git clone https://github.com/claudia-source/api-rest-peliculas.git

Instalar dependencias:

npm install

Configurar la base de datos MySQL en config/db.js

Ejecutar el servidor:

node app.js

Servidor corriendo en:

http://localhost:3000
🧪 Pruebas

Las pruebas de los endpoints se realizaron usando Postman.

👩‍💻 Autora

Claudia Cabrera
Estudiante - Desarrollo de Software


📌 Luego:
```bash
git add README.md
git commit -m "Agregar documentación README"
git push