import Layout from '@/components/Layout'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
    return (
        <>
        <Head>
            <title>Budget Broadway</title>
            <meta name="keywords" content="Broadway, musicals, plays" />
            <meta name="description" content="Information about discounted tickets for musicals and plays on Broadway" />
        </Head>
        
        <Layout>
            <Component {...pageProps} />
        </Layout>
        </>
    )
}
