import React from 'react'
import { useContext } from 'react'
import { Link } from "react-router-dom"
import { authContext } from '../../context/AuthContext'

function Navbar() {

    const {myName} =useContext(authContext);
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand" >Symbols</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/about" className="nav-link " aria-current="page" >About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link " aria-current="page" >Contact US</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link " aria-current="page" >Log IN</Link>
                            </li>
                          
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Hooks
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link to="/Hooks/UseState" className="dropdown-item" >useState</Link></li>
                                    <li><Link to="/Hooks/UseEffect" className="dropdown-item">UseEffect</Link></li>
                                    <li><Link to="/Hooks/UseReff" className="dropdown-item">UseRef</Link></li>
                                    <li><Link to="/Hooks/UseMemo" className="dropdown-item">UseMemo</Link></li>
                                    <li><Link to="/Hooks/UseContext" className='dropdown-item'>UseContext</Link></li>
                                    
                                    {/* <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                                </ul>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <p className='me-0 text-end text-white mb-0 '>Hi {myName}!</p>
                        </div>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar