import { ref } from "vue"
import supabase from "../config/supabaseClient"

function getShows() {
    const shows = ref(null), error = ref(null), orderBy = ref("name"), ascending = ref(true)

    const fetchShows = async() => {
        const {data, err} = await supabase
                .from("shows")
                .select()
                .order(orderBy.value, {ascending: ascending.value})

        if(err) {
            error.value = err
            console.log(error.value)
        }
        if(data) {
            shows.value = data
            shows.value = shows.value.filter(show => show.name !== null)
        }
    }

    return {shows, error, orderBy, ascending, fetchShows}
}

export default getShows