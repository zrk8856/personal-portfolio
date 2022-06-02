import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header() {
    const navMenuRef = useRef(null)

    function handleMenuClick() {
        navMenuRef.current.classList.add('show-menu')
    }

    function handleCloseClick() {
        navMenuRef.current.classList.remove('show-menu')
    }




    return (
        <header className="header" id="header">
            <nav className="nav container">
                <a href="#" className="nav__logo">Alexa</a>
                <div className="nav__menu" id="nav-menu" ref={navMenuRef}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link" onClick={handleCloseClick}>
                                <FontAwesomeIcon icon="fa-solid fa-house" className="nav__icon" /> Home
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#about" className="nav__link" onClick={handleCloseClick}>
                                <FontAwesomeIcon icon="fa-solid fa-user" className="nav__icon" /> About                                
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#skills" className="nav__link" onClick={handleCloseClick}>
                                <FontAwesomeIcon icon="fa-solid fa-file-lines" className="nav__icon" /> Skills                                
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#services" className="nav__link" onClick={handleCloseClick}>
                                <FontAwesomeIcon icon="fa-solid fa-briefcase" className="nav__icon" /> Services                                
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#portfolio" className="nav__link" onClick={handleCloseClick}>
                                <FontAwesomeIcon icon="fa-solid fa-image" className="nav__icon" /> Portfolio                                
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#contact" className="nav__link" onClick={handleCloseClick}>
                                <FontAwesomeIcon icon="fa-solid fa-envelope" className="nav__icon" /> Contact Me                                
                            </a>
                        </li>
                    </ul>
                    <FontAwesomeIcon icon="fa-solid fa-xmark" className="nav__close" onClick={handleCloseClick} />
                </div>
                <div className="nav__btns">
                    <div className="nav__toggle" id="nav-toggle" >
                        <FontAwesomeIcon icon="fa-solid fa-bars" onClick={handleMenuClick} />
                    </div>                    
                </div>
            </nav>
        </header>
    )
}

export default Header