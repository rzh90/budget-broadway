<template>
    

    <!-- wrapper -->
    <div class="mt-12 lg:mt-8">

        <!-- heading -->
        <PageTitle title="Get Tickets">Click on a link to get discounted tickets for a Broadway show</PageTitle>

        <!-- sort buttons -->
        <section class="mt-8 mb-8 items-center flex gap-2 text-sm">
            <span>Sort by: </span>
            <button className="border border-gray-500 rounded-md px-3 py-1 hover:border-gray-400" @click="sortShowAsc()">Show &#8593;</button>
            <button className="border border-gray-500 rounded-md px-3 py-1 hover:border-gray-400" @click="sortShowDes()">Show &#8595;</button>
            <button className="border border-gray-500 rounded-md px-3 py-1 hover:border-gray-400" @click="sortLoc()">Location</button>
        </section>

        <!-- shows -->
        <section v-if="error">{{ error }}</section>
        <section v-if="shows">
            <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                <ShowCard v-for="show in shows" :key="show.id" :show=show />
            </div>
        </section>
    </div>
</template>

<script>
import { watch, ref } from "vue"
import getShows from "../composables/getShows"
import PageTitle from "../components/PageTitle.vue"
import ShowCard from "../components/ShowCard.vue"

export default {
    name: "HomeView",
    components: { PageTitle, ShowCard },
    setup() {        
        const {shows, error, orderBy, ascending, fetchShows} = getShows()
        fetchShows()

        watch([orderBy, ascending], (currentValue, oldValue) => {
            fetchShows()
        })

        function getImageUrl(show) {
            return `${show.location.replaceAll(".", "").split(" ").join("")}.jpg`
        }

        function sortShowAsc() {
            orderBy.value = "name"
            ascending.value = true
        }
        function sortShowDes() {
            orderBy.value = "name"
            ascending.value = false
        }
        function sortLoc() {
            orderBy.value = "location"
            ascending.value = true
        }

        return {shows, error, getImageUrl, sortShowAsc, sortShowDes, sortLoc}
    }
}
</script>

<style>
</style>