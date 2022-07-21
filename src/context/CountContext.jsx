import React, { useState,createContext } from 'react'


export const countContext = createContext()
const initialState = 0


export default function CountContextProvider(props) {
    const [count,setCount] = useState(initialState) 
const incrementHandler=()=>{
    setCount(count + 1)
   
    console.log(count)
}
const decrementHandler =()=>{
 
 count>0?setCount(count-1): setCount(0)

}
const handleReset =()=>{
    setCount(initialState)
}
    
    return (
        <countContext.Provider value={{count,incrementHandler,decrementHandler,handleReset}}>
            {props.children}

        </countContext.Provider>
    )
}
