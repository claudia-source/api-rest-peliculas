const express = require('express');
const router = express.Router();
const db = require('../config/db');

// GET - listar productoras
router.get('/', (req, res) => {
  db.query('SELECT * FROM productoras', (err, results) => {
    if (err) {
      console.error('❌ ERROR GET PRODUCTORAS:', err);
      return res.status(500).json(err);
    }
    res.json(results);
  });
});

// POST - crear productora
router.post('/', (req, res) => {
  const { nombre, estado, slogan, descripcion } = req.body;

  if (!nombre) {
    return res.status(400).json({
      error: 'El nombre es obligatorio'
    });
  }

  const sql = `
    INSERT INTO productoras (nombre, estado, slogan, descripcion)
    VALUES (?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      nombre,
      estado || 'Activo',
      slogan || null,
      descripcion || null
    ],
    (err, result) => {
      if (err) {
        console.error('❌ ERROR POST PRODUCTORAS:', err);
        return res.status(500).json(err);
      }

      res.status(201).json({
        mensaje: 'Productora creada correctamente',
        id: result.insertId
      });
    }
  );
});

module.exports = router;
module.exports = router;