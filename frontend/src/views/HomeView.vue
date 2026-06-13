<script setup>
import { ref } from 'vue'
import { probarConexionBackend, obtenerProductosDemo } from '@/controllers/backendController'

const cargando = ref(false)
const resultado = ref(null)
const error = ref('')
const productos = ref([])

async function probarBackend() {
  cargando.value = true
  resultado.value = null
  error.value = ''
  productos.value = []

  const respuesta = await probarConexionBackend()

  if (respuesta.error) {
    error.value = respuesta.mensaje
  } else {
    resultado.value = respuesta.data
  }

  cargando.value = false
}

async function cargarProductos() {
  cargando.value = true
  error.value = ''

  const respuesta = await obtenerProductosDemo()

  if (respuesta.error) {
    error.value = respuesta.mensaje
  } else {
    productos.value = respuesta.data
  }

  cargando.value = false
}
</script>

<template>
  <main class="page">
    <section class="hero">
      <p class="tag">Vue PWA + Firebase Hosting + Render</p>

      <h1>Prueba de backend Express MVC en Render</h1>

      <p class="description">
        Esta página prueba una conexión real entre una PWA en Vue y un backend en Node.js
        con Express usando arquitectura MVC.
      </p>

      <div class="actions">
        <button @click="probarBackend" :disabled="cargando">
          {{ cargando ? 'Consultando...' : 'Probar conexión al backend' }}
        </button>

        <button class="secondary" @click="cargarProductos" :disabled="cargando">
          Cargar datos demo
        </button>
      </div>
    </section>

    <section v-if="cargando" class="card loading">
      <h2>Conectando con Render...</h2>
      <p>
        Si el backend estaba inactivo, Render puede tardar en despertarlo.
        Espera a que responda la petición.
      </p>
    </section>

    <section v-if="error" class="card error">
      <h2>Error de conexión</h2>
      <p>{{ error }}</p>
    </section>

    <section v-if="resultado" class="card success">
      <h2>Backend conectado correctamente</h2>

      <div class="grid">
        <div>
          <span>Mensaje</span>
          <strong>{{ resultado.mensaje }}</strong>
        </div>

        <div>
          <span>Tiempo de respuesta</span>
          <strong>{{ resultado.tiempoRespuesta }} ms</strong>
        </div>

        <div>
          <span>Fecha del servidor</span>
          <strong>{{ resultado.fechaServidor }}</strong>
        </div>

        <div>
          <span>Ambiente</span>
          <strong>{{ resultado.ambiente }}</strong>
        </div>

        <div>
          <span>Tiempo activo del backend</span>
          <strong>{{ resultado.tiempoActivo }} segundos</strong>
        </div>

        <div>
          <span>Arquitectura</span>
          <strong>{{ resultado.arquitectura }}</strong>
        </div>
      </div>
    </section>

    <section v-if="productos.length > 0" class="card">
      <h2>Datos recibidos desde el backend</h2>

      <div class="products">
        <article v-for="producto in productos" :key="producto.id" class="product">
          <h3>{{ producto.nombre }}</h3>
          <p>{{ producto.descripcion }}</p>
          <strong>${{ producto.precio }}</strong>
        </article>
      </div>
    </section>
  </main>
</template>