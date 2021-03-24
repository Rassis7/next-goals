import { ComponentStyleConfig } from '@chakra-ui/theme';

export const Card: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: '10px',
    backgroundColor: 'gray.600',
    boxShadow: '0 8px 32px 0 rgba(255,255,255,0.1)',
    _hover: {
      boxShadow: '0 0 32px 0 rgba(255,255,255,0.2)',
    },
  },
  sizes: {
    sm: {
      fontSize: '12px',
      padding: '16px',
    },
    md: {
      fontSize: '16px',
      padding: '24px',
    },
  },
  defaultProps: {
    size: 'md',
  },
}
