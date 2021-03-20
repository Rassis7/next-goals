import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: any) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <CSSReset />
    </ChakraProvider>
  );
}

export default MyApp;
