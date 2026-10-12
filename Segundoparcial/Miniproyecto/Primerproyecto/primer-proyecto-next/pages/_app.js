import Menu from '../components/menu'
import '../styles/styles.css';

export default function App({Component, pageProps}){
    return(
        <>
            <Menu />
            <Component {...pageProps} />
        </>
    );
}