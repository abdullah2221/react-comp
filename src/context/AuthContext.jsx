import React, { createContext,useState } from 'react'
export const authContext = createContext()

const initialValue = "AHmad ali Ahmad"
export default function AuthContextProvider(props) {
    const [myName,setMyName]= useState(initialValue)
 

    return (
        <authContext.Provider value={{myName,setMyName}}>
            {props.children}

        </authContext.Provider>
    )
}
