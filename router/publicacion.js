const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.render("publicacion", {
        arrayPublicaciones : [
            {id: '1', Titulo : 'Etecse', Descripcion: 'Pepe'},
            {id: '2', Titulo : 'Esteo', Descripcion: 'LKJDLKSJ'},
            {id: '3', Titulo : 'Numesale',  Descripcion: 'Agente47'}
        ]
    })
})

module.exports = router;