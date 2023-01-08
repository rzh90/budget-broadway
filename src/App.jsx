import "./App.css"
import { useEffect, useState } from "react"
import supabase from "./config/supabaseClient"

import ShowCard from "./components/ShowCard"

function App() {
    const [fetchError, setFetchError] = useState(null)
    const [shows, setShows] = useState(null)
    const [orderBy, setOrderBy] = useState("name")
    const [ascending, setAscending] = useState(true)

    useEffect(() => {
        const fetchShows = async() => {
            const {data, error} = await supabase
                .from("shows")
                .select()
                .order(orderBy, {ascending})

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
    }, [orderBy, ascending])

    return (
        <div>
            <h1>Budget Broadway</h1>
            {fetchError && (<p>{fetchError}</p>)}

            {shows && (
                <div className="shows">
                    <div className="order-by">
                        <p>Order by:</p>
                        <button onClick={() => {
                            setOrderBy("name")
                            setAscending(true)
                        }}>Name (asc)</button>
                        
                        <button onClick={() => {
                            setOrderBy("name")
                            setAscending(false)
                        }}>Name (desc)</button>
                        
                        <button onClick={() => {
                            setOrderBy("location")
                            setAscending(true)
                        }}>Location</button>
                    </div>
                    
                    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                            {shows.map(show => show.name && (
                                <ShowCard key={show.id} show={show} />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default App