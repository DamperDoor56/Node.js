const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String
  });

// Crear el modelo  
const user = mongoose.model('user', userSchema);

module.exports = user;