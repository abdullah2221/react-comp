import React from 'react'
import { useContext } from 'react'

import {useNavigate} from "react-router-dom"
import { authContext1 } from '../../context/AuthContext1'

export default function Dashboard() {
    const {isAuthenticated,setIsAuthenticated} = useContext(authContext1)


    const navigate = useNavigate()
    const handleLogout =()=>{
        setIsAuthenticated(false)
        console.log(isAuthenticated)
        navigate("/")
    }
  return (
    <div className="py-5">
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className='text-center'>DashBoard</h1>

                </div>
                <div className="row">
                    <div className="col text-center">
                        <button className='btn btn-danger form-control w-50' onClick={handleLogout}>LOG OUT</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
