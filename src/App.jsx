import "./App.css"
import { useEffect, useState } from "react"
import supabase from "./config/supabaseClient"

import ShowCard from "./components/ShowCard"

function App() {
    // const shows = [
    //     {id: 1, name: "KPOP", location: "Circle in the Square"},
    //     {id: 2, name: "Harry Potter", location: "Lyric"},
    //     {id: 3, name: "Wicked", location: "Gershwin"}
    // ]
    const [fetchError, setFetchError] = useState(null)
    const [shows, setShows] = useState(null)

    useEffect(() => {
        const fetchShows = async() => {
            const {data, error} = await supabase
                .from("shows")
                .select()

            if(error) {
                setFetchError("Could not fetch data")
                setShows(null)
                console.log(error)
            }
            if(data) {
                setShows(data)
                setFetchError(null)
            }
        }
        fetchShows()
    }, [])

    return (
        <div>
            <h1>Budget Broadway</h1>
            {fetchError && (<p>{fetchError}</p>)}

            {shows && (
                <div className="shows">
                    {/* order-by buttons */}
                    <div className="shows-grid">
                        {shows.map(show => (
                            <ShowCard key={show.id} show={show} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default App