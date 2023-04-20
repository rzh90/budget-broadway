<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';
</script>

<template>
    <Nav />
    <main class="mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <RouterView />
    </main>
    <Footer />
</template>

<style scoped>
</style>
