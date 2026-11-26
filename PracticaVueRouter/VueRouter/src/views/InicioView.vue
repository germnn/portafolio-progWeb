<template>
    <!--<TituloPrincipal />-->
    <TituloPrincipal titulo="Series"></TituloPrincipal>
    <!--<button @click="consumirSeries">Cargar series</button>-->
    <div v-if="store.cargando">Cargando....</div>
    <div v-else>
        <Tarjeta 
            v-for="s in store.series" 
            :key="s.id" 
            :serie="s">
        </Tarjeta>
    </div>
    
</template>

<script setup lang="ts">
    import {onMounted} from "vue"
    import TituloPrincipal from '@/Components/TituloPrincipal.vue';
    import Tarjeta from '@/Components/Tarjeta.vue'
    import {useSeriesStore} from "@/stores/series"    
    //import type {Serie} from "@/interfaces/Serie"

    const store = useSeriesStore()

    //const series = ref<Serie[]>([])
    //const cargando = ref<boolean>(false)

    // GET: http://api.tvmaze/com/shows
    /*async function consumirSeries() : Promise<void>{
        cargando.value = true;
        try{
             //fetch ayuda a hacer peticiones a una api
            //Promise va con el async, en algun punto va a llegar algo pero qn sabe cuando
            const res = await fetch("https://api.tvmaze.com/shows")
            const data = await res.json()
            console.log("data: ", data)
            series.value = data;
        }catch(e){
            console.log(e)
        } finally{
            cargando.value = false;
        }
       
    }*/


    onMounted(() => {
        store.consumirSeries()
    })



</script>

<style>
    h1{
        color: green;
    }


</style>

