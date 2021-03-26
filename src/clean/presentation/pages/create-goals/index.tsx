import { Box, Flex, Text } from '@chakra-ui/react'
import Form from './components/form'

const CreateGoals = () => (
  <Flex
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
  >
    <Box
      flex={1}
    >
      <Text
        color="red.300"
        fontSize="xx-large"
        fontWeight="extrabold"
        my="10"
      >
        Crie sua meta
      </Text>

    </Box>
    <Box
      flex={1}
    >
      <Form />
    </Box>
  </Flex>
)

export default CreateGoals
