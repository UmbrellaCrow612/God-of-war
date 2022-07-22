import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>God of War</title>
        <meta
          name="description"
          content="God of War is an action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment (SIE). It was released in April 2018"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      
      <section
        className="w-full min-h-screen p-2 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: 'url(/images/hero-1.webp)'}}
      >
        hello wolrd
      </section>
    </>
  )
}

export default Home
