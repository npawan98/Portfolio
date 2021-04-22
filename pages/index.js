import Head from 'next/head'
import AboutMe from '../components/AboutMe'
import Banner from '../components/Banner'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import TechnologiesUsed from '../components/TechnologiesUsed'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pawan Kumar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Navbar */}
        <Navbar/>

      {/* photo and name */}
        <Banner/>

      {/* download resume */}
      <AboutMe/>
      

      {/* technologies used till date */}
      <TechnologiesUsed/>

      {/* projects crousal*/}
      <Experience/>
      <Projects/>

      {/* contact me */}
      <Contact/>
      
    </div>
  )
}
