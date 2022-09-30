const express = require('express');
const router = express.Router();

router.get('/servicios', (req, res) => { //Esta ruta lleva a la pagina de servicio
    res.render("servicios", {tituloServicios: "Este es un mensaje dinamico de servicios"})
})


module.exports = router;