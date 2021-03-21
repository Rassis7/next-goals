import { FC } from 'react';
import AdminLayout from '../layouts/Admin'
import PageWithLayoutType from '../layouts/types/PageWithLayoutType'

const Goals: FC = () => <div />;

(Goals as PageWithLayoutType).layout = AdminLayout

export default Goals
