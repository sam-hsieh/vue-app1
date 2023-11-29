<script setup>
import {} from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute();
console.log(route.params.id)

</script>

<template>
    <div class="p-5">
        <h1>{{ route.params.id }}</h1>
    </div>
    
</template>

<style scoped>
</style>
