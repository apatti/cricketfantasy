import Layout from '../components/Layout'

export default function DukesApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
        )
  }