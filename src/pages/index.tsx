import {
  FC,
} from 'react'
import AdminLayout from '@/clean/presentation/layouts/Admin'
import PageWithLayoutType from '@/clean/presentation/layouts/types/PageWithLayoutType'

const Home:FC = () => (
  <div />
);

(Home as PageWithLayoutType).layout = AdminLayout

export default Home
