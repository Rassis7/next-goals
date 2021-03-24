import { FC, useEffect, useState } from 'react';
import AdminLayout from '@/clean/presentation/layouts/admin'
import PageWithLayoutType from '@/clean/presentation/layouts/types/page-with-layout-type'
import Grid from './components/grid'
import { mockGoalsModel } from '@/clean/domain/mocks/goals'
import { Goals as GoalsModel } from '@/clean/domain/models';
import { Flex, Text } from '@chakra-ui/layout';

const Goals: FC = () => {
  const [goals, setGoals] = useState<GoalsModel[]>([]);
  useEffect(() => {
    setGoals([
      mockGoalsModel(),
      mockGoalsModel(),
      mockGoalsModel(),
      mockGoalsModel(),
      mockGoalsModel(),
      mockGoalsModel(),
    ])
  }, [])

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

  return (
    <Grid
      goals={goals}
    />
  )
}

(Goals as PageWithLayoutType).layout = AdminLayout

export default Goals
