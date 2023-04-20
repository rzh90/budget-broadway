<template>
    <!-- rush ticket modal -->
    <div class="bg-gray-900 bg-opacity-75 transition-opacity h-screen w-full fixed top-0 left-0 right-0 z-10" v-if="openRush">
        <div class="bg-gray-800 p-5 rounded-md m-auto mt-52 sm:w-full sm:max-w-lg">
            <h3 class="text-base font-semibold leading-6 text-white">General rush</h3>
            <p className="text-sm text-white">A limited number of general rush tickets will be available to purchase at the box office on the day of the performance.</p>
            <div class="bg-gray-800 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button type="button" class="inline-flex w-full justify-center rounded-md border border-transparent bg-gray-700 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-600 ring-1 ring-gray-600 hover:ring-gray-500 sm:ml-3 sm:w-auto sm:text-sm" @click="toggleRush">OK</button>
            </div>
        </div>
    </div>

    <!-- wrapper -->
    <div class="mt-12 lg:mt-8">

        <!-- heading -->
        <section class="text-center">
            <h1 class="text-3xl text-bbblue mb-2">Get Tickets</h1>
            <p>Click on a link to get discounted tickets for a Broadway show</p>
        </section>

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
                <div class="items-center bg-gray-800 border border-gray-700 rounded-md flex" v-for="show in shows" :key="show.id">
                    <img class="w-28 rounded-md" :src="'src/assets/playbills/' + getImageUrl(show)" :alt="show.name" />
                    <div class="p-5 text-sm">
                        <h2 class="text-base font-bold text-white">{{ show.name }}</h2>
                        <p>{{ show.location }} Theater</p>
                        <p>{{ show.address }}</p>
                        <p class="text-bbblue font-bold" v-if="show.closes">Closes {{ show.closes.replaceAll("-", "/") }}</p>

                        <ul className="lg:flex lg:space-x-4 mt-4 space-y-6 lg:space-y-0">
                            <li v-if="show.rush_link"><a :href="show.rush_link" class="px-3 py-2 text-xs font-bold text-center text-white bg-gray-700 rounded-md hover:bg-gray-600 ring-1 ring-gray-600 hover:ring-gray-500">${{ Number.isInteger(show.rush) ? show.rush : show.rush + '0' }} Rush</a></li>
                            <li v-if="show.gen_rush"><button class="px-3 py-2 text-xs font-bold text-center text-white bg-gray-700 rounded-lg hover:bg-gray-600 ring-1 ring-gray-600 hover:ring-gray-500" @click="toggleRush">${{ show.rush }} Rush</button></li>
                            <li v-if="show.lottery"><a :href="show.lottery_link" class="px-3 py-2 text-xs font-bold text-center text-white bg-gray-700 rounded-md hover:bg-gray-600 ring-1 ring-gray-600 hover:ring-gray-500">${{ Number.isInteger(show.lottery) ? show.lottery : `${show.lottery}0` }} Lottery</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { watch, ref } from "vue"
import getShows from "../composables/getShows"

export default {
    name: "HomeView",
    setup() {
        const openRush = ref(false)
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

        function toggleRush() {
            openRush.value = !openRush.value
            console.log(openRush.value)
        }

        return {shows, error, getImageUrl, sortShowAsc, sortShowDes, sortLoc, openRush, toggleRush}
    }
}
</script>

<style>
</style>