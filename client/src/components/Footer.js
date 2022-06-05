import React from 'react'
import { faGithub, faLinkedinIn, faMedium } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__bg">
                <div className="footer__container container grid">
                    <div>
                        <h1 className="footer__title">Ruokai</h1>
                        <span className="footer__subtitle">Fullstack Developer</span>
                    </div>

                    <ul className="footer__links">
                        <li>
                            <a href="#services" className="footer__link">Services</a>
                        </li>
                        <li>
                            <a href="#portfolio" className="footer__link">Portfolio</a>
                        </li>
                        <li>
                            <a href="#contact" className="footer__link">Contact</a>
                        </li>
                    </ul>

                    <div className="footer__socials">
                        <a href="https://github.com/zrk8856" className="footer__social">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>

                        <a href="https://www.linkedin.com/in/ruokaizhao/" className="footer__social">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>

                        <a href="https://medium.com/@lelouch_l" className="footer__social">
                            <FontAwesomeIcon icon={faMedium} />                            
                        </a>
                    </div>
                </div>
                <p className="footer__copy">&#169; Ruokai. All right reserved</p>
            </div>
        </footer>
    )
}

export default Footer