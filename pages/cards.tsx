import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import {useContext, useEffect, useState} from "react";
import {AppCtx} from "../utils/context";
import {I_Card} from "../utils/interfaces";
import Grid2 from "@mui/material/Unstable_Grid2";
import {useRouter} from "next/router";
import FlashCard from "../components/flash-card";

const Cards: NextPage = () => {
    const {app} = useContext(AppCtx);
    const router = useRouter();
    const [cards, setCards] = useState<any>([]);

    useEffect(() => {
        let finalCards = app.sets.filter(item => item.id.toString() == router.query.id);
        setCards(finalCards.length ? finalCards[0].cards : []);
    }, [router.isReady]);

    return (
        <div className={styles.container}>
            <Grid2 mt={10} container rowSpacing={2} columnSpacing={2}>
                {
                    cards.map((item: I_Card) => <FlashCard key={item.id} {...item} />)
                }
            </Grid2>
        </div>
    )
}

export default Cards
