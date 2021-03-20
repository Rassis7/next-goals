import { Box, Alert, AlertTitle } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box>
      <Alert status="error">
        <AlertTitle mr={2}>Your browser is outdated!</AlertTitle>
      </Alert>
    </Box>
  );
}
