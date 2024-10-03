import React from 'react'
import logo from '../Constants/logo.svg'
export const Navbar = () => {
    let nombre = "Memo"
    let web = "Memogtweb.es"

    return (
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                <img src={logo} alt="Logo" width="60" height="50" class="d-inline-block align-text-top"/>
                        Memoweb
                </a>
                
            </div>
        </nav>
    )
}
