import { ChakraProvider, Container } from "@chakra-ui/react"
import Tracker from "./productivityTracker/tracker"


function App() {


  return (
    <ChakraProvider>
      <Container minHeight="100vh" minWidth="100vw" padding="0">
        <Tracker />
      </Container>
    </ChakraProvider>
  )
}

export default App
