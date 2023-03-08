import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'

export default function Account({ session }) {
    // account info
    const supabase = useSupabaseClient()
    const user = useUser()
    const userId = user.id

    // watchlist
    const [watchlist, setWatchlist] = useState(null)
    const [fetchError, setFetchError] = useState(null)

    // const [loading, setLoading] = useState(true)
    // const [username, setUsername] = useState(null)
    // const [avatar_url, setAvatarUrl] = useState(null)

    // useEffect(() => {
    //     getProfile()
    // }, [session])

    // async function getProfile() {
    //     try {
    //         setLoading(true)

    //         let { data, error, status } = await supabase
    //             .from('profiles')
    //             .select(`username, avatar_url`)
    //             .eq('id', user.id)
    //             .single()

    //         if (error && status !== 406) {
    //             throw error
    //         }

    //         if (data) {
    //             setUsername(data.username)
    //             setAvatarUrl(data.avatar_url)
    //         }
    //     } catch (error) {
    //         alert('Error loading user data!')
    //         console.log(error)
    //     } finally {
    //         setLoading(false)
    //     }
    // }

    // async function updateProfile({ username, avatar_url }) {
    //     try {
    //         setLoading(true)

    //         const updates = {
    //             id: user.id,
    //             username,
    //             avatar_url,
    //             updated_at: new Date().toISOString(),
    //         }

    //         let { error } = await supabase.from('profiles').upsert(updates)
    //         if (error) throw error
    //             alert('Profile updated!')
    //     } catch (error) {
    //         alert('Error updating the data!')
    //         console.log(error)
    //     } finally {
    //         setLoading(false)
    //     }
    // }

    useEffect(() => {
        getWatchlist()
    }, [])

    async function getWatchlist() {
        const {data, error} = await supabase
                .from("watchlist")
                .select()
                .eq("user_id", userId)

        if(error) {
            setFetchError("Could not fetch data")
            setWatchlist(null)
            console.log(error)
        }
        if(data) {
            setWatchlist(data)
            setFetchError(null)
        }
    }

    return (
        // <div className="form-widget">
        //     <div>
        //         <label htmlFor="email">Email</label>
        //         <input id="email" type="text" value={session.user.email} disabled />
        //     </div>
        //     <div>
        //         <label htmlFor="username">Username</label>
        //         <input id="username" type="text" value={username || ''} onChange={(e) => setUsername(e.target.value)}
        //         />
        //     </div>

        //     <div>
        //         <button className="button primary block" onClick={() => updateProfile({ username, avatar_url })} disabled={loading}>{loading ? 'Loading ...' : 'Update'}</button>
        //     </div>

        //     <div>
        //         <button className="button block" onClick={() => supabase.auth.signOut()}>Sign Out</button>
        //     </div>
        // </div>
        <div>
            <h1>Watchlist</h1>
            <p>Hi {session.user.email}</p>
            <button className="text-xs font-bold px-3 py-2 text-center text-white bg-bbblue rounded-lg hover:bg-bblightblue ring-1 ring-bblightblue hover:ring-bblightblue" onClick={() => supabase.auth.signOut()}>Sign Out</button>
            {watchlist && watchlist.map(show => (
                <div key={show.id}>
                    <p>{show.show}</p>
                    <p>Added on {show.created_at.substring(0, 10).replaceAll("-", "/")}</p>
                </div>
            ))}
            
        </div>
    )
}