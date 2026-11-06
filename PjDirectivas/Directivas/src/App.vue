
<template>
  <h1>{{ titulo }}</h1> <!---Interpolacion, se puede poner codigo ahi-->
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

  <button v-on:click="handleClick(2)">Dame click</button> <!--Escuchador--->
  <button @click="handleClick(3)">Dame clickkk 2</button> <!--Escuchador igual que arriba, mas comun con @--->



  <hr>
  <br><br><br>

  <!--<h2 :style="contador < 0 ? 'color:red' : 'color: green'">{{ contador }}</h2>
  <h2 v-if="contador === 0">{{ contador }}</h2>
  <h2 v-else-if="contador > 0" style="color:green">{{ contador }}</h2>
  <h2 v-else="contador > 0" style="color:red">{{ contador }}</h2>
  -->
  <!---PROPIEDADES COMPUTADAS: funcion que retorna algo-->
  <h2 :style="estiloColor">{{ contador }}</h2> <!---Es la forma correcta para cambiar el color, etc-->
  <button @click="handleIncrementar">Incrementar</button>
  <button @click="handleResetear()">Resetear contador</button>
  <button @click="handleDecrementar()">Decrementar contador</button>

  <!------>

</template>

<script setup lang="ts">
import {ref, computed} from "vue"; //para la reactividad, la maneja como un objeto, variable.value. Computed para las variables computadas
//detectar cambios en variable y renderizarlo en el navegador para detectar ese cambio.


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

const handleClick = (numero: number) => {
  alert("Hiciste click "+numero)
}

const contador = ref<number>(0);


const handleIncrementar = () => {
  console.log("Se incremento contador")
  contador.value++;
  console.log("Contador: ",contador);
  
}

/* 
1. Funcion para resetear a 0 
2. Funcionm para decrementar --
3. Pintar en rojo el numero si es menor a 0 
   y de verde si es mayor a 0.
*/

const handleResetear = () =>  {
  contador.value = 0;
}

const handleDecrementar = () => {
  contador.value--;
}

const estiloColor = computed<string>(() => {
  if(contador.value > 0) {
    return "color: green";
  }else if (contador.value < 0){
    return "color: red";
  }else {
    return "color: black";
  }
})

/*
const colorContador = true;
if(contador.value < 0){
  colorContador = false;
}else{
  colorContador = true;
}
*/

</script>

<style scoped>
  .tarjetaf{
    border: 2px solid;
    padding: 5px;
    margin: 10px 0;
  }
</style>
