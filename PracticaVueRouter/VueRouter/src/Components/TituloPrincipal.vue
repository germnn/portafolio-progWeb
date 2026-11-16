<template>
    <h1>{{ titulo }}</h1>

</template>

<script setup lang="ts">
    defineProps<{
        titulo: string //obligatorio que las vistas lo envien
    }>()
</script>

<!--Scoped encierra los estilos solo en este archivo-->
<style scoped> 
    h1{
        color: orange;
    }
</style>