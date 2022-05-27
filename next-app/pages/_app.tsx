import '../styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'

// jsを無効化してもhtmlが表示されているので、pre-render(デフォルトではSSG)されていることがわかる
// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

// CSRのため、jsを無効にすると何も表示されない
const MyApp = ({ Component, pageProps }: AppProps) => {
  const SafeHydrate = dynamic(() => import('../components/SafeHydrate'), { ssr: false });
 
  return (
        <SafeHydrate>
          <Component {...pageProps} />
        </SafeHydrate>
  );
}

export default MyApp
