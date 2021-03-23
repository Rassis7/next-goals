import {
  FC,
} from 'react';
import AdminLayout from '@/clean/presentation/layouts/Admin'
import PageWithLayoutType from '@/clean/presentation/layouts/types/PageWithLayoutType'

const Goals: FC = () => <div />;

(Goals as PageWithLayoutType).layout = AdminLayout

export default Goals
