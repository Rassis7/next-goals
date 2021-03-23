import {
  FC,
} from 'react'
import AdminLayout from './layouts/Admin'
import PageWithLayoutType from './layouts/types/PageWithLayoutType'

const Home:FC = () => (
  <div />
);

(Home as PageWithLayoutType).layout = AdminLayout

export default Home
