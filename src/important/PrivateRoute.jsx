import React, { useContext } from 'react'
import { authContext1 } from '../context/AuthContext1';

import Login from "../pages/Login"
export default function PrivateRoute(props) {
    const { isAuthenticated } = useContext(authContext1)
  
    const { Component } = props;
    if(!isAuthenticated )
    return<Login/>
    return (
        <>
        <Component />
        </>

    )
}
