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
        sets: []
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            let userApp = localStorage.getItem('app') ? JSON.parse(localStorage.getItem('app') as string) : {
                sets: CardsExample
            };
            setApp(userApp);
        }
    }, []);

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
