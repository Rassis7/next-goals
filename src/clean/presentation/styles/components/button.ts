import { ComponentStyleConfig } from '@chakra-ui/theme';

export const GradientButton: ComponentStyleConfig = {
  baseStyle: {
    bgGradient: 'linear(to-r, red.400, yellow.400)',
    _hover: {
      bgGradient: 'linear(to-r, red.500, yellow.500)',
    },
    _active: {
      bgGradient: 'linear(to-r, red.400, yellow.400)',
    },
    color: 'white',
  },
  sizes: {
    sm: {
      fontSize: '12px',
      padding: '12px',
    },
    md: {
      fontSize: '16px',
      padding: '16px',
    },
  },
  variants: {
    circle: {
      width: '3rem',
      height: '3rem',
      borderRadius: '1.5rem',
      padding: 0,
    },
  },
  defaultProps: {
    size: 'md',
  },
}
