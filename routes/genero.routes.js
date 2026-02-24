const express = require('express');
const router = express.Router();
const db = require('../config/db');

// GET - listar géneros
router.get('/', (req, res) => {
  db.query('SELECT * FROM generos', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
});

// POST - crear género
router.post('/', (req, res) => {
  const { nombre, estado, descripcion } = req.body;

  const sql = `
    INSERT INTO generos (nombre, estado, descripcion)
    VALUES (?, ?, ?)
  `;

  db.query(sql, [nombre, estado, descripcion], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    res.status(201).json({
      mensaje: 'Género creado correctamente',
      id: result.insertId
    });
  });
});

module.exports = router;