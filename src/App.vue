<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Nav from './components/Nav.vue';
</script>

<template>
    <Nav />
    <main className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <RouterView />
    </main>
</template>

<style scoped>
</style>
