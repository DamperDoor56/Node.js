const { application } = require('express');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("index", {titulo: "mi titulo dinamico uwu"})
})

router.get('/servicios', (req, res) => {
    res.render("servicios", {tituloServicios: "Un mensaje dinamico de servicios" })
})

module.exports = router;