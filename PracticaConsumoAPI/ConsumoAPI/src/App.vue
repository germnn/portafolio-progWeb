<template>
  <div class="menu">
      <RouterLink to="/">Usuario Aleatorio</RouterLink>
      <div><strong>|</strong></div>
      <RouterLink to="/ListaUsuarios">Lista de Usuarios</RouterLink>
  </div>
  <RouterView/>
</template>

<script setup lang="ts">

</script>

<style scoped>
.menu{
  display: flex;
  justify-content: center;
  gap: 12px;
  padding: 14px;
  background-color: darkcyan;
}

.menu a{
  text-decoration: none;
  color: black;
  font-weight: bold;
}
</style>

<style>
body{
  font-family: Arial, Helvetica, sans-serif;
}
</style>
