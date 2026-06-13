const express = require('express')
const router = express.Router()

const {
  statusBackend,
  productosDemo
} = require('../controllers/statusController')

router.get('/status', statusBackend)
router.get('/productos', productosDemo)

module.exports = router