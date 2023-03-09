import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import PageTitle from './PageTitle'
import Link from 'next/link'
import WatchlistCard from './WatchlistCard'

export default function Account({ session }) {
    // account info
    const supabase = useSupabaseClient()
    const user = useUser()
    const userId = user.id

    // watchlist
    const [fetchError, setFetchError] = useState(null)
    const [shows, setShows] = useState(null)
    const [watchlist, setWatchlist] = useState(null)
    const [addashow, setAddashow] = useState(null)

    useEffect(() => {
        getWatchlist()
        getShows()
    }, [])

    async function getWatchlist() {
        const {data, error} = await supabase
                .from("towatch")
                .select()
                .eq("user_id", userId)
                .order("date_added", { ascending: false })

        if(error) {
            setFetchError("Could not fetch data")
            setWatchlist(null)
            console.log("ERROR FETCHING WATCHLIST", error)
        }
        if(data) {
            setWatchlist(data)
            setFetchError(null)
        }
    }

    async function getShows() {
        const {data, error} = await supabase
                .from("shows")
                .select()
                .neq("name", null)
                .order("name")

        if(error) {
            setFetchError("Could not fetch data")
            setShows(null)
            console.log("ERROR FETCHING SHOWS", error)
        }
        if(data) {
            setShows(data)
            setAddashow(data[0].id)
            setFetchError(null)
        }
    }

    async function deleteShow(showId) {
        const {data, error} = await supabase
                .from("watchlist")
                .delete()
                .eq("id", showId)
                .select()
        if(error) {
            console.log("ERROR DELETING SHOW", error)
        }
        if(data) {
            setWatchlist(watchlist.filter(show => show.id !== showId))
            console.log("Deleted", data)
        }
    }

    async function addShow(event) {
        event.preventDefault()

        console.log("added ID", addashow)
        const {data, error} = await supabase
                .from("watchlist")
                .insert({show_id: addashow, user_id: userId})
                .select()
        if(error) {
            console.log("ERROR ADDING SHOW", error)
        }
        if(data) {
            console.log("added", data)
            getWatchlist()
        }
    }
    
    function handleChange(event) {
        setAddashow(event)
    }

    return (
        <div className="mt-12 lg:mt-8"> {/* wrapper */}
            <PageTitle title={"Watchlist"}>Keep track of shows you want to see</PageTitle>

            {/* user */}
            <section className="mt-8 mb-8 items-center flex gap-2 text-sm">
                <p>{session.user.email}</p>
                (<button className="text-bbblue hover:text-bblightblue" onClick={() => supabase.auth.signOut()}>Sign out</button>)
            </section>

            {/* add show */}
            <section className="mb-4">
            <div className="items-center bg-gray-800 border-gray-700 rounded-md p-4 text-sm">
                <h2 className="text-lg font-bold text-white">Add a show</h2>
                <form onSubmit={addShow} className="flex gap-2">
                    <select id="add_show" className="px-3 py-2 text-sm text-white bg-gray-700 rounded-md" onChange={(e) => handleChange(e.target.value)}>
                        {shows && shows.map(show => show.name && (<option key={show.id} value={show.id}>{show.name}</option>))}
                    </select>
                    <input type="submit" className="text-xs font-bold px-3 py-2 text-center text-white bg-bbblue rounded-md hover:bg-bblightblue ring-1 ring-bblightblue hover:ring-bblightblue" value="Add" />
                </form>
            </div>
            </section>

            {/* watchlist */}
            <section className="grid gap-8 mb-4 md:grid-cols-2">
                {watchlist.length ? (
                    watchlist.map(show => (
                    <WatchlistCard key={show.id} show={show} buttonAction={() => {deleteShow(show.id)}} />
                )))
                : (
                    <div>
                        <h2 className="text-lg font-bold text-white">No shows yet</h2>
                        <p className="text-sm">Add a show using the form above</p>
                    </div>
                )}
            </section>
        </div>
    )
}