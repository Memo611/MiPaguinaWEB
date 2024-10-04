import React from 'react'
import logo from '../Constants/logo.svg'

export const Navbar = () => {

    return (
        <nav class="navbar navbar-expand-lg w-100" data-bs-theme="dark">
            <a class="navbar-brand" href="#">
                <img src={logo} alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
                Memo.web
            </a>
            <div class="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                    <ul class="nav nav-underline">
                        <li class="nav-item">
                            <a class="nav-link" href="#">About Me</a>
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
            </div>
        </nav>
    )
}
