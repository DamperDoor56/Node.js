const express = require('express');
const app = express();

const port = 3000

//Motor de plantillas

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');



app.get('/', (req, res) => {
    res.render('index', {titulo: "mi titulo dinamico uwu"})
})

app.get('/servicios', (req, res) => {
    res.render("servicios", {tituloServicios: "Un mensaje dinamico de servicios" })
})

app.use((req, res, next) =>{
    res.status(404).render("404", {
        titulo404: "404",
        descripcion: "Titulo del sitio web"
    })
})
app.listen(port, () => {
    console.log('servidor a su servicio en el puerto', port)
})