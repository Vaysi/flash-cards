import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import {Box, Button} from "@mui/material";
import {useRouter} from "next/router";

const Home: NextPage = () => {
    const router = useRouter();

    const redirectTo = (key:string) => router.push(key);
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <span>Flash Cards !</span>
                </h1>
                <Box mt={3} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                    <Button size={"large"} sx={{mx: 2}} variant="contained"
                            onClick={() => redirectTo('sets')}>Cards</Button>
                    <Button size={"large"} variant="contained" color={"secondary"}
                            onClick={() => redirectTo('stats')}>Stats</Button>
                </Box>

            </main>
        </div>
    )
}

export default Home
