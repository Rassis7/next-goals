import { Box, Flex } from '@chakra-ui/layout'
import Header from '@/clean/presentation/components/header/header-component'

interface Props {
  children: React.ReactNode
}

const AdminLayout = ({
  children,
}: Props) => (
  <Flex
    data-testid="admin-layout"
    flexDirection="column"
    alignItems="center"
  >
    <Header />
    <Box
      margin="4rem 2rem"
      as="section"
    >
      {children}
    </Box>
  </Flex>
)

export default AdminLayout
