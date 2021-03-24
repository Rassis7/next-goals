import { memo } from 'react';
import {
  useWindowSize,
} from '@/clean/presentation/hooks/implementations/window-size';
import { Goals } from '@/clean/domain/models';
import { Flex, GridItem } from '@chakra-ui/layout';
import { Grid as GridLayout } from '@chakra-ui/react';
import Card from '@/clean/presentation/components/card';
import { v4 as uuidv4 } from 'uuid';
import { IconButton } from '@chakra-ui/button';
import { GrAdd } from 'react-icons/gr'

interface Props {
  goals: Goals[]
}

const Grid = ({ goals }: Props) => {
  const { width } = useWindowSize();
  const isMobile = width < 720
  return (
    <GridLayout
      width={isMobile ? '95vw' : '90vw'}
      gridAutoRows="1fr"
      templateColumns={`repeat(${isMobile ? '2' : '4'}, 1fr)`}
      gap={4}
    >
      {goals.map((g) => (
        <GridItem
          key={uuidv4()}
          rowSpan={2}
          colSpan={1}
        >
          <Card
            header={g.name}
            footer={(
              <span>
                Término:
                {' '}
                {g.finishAt.toISOString()}
              </span>
            )}
            actionButton={(
              <Flex
                justifyContent="flex-end"
              >
                <IconButton
                  bgGradient="linear(to-r, red.400, yellow.400)"
                  _hover={{
                    bgGradient: 'linear(to-r, red.500, yellow.500)',
                  }}
                  _active={{
                    bgGradient: 'linear(to-r, red.400, yellow.400)',
                  }}
                  aria-label="Add Goal"
                  height="3rem"
                  width="3rem"
                  borderRadius="1.5rem"
                >
                  <GrAdd
                    size="1.5rem"
                    color="white"
                  />
                </IconButton>
              </Flex>
            )}
          />
        </GridItem>
      ))}
    </GridLayout>
  )
}

export default memo(Grid);
