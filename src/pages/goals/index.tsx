import { FC } from 'react';
import AdminLayout from '@/clean/presentation/layouts/Admin'
import PageWithLayoutType from '@/clean/presentation/layouts/types/page-with-layout-type'
import { default as GoalsPresentation } from '@/clean/presentation/pages/goals'

const Goals: FC = () => (<GoalsPresentation />);
(Goals as PageWithLayoutType).layout = AdminLayout
export default Goals
