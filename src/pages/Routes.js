import React from 'react'
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Home from "../pages/Home"
import Login from './Login'
import Header from "../components/Header"
import Footer from "../components/Footer"
import About from './About'
import Contact from './Contact'
import NoPage from './noPage'
import UseState from './Hooks/UseState'
import UseEffect from './Hooks/UseEffect'
import UseMemo from './Hooks/UseMemo'
import UseReff from './Hooks/UseReff'
import UseContext from './Hooks/UseContext'
import UseReducer from './Hooks/UseReducer'
import Dashboard from './Dashboard/dashboard'
import PrivateRoute from '../important/PrivateRoute'
function CustomRoutes() {
  return (
    <BrowserRouter>
    <Header/>
    <main>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/Hooks/UseState' element={<UseState/>}/>
        <Route path='/Hooks/UseEffect' element={<UseEffect/>}/>
        <Route path='/Hooks/UseReff' element={<UseReff/>}/>
        <Route path='/Hooks/UseMemo' element={<UseMemo/>}/>
        <Route path='/Hooks/UseContext' element={<UseContext/>}></Route>
        <Route path='/Hooks/UseReducer' element={<UseReducer/>}></Route>
        {/* <Route path='dashboard' element={<DashBoard/>}></Route> */}
        <Route path='/dashboard' element={<PrivateRoute Component={<Dashboard/>}/>}/>


        <Route path='*' element={<NoPage/>}/>
    </Routes>
    </main>
    <Footer/>

    </BrowserRouter>
  )
}

export default CustomRoutes