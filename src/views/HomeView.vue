<template>
    <div className="mt-12 lg:mt-8">
        <div className="text-center">
            <h1 className="text-4xl text-bbblue mb-2">Get Tickets</h1>
            <p className="text-xl">Discounted tickets for Broadway shows</p>
        </div>

        <div v-if="error">{{ error }}</div>
        <div v-if="shows">
            <div v-for="show in shows" :key="show.id">
                <p>{{ show.name }}</p>
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