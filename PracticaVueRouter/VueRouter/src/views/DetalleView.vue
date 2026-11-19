<template>
    <!--<TituloPrincipal />-->
    <TituloPrincipal titulo="Detalle de Serie"></TituloPrincipal>

    <RouterLink to="/">Regresar</RouterLink>

    <div v-if="cargando">Cargando...</div>
    <div v-if="serie"> 
        <h2>{{ serie.name }}</h2>
        <img :src="serie.image.original" :alt="serie.name">
        
        <h4>Estado</h4>
        <div>{{ serie.status }}</div>

        <h4>Generos</h4>
        <div>{{ serie.genres.join(", ") }}</div>

        <h4>Calificacion</h4>
        <div>{{ serie.rating.average }}</div>

    </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from "vue"
import TituloPrincipal from '@/Components/TituloPrincipal.vue';
import {useRoute} from "vue-router"
import type { Serie } from "@/interfaces/Serie" // como es interfaz ocupa el type
    
const serie = ref<Serie | null>(null)
const cargando = ref<boolean>(false);

// Acceder a los parametros de la ruta
const route = useRoute()

async function consumirSerie(): Promise<void>{
    cargando.value = true;
    try{
        const id = route.params.id
        const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
        const data: Serie = await res.json()
        serie.value = data
    }catch(e){
        console.log("Error: ", e)
    }finally{
        cargando.value = false;
    }
}

onMounted(() => {
    consumirSerie();
})



</script>


<style>
img{
    width: 30%;
}

</style>