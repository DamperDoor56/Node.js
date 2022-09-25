const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const publiSchema = new Schema({
  titulo:  String,
  descripcion: String
});

// Crear el modelo
const publicacion = mongoose.model('publicacion', publiSchema);

module.exports = publicacion;
