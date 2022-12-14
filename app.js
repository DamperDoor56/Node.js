const express = require('express');
const bodyParser = require('body-parser');
const app = express();

 
//parse application 
app.use(bodyParser.urlencoded({ extended: false }))
//parse application json
app.use(bodyParser.json())

require('dotenv').config()

const port = process.env.PORT || 3000;

//Conexion a base de datos
const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.ciz0tlq.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log('Base de datos conectada'))
    .catch(e => console.log(e))
 
//Motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");
app.use(express.static(__dirname + "/public"));

//Rutas web
app.use('/', require('./router/publicacion'))

app.listen(port, () => {
    console.log('servidor a su servicio en el puerto', port)
})

app.use((req, res, next) =>{
    res.status(404).render("404", {
        titulo404: "404",
        descripcion: "Ruta no encontrada"
    })
})