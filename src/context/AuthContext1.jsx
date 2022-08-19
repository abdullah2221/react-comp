import React,{createContext,useState} from 'react'


export const authContext1 = createContext()
export default function AuthContext1Provider(props) {
    const[isAuthenticated,setIsAuthenticated] = useState(false)
  return (
   <authContext1.Provider value={{isAuthenticated,setIsAuthenticated}}>
    {props.children}
   </authContext1.Provider>
  )
}
