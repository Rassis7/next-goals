import { FC } from 'react';
import AdminLayout from '@/clean/presentation/layouts/admin'
import PageWithLayoutType from '@/clean/presentation/layouts/types/page-with-layout-type'

const Goals: FC = () => <div />;

(Goals as PageWithLayoutType).layout = AdminLayout

export default Goals
