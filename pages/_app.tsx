import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from "../components/navigation";
import FAB from "../components/fab";
import Background from "../components/background";
import {useState} from "react";
import {AppContextInterface} from "../utils/interfaces";
import {AppCtx} from "../utils/context";
function MyApp({ Component, pageProps }: AppProps) {
  const [app,setApp] = useState({
    sets: []
  });

  return <>
    <Background />
    <Navigation />
    <AppCtx.Provider value={{app,setApp}}>
      <Component {...pageProps} />
      <FAB />
    </AppCtx.Provider>
  </>;
}

export default MyApp
