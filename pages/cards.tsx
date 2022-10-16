import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navigation from "../components/navigation";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Espard - Flash Cards</title>
                <meta name="description" content="Flash Card Management"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <span>Flash Cards !</span>
                </h1>

            </main>
        </div>
    )
}

export default Home
