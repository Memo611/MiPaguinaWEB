import React from 'react'
import logo from '../Constants/logo.svg'
export const Navbar = () => {
    let nombre = "Memo"
    let web = "Memogtweb.es"

    return (
        <nav class="navbar" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src={logo} alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
                    Memo.web
                </a>
                <ul class="nav nav-underline">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">about me</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Educations
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Skills
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact
                        </a>
                    </li>
                    
                </ul>
            </div>
        </nav>
    )
}
