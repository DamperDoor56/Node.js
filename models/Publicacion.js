const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const publiSchema = new Schema({ // El schema de mongoose 
  titulo:  String,
  descripcion: String,
  createdAt: Date,
  updatedAt: Date
},{
  timestamps: {
  createdAt: 'created_at', // Use `created_at` to store the created date
  updatedAt: 'updated_at' // and `updated_at` to store the last updated date
}});

const userSchema = new Schema({
  username: String
});

// Crear el modelo
const publicacion = mongoose.model('publicacion', publiSchema);
const user = mongoose.model('user', userSchema);

module.exports = publicacion;
module.exports = user;
