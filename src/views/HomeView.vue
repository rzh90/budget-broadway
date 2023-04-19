<template>
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
            <button className="border border-gray-500 rounded-md px-3 py-1 hover:border-gray-400">Show &#8593;</button>
            <button className="border border-gray-500 rounded-md px-3 py-1 hover:border-gray-400">Show &#8595;</button>
            <button className="border border-gray-500 rounded-md px-3 py-1 hover:border-gray-400">Location</button>
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
                            <button v-if="show.gen_rush" class="px-3 py-2 text-xs font-bold text-center text-white bg-gray-700 rounded-lg hover:bg-gray-600 ring-1 ring-gray-600 hover:ring-gray-500">${{ show.rush }} Rush</button>
                            <li v-if="show.lottery"><a :href="show.lottery_link" class="px-3 py-2 text-xs font-bold text-center text-white bg-gray-700 rounded-md hover:bg-gray-600 ring-1 ring-gray-600 hover:ring-gray-500">${{ Number.isInteger(show.lottery) ? show.lottery : `${show.lottery}0` }} lottery</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import getShows from "../composables/getShows"

export default {
    name: "HomeView",
    setup() {
        const {shows, error, fetchShows} = getShows()
        fetchShows()

        function getImageUrl(show) {
            return `${show.location.replaceAll(".", "").split(" ").join("")}.jpg`
        }

        return {shows, error, getImageUrl}
    }
}
</script>