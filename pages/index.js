import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <div className="p-0">
      <Head>
        <title>Zero Hour</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      <main className="mx-auto">
      <div class="grid grid-cols-3 gap-1">
        <div className="bg-red-700 p-20 col-span-2 row-span-2">1</div>
        <div className="bg-red-700 p-20">2</div>
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
