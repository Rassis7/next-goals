import {
  ColorModeScript,
} from '@chakra-ui/color-mode'
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document'
import {
  theme,
} from '@/clean/presentation/styles/index'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <ColorModeScript
            initialColorMode={theme.config.initialColorMode}
          />

          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
