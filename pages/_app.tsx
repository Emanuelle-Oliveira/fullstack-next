import GlobalStyle from '@src/theme/globalStyle';
import {AppProps} from 'next/app';
import ThemeProvider from '@src/theme/ThemeProvider';

//Aplicar estilo global
export default function App({ Component, pageProps } : AppProps) {
  return(
    <>
      <ThemeProvider>
        <GlobalStyle/>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}