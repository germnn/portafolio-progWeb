
<template>
  <div class="contenedor">
    <label for="numero">Numero</label>
    <input v-model="numero" id="numero" type="number" placeholder="Numero">
    {{ numero }}
    <button @click="handleAgregar">Agregar</button>
    
    <h3>Lista de numeros</h3>
    <ul>
      <li v-for="(n,index) in arregloNumeros" :key="index">
        {{ n }}
      </li>
    </ul>

    <hr>
    <form @submit.prevent="handleAgregarProducto">
        <label>Producto</label>
        <input v-model="producto.nombre" type="text" placeholder="Producto">
        <label>Descripcion</label>
        <input v-model="producto.descripcion" type="text" placeholder="Descripcion">
        <button>Guardar</button>
    </form>
    {{ producto }}
    <br>
    {{ arregloProductos }}
    <h3>Productos sin existencia: <br> {{ productosSinExistencia.join(", ")}}</h3> <!---El join es para separar y hacer un formato-->


  </div>
</template>

<script setup lang="ts">
  
  import {computed, ref} from "vue";

  const numero = ref<number>(0)
  const arregloNumeros = ref<number[]>([])

  const handleAgregar = () => {
    arregloNumeros.value.push(
      numero.value
    )
    numero.value = 0;
  }

  interface ProductoFormulario {
    nombre: string;
    descripcion: string;
  }

  interface Productos{
    nombre: string;
    descripcion: string;
    existencia: number;    
  }

  const producto = ref<ProductoFormulario> ({
    nombre: "",
    descripcion: ""
  })

  const arregloProductos = ref<Productos[]>([
    {
      nombre: "Zapato", 
      descripcion: "Son para correr",
      existencia: 10
    }
  ])

  const handleAgregarProducto = () => {
    arregloProductos.value.push({
      nombre: producto.value.nombre,
      descripcion: producto.value.descripcion,
      existencia: 0
    })
    producto.value = {
      nombre: "",
      descripcion: ""
    }

  }

  const productosSinExistencia = computed<string[]>(() => {
      return arregloProductos.value.filter( x => !x.existencia)
      .map(x => x.nombre);
  })

</script>



<style scoped>
.contenedor{
  width: 90%;
  margin: 0 auto;
}

input{
  display: block;
  width: 100%;
  padding: 5px;

}

button{
  background-color: lightblue;
  padding: 5px 10px;
  margin: 5px;
  border: none;
  border-radius: 5px;
}

</style>
