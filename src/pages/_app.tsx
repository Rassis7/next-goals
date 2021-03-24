import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { theme } from '@/clean/presentation/styles'
import PageWithLayoutType from '@/clean/presentation/layouts/types/page-with-layout-type';

type AppLayoutProps = {
  Component: PageWithLayoutType,
  pageProps: any
}

function MyApp({
  Component, pageProps,
}: AppLayoutProps) {
  const Layout = Component.layout || ((children) => <>{children}</>);
  return (
    <ChakraProvider
      theme={theme}
    >
      <CSSReset />
      <Layout>
        <Component
          {...pageProps}
        />
      </Layout>

    </ChakraProvider>
  );
}

export default MyApp;
