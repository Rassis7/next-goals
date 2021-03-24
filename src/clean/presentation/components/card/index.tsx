import { Box, Flex, Text, useStyleConfig } from '@chakra-ui/react'
import { useWindowSize } from '@/clean/presentation/hooks/implementations/window-size'

interface Props {
  header?: JSX.Element | string
  body?: JSX.Element | string
  footer?: JSX.Element | string
  actionButton?: JSX.Element
}

const Card = ({ header, body, footer, actionButton }: Props) => {
  const { cssSize } = useWindowSize()
  const styles = useStyleConfig('Card', { size: cssSize === 'SM' ? 'sm' : 'md' })

  return (
    <Flex
      justifyContent="center"
      flexDirection="column"
      as="div"
      sx={styles}
      maxWidth="15rem"
      cursor="pointer"
      height="100%"
    >
      {actionButton}

      {header && (
      <Box>
        <Text
          fontSize="x-large"
          fontWeight="bold"
          color="white"
          my="1rem"
          textTransform="uppercase"
        >
          {header}
        </Text>
      </Box>
      )}
      { body && (
      <Box
        flexWrap="nowrap"
      >
        <Text
          fontSize="medium"
          fontWeight="semibold"
          color="gray.300"
          my="0.5rem"
        >
          {body}
        </Text>
      </Box>
      )}
      { footer && (
        <Box>
          <Text
            fontSize="sm"
            fontWeight="light"
            color="gray.300"
          >
            {footer}
          </Text>

        </Box>
      )}
    </Flex>
  )
}

export default Card
