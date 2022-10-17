const express = require('express');
const router = express.Router();
const publicacion = require('../models/Publicacion');
const user = require('../models/User');


//Ruta de get info
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
//Ruta de creacion
router.get('/crear', (req, res) => { 
    res.render('crear')
})

router.post('/', async (req, res) => { //Datos de publicacion
    const body = req.body
    try{
        const publiDB = new publicacion(body)
        await publiDB.save()
        res.redirect('/')

        console.log(publiDB)
    } catch (error){
        console.log(error)
    }
})
//id
router.get('/:id', async(req, res) =>{
    const id = req.params.id

    try{
        const publicacionDB = await publicacion.findOne({ _id: id })
        console.log(publicacionDB)

        res.render('details',{
            publicacion: publicacionDB,
            error: false
        })
    }
    catch(error){
        console.log(error)
        res.render('details',{
            error: true,
            message: "No se encuentra el id"
        })
    }
})

//Delete
router.delete('/:id', async(req, res) =>{
    const id = req.params.id
    console.log('id from backend', id)

    try{
        const publicacionDB = await publicacion.findByIdAndRemove({ _id: id })
        
        if(publicacionDB){
            res.json({
                state: true,
                message: 'succesfully deleted!'
            })
        } else {
            res.json({
                state: false,
                message: 'Error!'
            })
        }
    }
    catch(error){

    }
})

//Update content 
router.put('/:id', async(req, res) => {
    const id = req.params.id
    const body = req.body

    try{
        const publiDB = await publicacion.findByIdAndUpdate(
            id, body, { useFindAndModify: false } //Documentation recomended this
        )
        console.log(publiDB)
        
        res.json({
            state:true,
            message: 'Updated!'
        })
    } 
    catch(error){
        console.log(error)
    }
})

module.exports = router;