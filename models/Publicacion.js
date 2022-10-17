const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const publiSchema = new Schema({ // El schema de mongoose 
  titulo:  String,
  descripcion: String,
  // user: String
},{
  timestamps: {
  createdAt: 'created_at', // Use `created_at` to store the created date
  updatedAt: 'updated_at' // and `updated_at` to store the last updated date
}});

// Crear el modelo
const publicacion = mongoose.model('publicacion', publiSchema);

module.exports = publicacion;
