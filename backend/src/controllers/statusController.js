const {
  obtenerEstadoServidor,
  obtenerProductosDemo
} = require('../models/statusModel')

function statusBackend(req, res) {
  const estado = obtenerEstadoServidor()

  res.json(estado)
}

function productosDemo(req, res) {
  const productos = obtenerProductosDemo()

  res.json({
    ok: true,
    mensaje: 'Productos obtenidos correctamente',
    data: productos
  })
}

module.exports = {
  statusBackend,
  productosDemo
}