const Media = require("../models/media");
const Genero = require("../models/genero");
const Director = require("../models/director");
const Productora = require("../models/Productora");
const Tipo = require("../models/Tipo");

const getMedias = async (req, res) => {
  try {
    const medias = await Media.find()
      .populate("genero")
      .populate("director")
      .populate("productora")
      .populate("tipo");

    res.status(200).json(medias);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al obtener las medias",
      error: error.message,
    });
  }
};

const getMediaById = async (req, res) => {
  try {
    const { id } = req.params;

    const media = await Media.findById(id)
      .populate("genero")
      .populate("director")
      .populate("productora")
      .populate("tipo");

    if (!media) {
      return res.status(404).json({ mensaje: "Media no encontrada" });
    }

    res.status(200).json(media);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al buscar la media",
      error: error.message,
    });
  }
};

const postMedia = async (req, res) => {
  try {
    const {
      serial,
      titulo,
      sinopsis,
      url,
      imagen,
      anioEstreno,
      genero,
      director,
      productora,
      tipo,
    } = req.body;

    const existeSerial = await Media.findOne({ serial });
    if (existeSerial) {
      return res.status(400).json({ mensaje: "El serial ya existe" });
    }

    const existeUrl = await Media.findOne({ url });
    if (existeUrl) {
      return res.status(400).json({ mensaje: "La URL ya existe" });
    }

    const generoExiste = await Genero.findById(genero);
    if (!generoExiste || !generoExiste.estado) {
      return res.status(400).json({ mensaje: "Género no válido o inactivo" });
    }

    const directorExiste = await Director.findById(director);
    if (!directorExiste || !directorExiste.estado) {
      return res.status(400).json({ mensaje: "Director no válido o inactivo" });
    }

    const productoraExiste = await Productora.findById(productora);
    if (!productoraExiste || !productoraExiste.estado) {
      return res.status(400).json({ mensaje: "Productora no válida o inactiva" });
    }

    const tipoExiste = await Tipo.findById(tipo);
    if (!tipoExiste) {
      return res.status(400).json({ mensaje: "Tipo no válido" });
    }

    const nuevaMedia = new Media({
      serial,
      titulo,
      sinopsis,
      url,
      imagen,
      anioEstreno,
      genero,
      director,
      productora,
      tipo,
    });

    await nuevaMedia.save();

    res.status(201).json({
      mensaje: "Media creada correctamente",
      media: nuevaMedia,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al crear la media",
      error: error.message,
    });
  }
};

const putMedia = async (req, res) => {
  try {
    const { id } = req.params;
    const datos = req.body;

    const mediaActualizada = await Media.findByIdAndUpdate(id, datos, {
      new: true,
      runValidators: true,
    });

    if (!mediaActualizada) {
      return res.status(404).json({ mensaje: "Media no encontrada" });
    }

    res.status(200).json({
      mensaje: "Media actualizada correctamente",
      media: mediaActualizada,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al actualizar la media",
      error: error.message,
    });
  }
};

const deleteMedia = async (req, res) => {
  try {
    const { id } = req.params;

    const mediaEliminada = await Media.findByIdAndDelete(id);

    if (!mediaEliminada) {
      return res.status(404).json({ mensaje: "Media no encontrada" });
    }

    res.status(200).json({
      mensaje: "Media eliminada correctamente",
      media: mediaEliminada,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al eliminar la media",
      error: error.message,
    });
  }
};

module.exports = {
  getMedias,
  getMediaById,
  postMedia,
  putMedia,
  deleteMedia,
};