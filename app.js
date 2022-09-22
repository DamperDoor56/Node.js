const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

//Motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

//Rutas web
app.use('/api', require('./router/rutitas'));

app.use((req, res, next) =>{
    res.status(404).render("404", {
        titulo404: "404",
        descripcion: "Titulo del sitio web"
    })
})
app.listen(port, () => {
    console.log('servidor a su servicio en el puerto', port)
})
