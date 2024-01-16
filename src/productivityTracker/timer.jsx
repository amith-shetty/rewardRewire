import { Box } from '@chakra-ui/react'
import { useState, useEffect } from "react"
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'


function Timer({seconds, isRunning, click}) {
    return (
        <VStack>
            <p>{Math.trunc(seconds)} seconds</p>
            <Button colorScheme='blue' onClick={click}>
                {isRunning ? "Stop" : "Start"}
            </Button>
        </VStack>
    )
}


export default Timer