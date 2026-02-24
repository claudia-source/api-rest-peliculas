const express = require('express');
const cors = require('cors');
const app = express();

require('./config/db');

// MIDDLEWARES (ESTO ES CLAVE)
app.use(cors());
app.use(express.json()); // 👈 SIN ESTO, POST NO FUNCIONA

// RUTAS
app.use('/api/generos', require('./routes/genero.routes'));
app.use('/api/directores', require('./routes/director.routes'));
app.use('/api/productoras', require('./routes/productora.routes'));
app.use('/api/tipos', require('./routes/tipo.routes'));
app.use('/api/media', require('./routes/media.routes'));

app.listen(3000, () => {
  console.log('🚀 Servidor iniciado en puerto 3000');
});