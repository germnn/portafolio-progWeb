<template>
  <div class="contenedor">
    <form @submit.prevent="handleAgregarLibro">
      <label>Titulo</label>
      <input v-model="libro.titulo" type="text" placeholder="Titulo">
      <label>Precio</label>
      <input v-model="libro.precio" type="number" step="any" placeholder="0">
      <label>Cantidad disponible</label>
      <input v-model="libro.stock" type="number" placeholder="0">
      <label>Estado</label>
      <select v-model="libro.estado" required>
        <option value="" disabled>Seleccione un estado</option>
        <option value="NUEVO">Nuevo</option>
        <option value="USADO">Usado</option>
      </select>
      <button>Guardar</button>
    </form>
    
    <hr>
    <!--Paso 5-->
    <ul>
      <li v-for="(n, index) in arregloLibros" :key="index" class="libro">
        <div class="linea">
          <div class="titulo">{{ n.titulo }}</div>
          <div :class="{'estado-nuevo': esNuevo(n.estado)}">
            {{ n.estado }}
          </div>
        </div>
        <div class="linea">
          <div>Precio: {{ n.precio }}</div>
          <div>Cantidad disponible: {{ n.stock }}</div>
        </div>
        <div v-if="n.stock < 5" class="linea descuento">
          <div>Descuento</div>
          <div>Precio con descuento: {{ precioConDescuento(n.precio) }}</div>
        </div>
        <button @click="disminuirCantidad(index)">
          Disminuir cantidad
        </button>
      </li>
    </ul>

    <hr>
    <!---Paso 7-->
    <h3>Libros nuevos</h3>
    <ul>
      <li v-for="(n,index) in librosNuevos" :key="index">
        {{n.titulo}}
      </li>
    </ul>

  </div>
    
</template>

<script setup lang="ts">
  import { computed, ref } from "vue"
  
  //Paso 1
  interface Libros{
    titulo: string;
    precio: number;
    stock: number;
    estado: string;
  }

  const libro = ref<Libros>({
    titulo: "",
    precio: 0,
    stock: 0,
    estado: ""
  })

  const arregloLibros = ref<Libros[]>([
    {
    titulo: "100 años de soledad",
    precio: 23.44,
    stock: 3,
    estado: "NUEVO"
    },
    {
    titulo: "Pedro Paramo",
    precio: 55.12,
    stock: 7,
    estado: "USADO"
    }
  ])

  //Paso 3
  const handleAgregarLibro = () =>{
    if (!libro.value.estado) return;

    arregloLibros.value.push({
      titulo: libro.value.titulo,
      precio: libro.value.precio,
      stock: libro.value.stock,
      estado: libro.value.estado
    })
    //Paso 4
    libro.value = {
      titulo: "",
      precio: 0,
      stock: 0,
      estado: ""
    }

  }

  const disminuirCantidad = (index: number) =>{
    const item = arregloLibros.value[index]
    if (item && item.stock > 0) {
      item.stock -= 1
    }
  }

  const esNuevo = (estado: string) => estado === "NUEVO"

  const precioConDescuento = (precio: number) => (precio * 0.8).toFixed(2)

  // Paso 6
  const librosNuevos = computed<Libros[]>(() => {
    return arregloLibros.value.filter(l => l.estado === "NUEVO")
  })

</script>

<style scoped>
.contenedor{
  width: 90%;
  margin: 0 auto;
}

input, select{
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

ul{
  list-style: none;
  padding: 0;
}

.libro{
  border: 1px solid;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
}

.linea{
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
}

.titulo{
  font-weight: bold;
}

.estado-nuevo{
  color: green;
  font-weight: bold;
}

.descuento{
  color: orange;
}

</style>

<style>
:root{
  font-family: Arial, Helvetica, sans-serif;
}
</style>
