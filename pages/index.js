import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

//React states and Supabase
import { useEffect, useState } from 'react'
import supabase from '@/config/supabaseClient'

//components
import ShowCard from '@/components/ShowCard'
import SortButton from '@/components/SortButton'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [fetchError, setFetchError] = useState(null)
    const [shows, setShows] = useState(null)
    const [orderBy, setOrderBy] = useState("name")
    const [ascending, setAscending] = useState(true)

    // fetch data from server
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
        <>
            {/* display error */}
            {fetchError && (<p>{fetchError}</p>)}

            {/* display shows */}
            {shows && (
                <div className="mt-12 lg:mt-8"> {/* wrapper */}

                    {/* main title and text */}
                    <div className="text-center">
                        <h1 className="text-4xl text-bbblue mb-2">Get Tickets</h1>
                        <p className="text-xl">Discounted tickets for Broadway shows</p>
                    </div>

                    {/* sort button */}
                    <div className="mt-8 mb-8 items-center flex gap-2 text-sm">
                        <span>Sort by: </span>
                        <SortButton sortType={`Show ${decodeURI("%E2%86%91")}`} buttonAction={() => {
                            setOrderBy("name")
                            setAscending(true)
                        }} />
                        <SortButton sortType={`Show ${decodeURI("%E2%86%93")}`} buttonAction={() => {
                            setOrderBy("name")
                            setAscending(false)
                        }} />
                        <SortButton sortType={`Location`} buttonAction={() => {
                            setOrderBy("location")
                            setAscending(true)
                        }} />
                    </div>

                    {/* show list */}
                    <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                        {shows.map(show => show.name && (
                            <ShowCard key={show.id} show={show} />
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}
