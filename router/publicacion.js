const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.render("publicacion", {
        arrayPublicaciones : [
            {id: '1', Titulo : 'Etecse', Descripcion: 'Pepe'},
            {id: '2', Titulo : 'Etecse', Descripcion: 'Pepe'},
            {id: '3', Titulo : 'Etecse',  Descripcion: 'Pepe'}
        ]
    })
})

module.exports = router;