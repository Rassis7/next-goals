import { memo } from 'react'
import { Box } from '@chakra-ui/react'
import Logo from './components/logo'

const Header = () => (
  <Box
    data-testid="header"
    as="header"
    height="55"
    width="100%"
    color="red.50"
    fontSize="2xl"
    fontWeight="medium"
    px="4"
  >
    <Logo />
  </Box>
)

export default memo(Header)
