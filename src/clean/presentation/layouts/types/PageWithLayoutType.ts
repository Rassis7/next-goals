import {
  NextPage,
} from 'next'
import AdminLayout from '../Admin'

type PageWithAdminLayoutType = NextPage & { layout: typeof AdminLayout }

type PageWithLayoutType = PageWithAdminLayoutType

export default PageWithLayoutType
