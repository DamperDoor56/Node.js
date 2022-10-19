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
        const userdb = new user(body)
        await userdb.save()
        res.redirect('/')

        console.log(userdb)
    } catch (error){
        console.log(error)
    }
})
//id
router.get('/:id', async(req, res) =>{
    const id = req.params.id

    try{
        const userDB = await user.findOne({ _id: id })
        console.log(userDB)

        res.render('cabecera',{
            user: userDB,
            error: false
        })
    }
    catch(error){
        console.log(error)
        res.render('cabecera',{
            error: true,
            message: "No se encuentra el id"
        })
    }
})
