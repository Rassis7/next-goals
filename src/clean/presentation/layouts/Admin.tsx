import {
  Flex,
} from '@chakra-ui/layout'
import Footer from '@/clean/presentation/components/Footer/footer-component'
import Header from '@/clean/presentation/components/Header/header-component'

interface Props {
  children: React.ReactNode
}

const AdminLayout = ({
  children,
}: Props) => (
  <Flex
    data-testid="admin-layout"
    flexDirection="column"
    justifyContent="space-between"
    alignItems="center"
    height="100vh"
  >
    <Header />
    <section>{children}</section>
    <Footer />
  </Flex>
)

export default AdminLayout