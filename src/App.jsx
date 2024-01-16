import { ChakraProvider } from "@chakra-ui/react"
import Tracker from "./productivityTracker/tracker"


function App() {


  return (
    <ChakraProvider>
        <Tracker />
    </ChakraProvider>
  )
}

export default App
