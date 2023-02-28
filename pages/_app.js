import Layout from '@/components/Layout'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
    return (
        <>
        <Head>
            <title>Budget Broadway</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap" rel="stylesheet" />
            <meta name="keywords" content="Broadway, musicals, plays" />
            <meta name="description" content="Information about discounted tickets for musicals and plays on Broadway" />
        </Head>
        
        <Layout>
            <Component {...pageProps} />
        </Layout>
        </>
    )
}
