const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'peliculasdb'
});

db.connect((err) => {
  if (err) {
    console.error('❌ Error conectando a MySQL:', err);
    return;
  }
  console.log('✅ Conectado a MySQL - peliculasdb');
});

module.exports = db;