import { ref } from "vue"
import supabase from "../config/supabaseClient"

function getShows() {
    const shows = ref(null), error = ref(null)
    let orderBy = "name", ascending = true

    const fetchShows = async() => {
        const {data, err} = await supabase
                .from("shows")
                .select()
                .order(orderBy, {ascending})

        if(err) {
            error.value = err
            console.log(error.value)
        }
        if(data) {
            console.log(data)
            shows.value = data
            shows.value = shows.value.filter(show => show.name !== null)
        }
    }

    return {shows, error, fetchShows}
}

export default getShows