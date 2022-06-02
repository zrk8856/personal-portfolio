import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faFileLines, faBriefcase, faImage, faEnvelope, faXmark, faBars } from '@fortawesome/free-solid-svg-icons'

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
                <a href="#" className="nav__logo">Ruokai</a>
                <div className="nav__menu" id="nav-menu" ref={navMenuRef}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link" onClick={handleCloseClick}>
                                <FontAwesomeIcon icon={faHouse} className="nav__icon" /> Home
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#about" className="nav__link" onClick={handleCloseClick}>
                                <FontAwesomeIcon icon={faUser} className="nav__icon" /> About                                
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#skills" className="nav__link" onClick={handleCloseClick}>
                                <FontAwesomeIcon icon={faFileLines} className="nav__icon" /> Skills                                
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#services" className="nav__link" onClick={handleCloseClick}>
                                <FontAwesomeIcon icon={faBriefcase} className="nav__icon" /> Services                                
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#portfolio" className="nav__link" onClick={handleCloseClick}>
                                <FontAwesomeIcon icon={faImage} className="nav__icon" /> Portfolio                                
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#contact" className="nav__link" onClick={handleCloseClick}>
                                <FontAwesomeIcon icon={faEnvelope} className="nav__icon" /> Contact Me                                
                            </a>
                        </li>
                    </ul>
                    <FontAwesomeIcon icon={faXmark} className="nav__close" onClick={handleCloseClick} />
                </div>
                <div className="nav__btns">
                    <div className="nav__toggle" id="nav-toggle" >
                        <FontAwesomeIcon icon={faBars} onClick={handleMenuClick} />
                    </div>                    
                </div>
            </nav>
        </header>
    )
}

export default Header