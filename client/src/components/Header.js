import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faFileLines, faBriefcase, faImage, faEnvelope, faXmark, faGrip, faSun } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { HashLink as Link } from 'react-router-hash-link'

function Header({ headerRef }) {
    const navMenuRef = useRef(null)
    const [icon, setIcon] = useState(faMoon)

    function handleMenuClick() {
        navMenuRef.current.classList.add('show-menu')
    }

    function handleCloseClick() {
        navMenuRef.current.classList.remove('show-menu')
    }

    function handleThemIconClick() {
        if (icon === faMoon) {
            setIcon(faSun)
            document.body.classList.add('dark-theme')
        } else {
            setIcon(faMoon)
            document.body.classList.remove('dark-theme')
        }
    }

    return (
        <header className="header" id="header" ref={headerRef}>
            <nav className="nav container">
                <Link to="/#home" className="nav__logo">Ruokai</Link>
                <div className="nav__menu" id="nav-menu" ref={navMenuRef}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <Link to="/#home" className="nav__link" onClick={handleCloseClick}>
                                <FontAwesomeIcon icon={faHouse} className="nav__icon" /> Home
                            </Link>
                        </li>
                        <li className="nav_item">
                            <Link to="/#about" className="nav__link" onClick={handleCloseClick}>
                                <FontAwesomeIcon icon={faUser} className="nav__icon" /> About                                
                            </Link>
                        </li>
                        <li className="nav_item">
                            <Link to="/#skills" className="nav__link" onClick={handleCloseClick}>
                                <FontAwesomeIcon icon={faFileLines} className="nav__icon" /> Skills                                
                            </Link>
                        </li>
                        <li className="nav_item">
                            <Link to="/#qualification" className="nav__link" onClick={handleCloseClick}>
                                <FontAwesomeIcon icon={faBriefcase} className="nav__icon" /> Qualification                                
                            </Link>
                        </li>
                        <li className="nav_item">
                            <Link to="/#portfolio" className="nav__link" onClick={handleCloseClick}>
                                <FontAwesomeIcon icon={faImage} className="nav__icon" /> Portfolio                                
                            </Link>
                        </li>
                        <li className="nav_item">
                            <Link to="/#contact" className="nav__link" onClick={handleCloseClick}>
                                <FontAwesomeIcon icon={faEnvelope} className="nav__icon" /> Contact                                
                            </Link>
                        </li>
                    </ul>
                    <FontAwesomeIcon icon={faXmark} className="nav__close" onClick={handleCloseClick} />
                </div>
                <div className="nav__btns">
                    <FontAwesomeIcon icon={icon} className="change-theme" id="theme-button" onClick={handleThemIconClick} />

                    <div className="nav__toggle" id="nav-toggle" >
                        <FontAwesomeIcon icon={faGrip} onClick={handleMenuClick} />
                    </div>                    
                </div>
            </nav>
        </header>
    )
}

export default Header