import { ReactNode } from 'react'
import { Box, Divider, Flex, Text, useStyleConfig } from '@chakra-ui/react'
import { useWindowSize } from '@/clean/presentation/hooks/implementations/window-size'

interface Props {
  header?: ReactNode | string
  body?: ReactNode | string
  footer?: ReactNode
}

const Card = ({ header, body, footer }: Props) => {
  const { cssSize } = useWindowSize()
  const styles = useStyleConfig('Card', { size: cssSize === 'SM' ? 'sm' : 'md' })

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      flexDirection="column"
      as="div"
      sx={styles}
    >
      { header && (
      <Box>
        <Text
          fontSize="medium"
          fontWeight="semibold"
          color="gray.600"
        >
          {header}
        </Text>
      </Box>
      )}
      <Divider />
      { body && (
      <Box>
        <Text
          fontSize="medium"
          fontWeight="normal"
          color="gray.400"
        >
          {body}
        </Text>
      </Box>
      )}
      { footer && (
      <>
        <Divider />
        <Box>{footer}</Box>
      </>
      )}
    </Flex>
  )
}

export default Card
