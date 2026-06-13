import { crearResultadoBackend } from '@/models/backendModel'
import { consultarBackend, consultarProductos } from '@/services/backendService'

export async function probarConexionBackend() {
  try {
    const resultado = await consultarBackend()

    return {
      error: false,
      data: crearResultadoBackend(resultado.data, resultado.tiempoRespuesta)
    }
  } catch (error) {
    return {
      error: true,
      mensaje: 'No se pudo conectar con el backend. Si está en Render gratis, puede estar despertando.'
    }
  }
}

export async function obtenerProductosDemo() {
  try {
    const resultado = await consultarProductos()

    return {
      error: false,
      data: resultado.data
    }
  } catch (error) {
    return {
      error: true,
      mensaje: 'No se pudieron cargar los productos.'
    }
  }
}