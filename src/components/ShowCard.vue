<template>
    <div class="items-center bg-gray-800 border border-gray-700 rounded-md flex">
        <img class="w-28 rounded-md" :src="'src/assets/playbills/' + getImageUrl(show)" :alt="show.name" />
        <div class="p-5 text-sm">
            <h2 class="text-base font-bold text-white">{{ show.name }}</h2>
            <p>{{ show.location }} Theater</p>
            <p>{{ show.address }}</p>
            <p class="text-bbblue font-bold" v-if="show.closes">Closes {{ show.closes.replaceAll("-", "/") }}</p>

            <ul className="lg:flex lg:space-x-4 mt-4 space-y-6 lg:space-y-0"> 
                <li v-if="show.lottery"><DiscountButton :discountAmt="show.lottery" discountType="Lottery" :link="show.lottery_link" /></li>
                <li v-if="show.rush_link"><DiscountButton :discountAmt="show.rush" discountType="Rush" :link="show.rush_link" /></li>
                <li v-if="show.gen_rush"><button class="px-3 py-2 text-xs font-bold text-center text-white bg-gray-700 rounded-lg hover:bg-gray-600 ring-1 ring-gray-600 hover:ring-gray-500" @click="toggleRush">${{ show.rush }} Rush</button></li>
            </ul>
        </div>
    </div>

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
</template>

<script>
import { ref } from "vue"
import DiscountButton from "../components/DiscountButton.vue"

export default {
    props: ["show"],
    components: {DiscountButton},
    setup() {
        const openRush = ref(false)

        function getImageUrl(show) {
            return `${show.location.replaceAll(".", "").split(" ").join("")}.jpg`
        }

        function toggleRush() {
            openRush.value = !openRush.value
            console.log(openRush.value)
        }

        return {openRush, getImageUrl, toggleRush}
    }
}
</script>