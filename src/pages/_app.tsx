import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import PageWithLayoutType from './layouts/types/PageWithLayoutType';

type AppLayoutProps = {
  Component: PageWithLayoutType,
  pageProps: any
}

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const Layout = Component.layout || ((children) => <>{children}</>);
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <CSSReset />
    </ChakraProvider>
  );
}

export default MyApp;
