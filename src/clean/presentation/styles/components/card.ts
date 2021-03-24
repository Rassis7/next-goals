import { ComponentStyleConfig } from '@chakra-ui/theme';

export const Card: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: '10px',
    backgroundColor: 'rgba(255,255,255,0.20)',
    boxShadow: '0 8px 32px 0 rgba(31,38,135,0.37)',
    backdropFilter: 'blur(1.0px)',
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
