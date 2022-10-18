import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import {useCallback, useContext, useEffect, useState} from "react";
import {AppCtx} from "../utils/context";
import Grid2 from "@mui/material/Unstable_Grid2";
import {useRouter} from "next/router";
import CardsStepper from "../components/stepper";
import {shuffleArray} from "../utils/functions";
import {Box, Button, ButtonGroup, Typography} from "@mui/material";
import InfiniteScroll from 'react-infinite-scroller';
import FlashCard from "../components/flash-card";
import {I_Card} from "../utils/interfaces";

const Cards: NextPage = () => {
    const {app} = useContext(AppCtx);
    const router = useRouter();
    const [currentSet, setCurrentSet] = useState<any>({
        cards: [],
        label: '',
        id: 0
    });

    const [viewMode, setViewMode] = useState<'cards' | 'exam'>('cards');

    const getCurrentCards = useCallback(() => {
        if (router.isReady) {
            if (!router.query.id) {
                router.push('sets');
            }
            let finalCards = app.sets.filter(item => item.id.toString() == router.query.id);
            setCurrentSet((prev: any) => finalCards.length ? {
                cards: shuffleArray(finalCards[0].cards),
                label: finalCards[0].name,
                id: finalCards[0].id,
            } : prev);
        }
    }, [router.isReady, app.sets, router.query])

    useEffect(() => {
        getCurrentCards();
    }, [getCurrentCards]);

    const perPage = 2;

    const [page, setPage] = useState(0);
    return (
        <div className={styles.container}>
            <ButtonGroup sx={{mt: 12, mb: 4}} fullWidth={true} variant="contained" color={"warning"}
                         aria-label="outlined button group">
                <Button onClick={() => setViewMode('cards')} variant={viewMode == 'cards' ? 'outlined' : 'contained'}>List
                    of Cards</Button>
                <Button onClick={() => setViewMode('exam')} variant={viewMode == 'exam' ? 'outlined' : 'contained'}>Take
                    an exam</Button>
            </ButtonGroup>
            {
                viewMode == 'cards' ? (
                    <InfiniteScroll
                        pageStart={0}
                        loadMore={() => setPage(page + 1)}
                        hasMore={(page * perPage) < currentSet.cards.length}
                        loader={<div className="loader" key={0}>Loading ...</div>}

                    >
                        <Grid2 container rowSpacing={2} columnSpacing={2}>
                            {
                                currentSet.cards.slice(0, page * perPage + perPage).map((item: I_Card) =>
                                    <FlashCard key={item.id} {...item} />)
                            }
                        </Grid2>
                    </InfiniteScroll>
                ) : (
                    currentSet.cards.length > 0 && <CardsStepper {...currentSet} />
                )
            }

            {currentSet.cards.length < 1 && (
                <Box my={2}>
                    <Typography variant={'h4'} textAlign={'center'}>No Cards Available !</Typography>
                </Box>
            )}

        </div>
    )
}

export default Cards
