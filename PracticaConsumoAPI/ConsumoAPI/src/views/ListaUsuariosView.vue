<template>
    <div>
        <h1>Listado de Usuarios</h1>
        <div v-if="cargando">Cargando...</div>
        <div v-else>
            <Tarjeta 
                v-for="(u, index) in usuarios"
                :key="index"
                :usuario="u">
            </Tarjeta>
        </div>
    </div>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type {Usuario} from "@/interfaces/Usuario"
import Tarjeta from '@/Components/Tarjeta.vue';

const usuarios = ref<Usuario[]>([])
const cargando = ref<boolean>(false)

async function consumirUsuarios(): Promise<void>{
    cargando.value = true;
    try{
        const res = await fetch ("https://randomuser.me/api/?results=30")
        const data = await res.json()
        console.log("data: ", data)
        usuarios.value = data.results
    }catch(e){
        console.log(e)
    }finally{
        cargando.value=false
    }
}

onMounted(() => {
    consumirUsuarios();
})
</script>

<style>

</style>