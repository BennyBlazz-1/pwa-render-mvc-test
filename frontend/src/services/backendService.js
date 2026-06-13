const API_URL = import.meta.env.VITE_API_URL

export async function consultarBackend() {
  const inicio = performance.now()

  const respuesta = await fetch(`${API_URL}/api/status`)

  if (!respuesta.ok) {
    throw new Error('El backend respondió con un error')
  }

  const data = await respuesta.json()
  const fin = performance.now()

  return {
    data,
    tiempoRespuesta: Math.round(fin - inicio)
  }
}

export async function consultarProductos() {
  const respuesta = await fetch(`${API_URL}/api/productos`)

  if (!respuesta.ok) {
    throw new Error('No se pudieron obtener los productos')
  }

  return await respuesta.json()
}