export function crearResultadoBackend(data, tiempoRespuesta) {
  return {
    ok: data.ok || false,
    mensaje: data.mensaje || 'Sin mensaje',
    fechaServidor: data.fechaServidor || 'Sin fecha',
    ambiente: data.ambiente || 'No definido',
    tiempoActivo: data.tiempoActivo || 0,
    arquitectura: data.arquitectura || 'No especificada',
    tiempoRespuesta
  }
}