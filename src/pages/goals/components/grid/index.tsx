import { memo } from 'react';
import { useWindowSize } from '@/clean/presentation/hooks/implementations/window-size';
import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/layout';
import { Goals } from '@/clean/domain/models';

interface Props {
  goals: Goals[]
}

const Grid = ({ goals }: Props) => {
  const { cssSize } = useWindowSize();

  if (!goals?.length) {
    return (
      <Flex
        justifyContent="center"
        alignItems="center"
        data-testid="default-screen"
      >
        <Text
          fontSize="7xl"
          color="red.50"
          fontWeight="semibold"
        >
          Nenhuma meta foi adicionada
        </Text>
      </Flex>
    )
  }

  return <div />
}

export default memo(Grid);
