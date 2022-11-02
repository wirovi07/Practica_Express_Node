const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render("mascotas", {
    arrayMascotas: [
      {id: '1', nombre: 'tobby', descripcion: 'tobby descripcion', accion: 'muerde'},
      {id: '2', nombre: 'rex', descripcion: 'rex descripcion', accion: 'aruña'}
    ]
  })
})

module.exports = router;
