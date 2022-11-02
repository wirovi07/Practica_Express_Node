const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render("app", {titulo : "mi titulo dinámico"})
})

router.get('/servicios', (req, res) => {
  res.render("servicios", {tituloSevicios : "Esta es mi pagina de servicios"})
})

module.exports = router;
