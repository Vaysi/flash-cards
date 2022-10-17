import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Navigation from "../components/navigation";
import FAB from "../components/fab";
import Background from "../components/background";
import {useEffect, useState} from "react";
import {AppCtx} from "../utils/context";
import CardsExample from '../public/cards.json';
import Head from "next/head";
import {ThemeProvider} from "@mui/material";
import theme from "../utils/theme";

function MyApp({Component, pageProps}: AppProps) {

    const [app, setApp] = useState({
        sets: [],
        stats: []
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            let userApp = localStorage.getItem('app') ? JSON.parse(localStorage.getItem('app') as string) : {
                sets: CardsExample,
                stats: []
            };
            setApp(userApp);
        }
    }, []);

    useEffect(() => {
        if(app.sets.length || app.stats.length){
            localStorage.setItem('app',JSON.stringify(app));
        }
    }, [app]);


    return <>
        <Head>
            <title>Espard - Sets</title>
            <meta name="description" content="Flash Card Management"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <ThemeProvider theme={theme}>
            <Background/>
            <Navigation/>
            <AppCtx.Provider value={{app, setApp}}>
                <Component {...pageProps} />
                <FAB/>
            </AppCtx.Provider>
        </ThemeProvider>
    </>;
}

export default MyApp
