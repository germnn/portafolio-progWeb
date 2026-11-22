<template>
    <div class="tarjeta">
        <img :src="usuario.picture.medium" :alt="usuario.name.first">
        <div>
            <h3>{{ usuario.name.first}} {{ usuario.name.last }}</h3>
            <p><strong>Edad: </strong>{{ usuario.dob.age }}</p>
            <p><strong>Correo: </strong>{{ usuario.email }}</p>
            <p><strong>Ubicación: </strong>{{usuario.location.city}}, {{usuario.location.country}}</p>
            <p><strong>Teléfono: </strong>{{usuario.phone}}</p>
        </div>
    </div>


</template>


<script setup lang="ts">
import type {Usuario} from "@/interfaces/Usuario"
defineProps<{
    usuario: Usuario
}>()

</script>


<style>
.tarjeta{
    display: flex;
    gap: 10px;
    border: 1px solid grey;
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 10px;
    background-color: lightblue;
}

.tarjeta img{
    width: 150px
}


</style>
