const express = require('express');
const router = express.Router();
const publicacion = require('../models/Publicacion');

router.get('/', async (req, res) =>{

    try{
        const arraypublicacionesDB = await publicacion.find()
        console.log(arraypublicacionesDB)

         res.render("publicacion", {
            arrayPublicaciones : arraypublicacionesDB
    })
    } catch(error){
        console.log(error)
    }

   
})

module.exports = router;