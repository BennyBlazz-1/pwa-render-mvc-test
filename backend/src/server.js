const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

const statusRoutes = require('./routes/statusRoutes')

dotenv.config()

const app = express()

const PORT = process.env.PORT || 3000

const allowedOrigins = [
  'http://localhost:5173',
  process.env.FRONTEND_URL
].filter(Boolean)

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true)
      } else {
        callback(new Error('No permitido por CORS'))
      }
    }
  })
)

app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    ok: true,
    mensaje: 'Backend Express MVC funcionando correctamente',
    rutas: ['/api/status', '/api/productos']
  })
})

app.use('/api', statusRoutes)

app.use((req, res) => {
  res.status(404).json({
    ok: false,
    mensaje: 'Ruta no encontrada'
  })
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`)
})