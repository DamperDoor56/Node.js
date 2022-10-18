const express = require('express');
const router = express.Router();
const user = require('../models/User');

// Users
router.get('/', async (req, res) =>{ 

    try{
        const arrayUsersDB = await user.find()
        console.log(arrayUsersDB)

         res.render("user", {
            arrayUser : arrayUsersDB
    })
    } catch(error){
        console.log(error)
    }
})
//Post
router.post('/', async (req, res) => { //Datos de usuario
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
