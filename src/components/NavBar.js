import React from 'react'
import '../home.css'
import logo from "../images/logo.svg"
import { Link } from 'react-scroll'


export default function NavBar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg" style={{ backgroundColor: " transparent" }}>
                <div class="container container-fluid" style={{ marginTop: "12px", width: "72rem" }}>
                    <Link class="navbar-brand petro" href="#"><img src={logo} alt="Girl in a jacket" width="29px" height="19px" style={{ marginTop: "-6px" }} /><span className='p-2'>LandGuru</span></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar m-auto me-auto mb-3 mb-lg-0 nav-container">
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page"
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={500} >Home</Link>
                            </li>

                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Advertise
                                </Link>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="mostLoved"
                                        spy={true}
                                        smooth={true}
                                        offset={5}
                                        duration={500}>Most Played</Link></li>
                                    <li><Link class="dropdown-item"
                                        to="core"
                                        spy={true}
                                        smooth={true}
                                        offset={-10}
                                        duration={500}>Core Feature</Link></li>
                                    <li><Link class="dropdown-item"
                                        to="course"
                                        spy={true}
                                        smooth={true}
                                        offset={30}
                                        duration={500}>Course</Link></li>
                                    <li><Link class="dropdown-item"
                                        to="function"
                                        spy={true}
                                        smooth={true}
                                        offset={30}
                                        duration={500}>Function</Link></li>
                                    <li><Link class="dropdown-item"
                                        to="plan"
                                        spy={true}
                                        smooth={true}
                                        offset={30}
                                        duration={500}>Plan</Link></li>
                                    <li><Link class="dropdown-item"
                                        to="free"
                                        spy={true}
                                        smooth={true}
                                        offset={-120}
                                        duration={500}>Free Tutorials</Link></li>

                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"

                                >
                                    Support
                                </Link>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="question"
                                        spy={true}
                                        smooth={true}
                                        offset={-200}
                                        duration={500}>Frequently asked</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                >Contact</Link>
                            </li>

                        </ul>
                        <form class="d-flex" role="search">
                            <button class="nav-button" type="submit">Try For Free</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
