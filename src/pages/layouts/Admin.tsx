import { Flex } from '@chakra-ui/layout'
import Footer from '../components/Footer'
import Header from '../components/Header'

interface Props {
  children: React.ReactNode
}

const AdminLayout = ({ children }: Props) => (
  <Flex flexDirection="column" justifyContent="space-between" alignItems="center" height="100vh">
    <Header />
    <section>{children}</section>
    <Footer />
  </Flex>
)

export default AdminLayout
