const express = require('express');
const router = express.Router();

router.get('/servicios', (req, res) => {
    res.render("servicios", {tituloServicios: "Este es un mensaje dinamico de servicios"})
})


module.exports = router;