import {
  extendTheme,
} from '@chakra-ui/react';
import {
  fonts,
} from './fonts'
import {
  colorMode,
} from './color-mode'

export const theme = extendTheme({
  config: {
    ...colorMode,
  },
  ...fonts,
})
