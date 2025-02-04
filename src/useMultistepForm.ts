import { ReactElement, useState } from "react";

export function useMultistepForm(steps: ReactElement[]){
    const [currentStepIndex, setCurrentStepIndex] = useState(0)

    function next(){
        setCurrentStepIndex(currentIndex =>{
            if(currentIndex >= steps.length -1) return currentIndex
            return currentIndex + 1
        })
    }

    function back(){
        setCurrentStepIndex(currentIndex =>{
            if(currentIndex <= 0) return currentIndex
            return currentIndex - 1
        })
    }

    function goTo(index: number){
        setCurrentStepIndex(index)
    }

    return{
        currentStepIndex,
        step: steps[currentStepIndex],
        steps,
        isFirstStep: currentStepIndex === 0,
        isLastStep: currentStepIndex === steps.length - 1,
        goTo,
        next,
        back
    }
}