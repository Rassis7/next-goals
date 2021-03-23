import { Box, Flex, Text } from '@chakra-ui/layout';
import Image from 'next/image'

const Logo = () => (
  <Flex
    alignItems="center"
  >
    <Box>
      <Image
        data-testid="image"
        src="/svg/victim.svg"
        height="45rem"
        width="45rem"
      />
    </Box>
    <Box
      ml="2"
    >
      <Text
        data-testid="logo-title"
        fontSize="medium"
        fontWeight="semibold"
        color="white"
      >
        Next Goals
      </Text>
    </Box>
  </Flex>
)

export default Logo;
