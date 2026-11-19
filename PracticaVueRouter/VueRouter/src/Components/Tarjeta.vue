<template>
    <RouterLink :to="`/detalle/${serie.id}`" class="enlace"> <!--: pq se bindea e interpolacion por codigo creo--> 
        <div class="tarjeta">
            <img :src="serie.image.medium" :alt="serie.name">
            <div>
                <h2>{{ serie.name }}</h2>
                <span>{{ serie.status }}</span>
            </div>  
        </div>
    
    </RouterLink>
    
</template>


<script setup lang="ts">
import type {Serie} from "@/interfaces/Serie"
    defineProps<{
        serie: Serie
    }>()
</script>



<style>
.tarjeta{
    display: flex;
    gap: 10px;
    border: 1px solid grey;
    border-radius: 8px;
    padding: 10px;
}

.tarjeta img{
    width: 150px;

}

.enlace{
    text-decoration: none;
    color: black;
}
</style>
