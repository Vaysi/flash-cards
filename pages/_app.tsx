import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from "../components/navigation";
import FAB from "../components/fab";
import Background from "../components/background";
function MyApp({ Component, pageProps }: AppProps) {

  return <>
    <Background />
    <Navigation />
    <Component {...pageProps} />
    <FAB />
  </>;
}

export default MyApp
