import { memo } from 'react'
import { Box } from '@chakra-ui/react'

const Header = () => (
  <Box
    data-testid="header"
    as="header"
    height="14"
    width="100%"
    color="red.50"
    fontSize="2xl"
    fontWeight="medium"
    p="4"
  >
    children
  </Box>
)

export default memo(Header)
