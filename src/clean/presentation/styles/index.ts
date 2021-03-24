import { extendTheme } from '@chakra-ui/react';
import { fonts } from './fonts'
import { colorMode } from './color-mode'
import { Card } from './components'

export const theme = extendTheme({
  config: {
    ...colorMode,
  },
  components: { Card },
  ...fonts,
})
