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
    try{
        const publiDB = new publicacion(body)
        await publiDB.save()

        console.log(publiDB)
    } catch (error){
        console.log(error)
    }
})

module.exports = router;