import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Image from "next/image"
import Button from "../components/Button"
import Countdown from "../components/Countdown"

import classnames from "classnames";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zero Hour</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="mx-auto">
      <NavBar className="fixed"/>
        <div className="grid md:grid-cols-5 gap-1">
          <div className="bg-gradient-to-br from-zhorange via-red-500 to-pink-500 p-10 md:col-span-3 row-span-2">
            <div>
              <h1 className="text-8xl font-sans pb-10">THE TIME FOR <div className="text-white">ACTION</div> IS <div className="text-zhblue italic">NOW</div></h1>
              <h2 className="text-3xl font-mono">We cannot afford to wait any longer. <br/> Let's get to the roots of the climate crisis, <b>together.</b></h2>
            </div>
            <Button size="lg" textColor="zhblue" bgColor="gray" >JOIN THE MOVEMENT</Button>
          </div>
          <div className="row-span-2 md:col-span-2 relative bg-zhblue">
            <Image src="/home-protest.jpg"
            alt="Picture of Climate Justice March"
            layout="fill"
            objectFit="cover"
            className="col-span-2 row-span-2 opacity-50 " />
          </div>
          
          <div className="p-20 row-span-2 col-span-2 bg-zhblue-dark grid justify-items-end text-4xl font-bold">
            <h1>
              THE CLOCK IS TICKING
            </h1>
            <Countdown/>
          </div>
          <div className="bg-gray-400 p-20 flex justify-center"><h1 className="text-4xl font-bold">WHAT?</h1></div>
          <div className="bg-red-700 p-20 flex justify-center"><h1 className="text-4xl font-bold">HOW?</h1></div>
          <div className="bg-red-700 p-20 flex justify-center"><h1 className="text-4xl font-bold">WHO?</h1></div>
          <div className="bg-red-700 p-20 flex justify-center"><h1 className="text-4xl font-bold">WHY?</h1></div>
          <div className="bg-red-700 p-20">8</div>
          <div className="bg-red-700 p-20">9</div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
