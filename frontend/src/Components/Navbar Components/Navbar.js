import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <section id="navbar">
                <div className="logo">
                    <img src="./Images/Logo.png" alt="Memories Social App Logo" />
                </div>
                <div className="nav-items">
                    <nav>
                        <ul>
                            <li>
                            <a href="#home">
                                <span>H</span>
                                <span>O</span>
                                <span>M</span>
                                <span>E</span>
                                </a> 
                            </li>
                            <li>
                                <a href="#support">
                                    <span>S</span>
                                    <span>U</span>
                                    <span>P</span>
                                    <span>P</span>
                                    <span>O</span>
                                    <span>R</span>
                                    <span>T</span>
                                </a>
                            </li>
                            <li>
                                <a href="#contact">
                                    <span>C</span>
                                    <span>O</span>
                                    <span>N</span>
                                    <span>T</span>
                                    <span>A</span>
                                    <span>C</span>
                                    <span>T</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="copyright">
                    <img src="./Images/Copyright.png" alt="Copyright Memories" />
                </div>
            </section>
        </>
    )
}

export default Navbar
