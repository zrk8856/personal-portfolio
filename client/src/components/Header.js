import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header() {
    return (
        <header className="header" id="header">
            <nav className="nav container">
                <a href="#" className="nav__logo">Alexa</a>
                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list grid">
                        <li className="nav_item">
                            <a href="#home" className="nav__link">
                                <FontAwesomeIcon icon="fa-solid fa-house" /> Home
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#about" className="nav__link">
                                <FontAwesomeIcon icon="fa-solid fa-user" /> About                                
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#skills" className="nav__link">
                                <FontAwesomeIcon icon="fa-solid fa-file-lines" /> Skills                                
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#services" className="nav__link">
                                <FontAwesomeIcon icon="fa-solid fa-briefcase" /> Services                                
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#portfolio" className="nav__link">
                                <FontAwesomeIcon icon="fa-solid fa-image" /> Portfolio                                
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#contact" className="nav__link">
                                <FontAwesomeIcon icon="fa-solid fa-envelope" /> Contact Me                                
                            </a>
                        </li>
                    </ul>
                    <FontAwesomeIcon icon="fa-solid fa-xmark" className="nav-close" />
                </div>
                <div className="nav__btns">
                    <div className="nav__toggle" id="nav-toggle">
                        <FontAwesomeIcon icon="fa-solid fa-bars" />
                    </div>                    
                </div>
            </nav>
        </header>
    )
}

export default Header