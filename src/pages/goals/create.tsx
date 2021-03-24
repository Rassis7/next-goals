import { FC } from 'react';
import AdminLayout from '@/clean/presentation/layouts/Admin'
import PageWithLayoutType from '@/clean/presentation/layouts/types/page-with-layout-type'
import { default as CreateGoalsPresentation } from '@/clean/presentation/pages/create-goals'

const CreateGoals: FC = () => (<CreateGoalsPresentation />);
(CreateGoals as PageWithLayoutType).layout = AdminLayout
export default CreateGoals
