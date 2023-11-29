<script setup>
import Sidebar from '../components/Sidebar.vue';
</script>
<template>
    <Sidebar></Sidebar>
    <div class="page-content">
        <div class="p-5">
            <RouterView />
        </div>
    </div>
</template>

<style scoped>
.sidebar{
    background-color: #eee;
}
</style>
