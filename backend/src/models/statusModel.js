function obtenerEstadoServidor() {
  return {
    ok: true,
    mensaje: 'Backend activo desde Express MVC',
    fechaServidor: new Date().toLocaleString('es-MX', {
      timeZone: 'America/Chihuahua'
    }),
    ambiente: process.env.NODE_ENV || 'development',
    tiempoActivo: Math.round(process.uptime()),
    arquitectura: 'Modelo - Vista - Controlador'
  }
}

function obtenerProductosDemo() {
  return [
    {
      id: 1,
      nombre: 'Módulo de noticias',
      descripcion: 'Ejemplo de información enviada desde el backend MVC.',
      precio: 120
    },
    {
      id: 2,
      nombre: 'Módulo de proyectos',
      descripcion: 'Datos simulados para probar peticiones desde Vue.',
      precio: 250
    },
    {
      id: 3,
      nombre: 'Módulo de eventos',
      descripcion: 'Información generada desde el modelo del backend.',
      precio: 180
    }
  ]
}

module.exports = {
  obtenerEstadoServidor,
  obtenerProductosDemo
}