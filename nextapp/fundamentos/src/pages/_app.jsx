import '../styles/globals.css'
import '../styles/app.css' //Posso criar mais de um CSS global, e referenciá-lo aqui

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
