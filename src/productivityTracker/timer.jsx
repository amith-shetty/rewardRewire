import { Box } from '@chakra-ui/react'
import { useState, useEffect } from "react"
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'


function Timer({seconds, isRunning, click}) {
    return (
        <VStack color="black" padding={"20px"}>
            <p>{Math.trunc(seconds)} seconds</p>
            <Button bg='white' color="black"  onClick={click}
            width={"120px"}
            boxShadow='dark-lg'>
                {isRunning ? "Stop" : "Start"}
            </Button>
        </VStack>
    )
}


export default Timer