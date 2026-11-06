
<template>
  <h1>{{ titulo }}</h1>
  <h2 v-bind:style="styleColor">Vue</h2>
  <h3 :style="`color: ${color}`">V-bind</h3>
  
  <p v-if="mostrar">Texto para condicional</p> <!---No usar en cosas muy cambiantes, consume muchos recursos, mejor usar en esos casos v-show-->
  <p v-else-if="mostrar === false">Mostrar es falso</p>
  <p v-else>Mostrar es indefinido</p> <!--debe estar directamente abajo de v-if-->
  
  <p v-show="mostrar">Texto con v-show</p>
  
  <!---Lista sin for-->
  <h4>{{ listaFrutas[0] }}</h4>
  <!---Lista con for-->
  <h3>Lista de frutas</h3>
  <ul>
    <li v-for="(fruta,index) in listaFrutas" key="index"> <!--El key es para poder darle click a uno de la lista y poder identificarlo-->
      {{index+1}} - {{ fruta }}
    </li>
  </ul>

  <div v-for="(f, idx) in Frutas" :key="`${idx}.${f.nombre}`">
    <div class="tarjetaf`">
      <h4>{{ f.nombre }} - ${{f.precio}}</h4>
      <span>Cantidad: {{ f.cantidad }}</span>
    </div>
  </div>

</template>

<script setup lang="ts">

const titulo = "Directivas";
const styleColor = "color: green";
const color = "green";

let mostrar: boolean = true;

const listaFrutas: string[] = [
  "Manzana",
  "Fresa",
  "Naranja",
  "Uva",
  "Papaya"
]

interface Fruta{
  nombre: string,
  precio: number,
  cantidad: number
}

const Frutas: Fruta[] = [
  {
    nombre: "manzana",
    precio: 10,
    cantidad: 12
  },
  {
    nombre: "Fresa",
    precio: 4,
    cantidad: 20
  },
  {
    nombre: "Naranja",
    precio: 8,
    cantidad: 6
  }
]

</script>

<style scoped>
  .tarjetaf{
    border: 2px solid;
    padding: 5px;
    margin: 10px 0;
  }
</style>
