<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Sidebar from '../components/Sidebar.vue';
import "bootstrap/dist/css/bootstrap.min.css";
</script>

<template>
  <Sidebar></Sidebar>
  <div class="page-content">
    <RouterView />
  </div>
</template>
<style scoped>
ul {
  list-style-type: none;
}
ul>li>a {
  display: block;
  padding: 0.5em 0;
  text-decoration: none;
}
</style>


