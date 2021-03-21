import { Box } from '@chakra-ui/react'
import { memo } from 'react'

const Header = () => (
  <Box as="header" background="purple.400" height="14" width="100%">head</Box>
)

export default memo(Header)
