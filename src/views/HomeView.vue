<template>
    <div class="mt-12 lg:mt-8">
        <div class="text-center">
            <h1 class="text-4xl text-bbblue mb-2">Get Tickets</h1>
            <p class="text-xl">Discounted tickets for Broadway shows</p>
        </div>

        <div v-if="error">{{ error }}</div>

        <div v-if="shows">
            <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                <div class="items-center bg-gray-800 border border-gray-700 rounded-md flex" v-for="show in shows" :key="show.id">
                    <div class="p-5">
                        <h2 class="text-xl font-bold text-white">{{ show.name }}</h2>
                        <p>{{ show.location }} Theater</p>
                        <p>{{ show.address }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import getShows from "../composables/getShows"
export default {
    name: "HomeView",
    setup() {
        const {shows, error, fetchShows} = getShows()

        fetchShows()

        return {shows, error}
    }
}
</script>