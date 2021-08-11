import type { AppProps } from 'next/app';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import '../styles/globals.css';

import theme from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (

  <ThemeProvider theme={theme}>
  {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
  <CssBaseline />
  <Component {...pageProps} />
</ThemeProvider>
  );
}
export default MyApp;
