import {
  NextPage,
} from 'next'
import AdminLayout from '../admin'

type PageWithAdminLayoutType = NextPage & { layout: typeof AdminLayout }

type PageWithLayoutType = PageWithAdminLayoutType

export default PageWithLayoutType
