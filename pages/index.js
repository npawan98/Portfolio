import Head from 'next/head'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Navbar */}
        <Navbar/>

      {/* photo and name */}
        <Banner/>

      {/* download resume */}
      

      {/* technologies used till date */}

      {/* projects crousal*/}

      {/* contact me */}
      
    </div>
  )
}
