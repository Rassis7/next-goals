import { FC } from 'react'
import AdminLayout from '@/clean/presentation/layouts/Admin'
import PageWithLayoutType from '@/clean/presentation/layouts/types/page-with-layout-type'

const Home:FC = () => (
  <div />
);

(Home as PageWithLayoutType).layout = AdminLayout

export default Home
