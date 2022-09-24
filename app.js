const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

//Conexion a base de datos
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test',
     {useNewUrlParser: true, useUnifiedTopology: true}
);

const user = '';
const password = '';
const uri = '';

//Motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");
app.use(express.static(__dirname + "/public"));

//Rutas web
app.use('/ ', require('./router/rutitas'));
app.use('/publicacion', require('./router/publicacion'))

app.listen(port, () => {
    console.log('servidor a su servicio en el puerto', port)
})
app.use((req, res, next) =>{
    res.status(404).render("404", {
        titulo404: "404",
        descripcion: "Titulo del sitio web"
    })
})