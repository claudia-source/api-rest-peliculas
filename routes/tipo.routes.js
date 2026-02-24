const express = require('express');
const router = express.Router();
const db = require('../config/db');

// GET - listar tipos
router.get('/', (req, res) => {
  db.query('SELECT * FROM tipos', (err, results) => {
    if (err) {
      console.error('❌ ERROR GET TIPOS:', err);
      return res.status(500).json(err);
    }
    res.json(results);
  });
});

// POST - crear tipo
router.post('/', (req, res) => {
  const { nombre, descripcion } = req.body;

  if (!nombre) {
    return res.status(400).json({
      error: 'El nombre es obligatorio'
    });
  }

  const sql = `
    INSERT INTO tipos (nombre, descripcion)
    VALUES (?, ?)
  `;

  db.query(
    sql,
    [nombre, descripcion || null],
    (err, result) => {
      if (err) {
        console.error('❌ ERROR POST TIPOS:', err);
        return res.status(500).json(err);
      }

      res.status(201).json({
        mensaje: 'Tipo creado correctamente',
        id: result.insertId
      });
    }
  );
});

module.exports = router;