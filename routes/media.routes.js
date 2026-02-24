const express = require('express');
const router = express.Router();
const db = require('../config/db');

// GET - listar media con relaciones
router.get('/', (req, res) => {
  const sql = `
    SELECT 
      m.id,
      m.serial,
      m.titulo,
      m.anio_estreno,
      g.nombre AS genero,
      d.nombres AS director,
      p.nombre AS productora,
      t.nombre AS tipo
    FROM media m
    JOIN generos g ON m.genero_id = g.id
    JOIN directores d ON m.director_id = d.id
    JOIN productoras p ON m.productora_id = p.id
    JOIN tipos t ON m.tipo_id = t.id
  `;

  db.query(sql, (err, results) => {
    if (err) {
      console.error('❌ ERROR GET MEDIA:', err);
      return res.status(500).json(err);
    }
    res.json(results);
  });
});


// POST - crear película o serie
router.post('/', (req, res) => {
  const {
    serial,
    titulo,
    sinopsis,
    url,
    imagen,
    anio_estreno,
    genero_id,
    director_id,
    productora_id,
    tipo_id
  } = req.body;

  if (!serial || !titulo || !genero_id || !director_id || !productora_id || !tipo_id) {
    return res.status(400).json({
      error: 'Faltan campos obligatorios'
    });
  }

  const sql = `
    INSERT INTO media
    (serial, titulo, sinopsis, url, imagen, anio_estreno, genero_id, director_id, productora_id, tipo_id)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      serial,
      titulo,
      sinopsis || null,
      url || null,
      imagen || null,
      anio_estreno || null,
      genero_id,
      director_id,
      productora_id,
      tipo_id
    ],
    (err, result) => {
      if (err) {
        console.error('❌ ERROR POST MEDIA:', err);
        return res.status(500).json(err);
      }

      res.status(201).json({
        mensaje: 'Media creada correctamente',
        id: result.insertId
      });
    }
  );
});

module.exports = router;