import Timer from "./timer"
import { useState, useEffect } from "react"
import { Box, Button, Stack, HStack, VStack } from '@chakra-ui/react'
import React from 'react'

const lightBlue = "#F3EDC8";
const darkYellow = "#EAD196"

const lightGreen = "#D2E3C8"
const darkGreen = "#86A789"

function Tracker() {
    const [productivity, setProductivity] = useState(0);
    const [reward, setReward] = useState(0);
    const [refTime, setRefTime] = useState(Date.now());
    const [showSeconds, setShowSeconds] = useState(0);
    const [isTimerRunning, setTimerRunning] = useState(false);
    const [productivityMode, setProductivityMode] = useState(true);
    const [backGroundColor, setBackgroundColor] = useState(lightGreen)

    enablePeriodicTimerUpdate(isTimerRunning, setShowSeconds, refTime)

    const toggleAction = () => {
        if (isTimerRunning) {
            stopTimer(setShowSeconds, productivity, setProductivity, reward, setReward, refTime, productivityMode)
        } 
        setRefTime(Date.now())
        setTimerRunning(!isTimerRunning)
    }

    return (
        <VStack bg={backGroundColor} justifyContent={"center"} alignItems={"center"} minW={"100vw"} minH={"100vh"}
        >
            <Timer
                seconds={showSeconds}
                isRunning={isTimerRunning}
                click={toggleAction}
            />
            <HStack color={"black"} padding={"20px"}>
                <Box padding={"20px"}>
                    <VStack >
                        <Button onClick={()=>productivityModeSwitch(setProductivityMode, true, isTimerRunning, setBackgroundColor)}
                        bg={darkYellow}
                        width={"120px"}
                        >
                            Productivity
                        </Button>
                        <p>{Math.trunc(productivity)}</p>
                    </VStack>
                </Box>
                
                <Box padding={"20px"}>
                    <VStack >
                        <Button onClick={()=>productivityModeSwitch(setProductivityMode, false, isTimerRunning, setBackgroundColor)}
                        bg={darkGreen}
                        width={"120px"}>
                            Reward
                        </Button>
                        <p>{Math.trunc(reward)}</p>
                    </VStack>
                </Box>
            </HStack>
        </VStack>

    )
}

function productivityModeSwitch(setProductivityMode, productivityEnable, running, setBackgroundColor) {
    if(!running) {
        setProductivityMode(productivityEnable)
        if(productivityEnable){
            setBackgroundColor(lightGreen)
        } else {
            setBackgroundColor(lightBlue)
        }
        
    }
}

function enablePeriodicTimerUpdate(isTimerRunning, setShowSeconds, refTime) {
    useEffect(() => {
        const interval = setInterval(() => {
            if(isTimerRunning) {
                setShowSeconds(getTimePassedSeconds(refTime))
            }
        }, 1000);
        return () => {
          clearInterval(interval);
        };
    }, [isTimerRunning]);
}

function stopTimer(setShowSeconds, productivity, setProductivity, reward, setReward, refTime, productivityMode) {
    setShowSeconds(0)
    const timePassed = getTimePassedSeconds(refTime)
    if(productivityMode) {
        setProductivity(productivity+timePassed)
        const rewardFromProductivity = calculateReward(timePassed, productivity, reward)
        setReward(reward+rewardFromProductivity)
    }else{
        setReward(reward-timePassed)
    }
}


function getTimePassedSeconds(refTime) {
    const timePassedMilliSeconds = Date.now() - refTime
    const secondsMilliSecondsRatio = 1000
    return timePassedMilliSeconds / secondsMilliSecondsRatio
}

function calculateReward(time, productivity, reward) {
    const productivityRewardRatio = 1
    const surpriseRatio = 0.33
    var rewardFinal = 0
    if (Math.random() < surpriseRatio ) {
        
        const productivityDiff = productivity - reward*productivityRewardRatio
        if(productivityDiff > 0){
            rewardFinal += productivityDiff / productivityRewardRatio
        }
    }
    return rewardFinal
}

export default Tracker