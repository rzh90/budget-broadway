import Layout from '@/components/Layout'
import '@/styles/globals.css'
import Head from 'next/head'

//supabase auth
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'

export default function App({ Component, pageProps }) {
    const [supabaseClient] = useState(() => createBrowserSupabaseClient())

    return (
        <SessionContextProvider supabaseClient={supabaseClient} initialSession={pageProps.initialSession}>
        <Head>
            <title>Budget Broadway</title>
            <meta name="keywords" content="Broadway, musicals, plays, discounts, lottery, rush" />
            <meta name="description" content="Information about discounted tickets for Broadway musicals and plays" />
        </Head>
        
        <Layout>
            <Component {...pageProps} />
        </Layout>
        </SessionContextProvider>
    )
}
