import faker from 'faker';
import { Goals } from '../models';

export const mockGoalsParams = () => ({
  name: faker.random.words(),
  finishAt: faker.date.future(),
  description: faker.random.words(),
  image: faker.image.abstract(),
  amount: faker.random.number({ min: 1000, max: 50000 }),
});

export const mockGoalsModel = () => ({
  name: faker.random.words(),
  status: 'OPENED',
  createdAt: faker.date.recent(),
  updatedAt: faker.date.future(),
  finishAt: faker.date.future(),
  description: faker.random.words(),
  image: faker.image.abstract(),
  amount: faker.random.number({ min: 1000, max: 50000 }),
}) as Goals;
