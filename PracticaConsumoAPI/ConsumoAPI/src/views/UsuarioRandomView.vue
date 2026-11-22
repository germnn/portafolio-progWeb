<template>
    <div class="contenedor">
        <h1>Usuario Aleatorio</h1>
        <button @click="obtenerUsuario">Obtener Usuario</button>
        <p v-if="cargando">Cargando usuario...</p>
        <Tarjeta v-else-if="usuario" :usuario="usuario"/>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Usuario } from '@/interfaces/Usuario';
import Tarjeta from '@/Components/Tarjeta.vue';

const usuario = ref<Usuario | null>(null)
const cargando = ref<boolean>(false)

async function obtenerUsuario(): Promise<void> {
  cargando.value = true
  try {
    const res = await fetch("https://randomuser.me/api/")
    const data = await res.json()
    console.log("data: ", data)
    usuario.value = data.results[0]
  } catch (e) {
    console.log(e)
  } finally {
    cargando.value = false
  }
}


</script>


<style>
button{
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: darkcyan;
  padding: 4px;
  font-weight: 600;
}

</style>
