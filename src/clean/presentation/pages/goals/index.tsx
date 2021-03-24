import { Box, Flex, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { useStyleConfig } from '@chakra-ui/system';
import { useRouter } from 'next/router'

const Goals = () => {
  const styles = useStyleConfig('GradientButton')
  const route = useRouter()
  return (
    <Flex
      data-testid="default-screen"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="80vh"
    >
      <Box>
        <Text
          fontSize="2xl"
          color="red.50"
          fontWeight="semibold"
        >
          Não há nenhuma meta cadastrada
        </Text>
      </Box>
      <Box>
        <Button
          data-testid="go-to-create-goals"
          sx={styles}
          mt="4"
          onClick={() => route.push('/goals/create')}
        >
          Adicionar nova meta
        </Button>
      </Box>
    </Flex>
  )
}

export default Goals
