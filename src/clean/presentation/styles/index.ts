import { extendTheme } from '@chakra-ui/react';
import { fonts } from './fonts'
import { global } from './global'
import { colorMode } from './color-mode'
import {
  Card, GradientButton,
} from './components'

export const theme = extendTheme({
  config: { ...colorMode },
  components: {
    Card, GradientButton,
  },
  ...global,
  ...fonts,
})
