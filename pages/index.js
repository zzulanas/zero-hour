import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Image from "next/image"

export default function Home() {
  return (
    <div className="p-0">
      <Head>
        <title>Zero Hour</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className="mx-auto">
        <div class="grid grid-cols-3 gap-1">
          <div className="bg-gradient-to-br from-zhorange via-red-500 to-pink-500 p-10 col-span-2 row-span-2"><div>
            <h1 className="text-8xl font-sans">THE TIME FOR <div className="text-white">ACTION</div> IS <div className="text-zhblue-dark italic">NOW</div></h1>
            <h2 className="text-3xl font-mono">We cannot afford to wait any longer. Let's get to the roots of the climate crisis, together</h2></div></div>
          <Image src="/home-protest.jpg"
            alt="Picture of Climate Justice March"
            width={1000}
            height={1000}
            layout="responsive"
            className="object-cover" />
          <div className="bg-red-700 p-20">3</div>
          <div className="bg-red-700 p-20">4</div>
          <div className="bg-red-700 p-20">5</div>
          <div className="bg-red-700 p-20">6</div>
          <div className="bg-red-700 p-20">7</div>
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
