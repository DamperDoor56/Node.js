const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.render("publicacion", {
        arrayPublicaciones : [
            {id: '1', titulo : 'Etecse', descripcion: 'Pepe'},
            {id: '2', titulo : 'Esteo', descripcion: 'LKJDLKSJ'},
            {id: '3', titulo : 'Numesale',  descripcion: 'Agente47'}
        ]
    })
})

module.exports = router;