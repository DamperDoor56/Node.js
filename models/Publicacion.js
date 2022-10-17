const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const publiSchema = new Schema({ // El schema de mongoose 
  titulo:  String,
  descripcion: String,
  createdAt: Date,
  updatedAt: Date
},{
  timestamps: true 
});

// Crear el modelo
const publicacion = mongoose.model('publicacion', publiSchema);

module.exports = publicacion;

