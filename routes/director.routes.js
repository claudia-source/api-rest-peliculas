const express = require('express');
const router = express.Router();
const db = require('../config/db');

// GET - listar directores
router.get('/', (req, res) => {
  db.query('SELECT * FROM directores', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
});

// POST - crear director
router.post('/', (req, res) => {
  const { nombres, estado } = req.body;

  const sql = `
    INSERT INTO directores (nombres, estado)
    VALUES (?, ?)
  `;

  db.query(sql, [nombres, estado], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    res.status(201).json({
      mensaje: 'Director creado correctamente',
      id: result.insertId
    });
  });
});

// PUT - actualizar director
router.put('/:id', (req, res) => {
  const { nombres, estado } = req.body;
  const { id } = req.params;

  const sql = `
    UPDATE directores
    SET nombres = ?, estado = ?
    WHERE id = ?
  `;

  db.query(sql, [nombres, estado, id], (err) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    res.json({ mensaje: 'Director actualizado correctamente' });
  });
});

// DELETE - eliminar director
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  db.query('DELETE FROM directores WHERE id = ?', [id], (err) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    res.json({ mensaje: 'Director eliminado correctamente' });
  });
});

module.exports = router;