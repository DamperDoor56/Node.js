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

router.get('/crear', (req, res) => {
    res.render('crear')
})
router.post('/', async (req, res) => {
    const body = req.body
    console.log(body)
})

module.exports = router;