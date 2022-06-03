import React from 'react'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__bg">
                <div className="footer__container container grid">
                    <div>
                        <h1 className="footer__title">Ruokai</h1>
                        <span className="footer__subtitle">Frontend Developer</span>
                    </div>

                    <ul className="footer__links">
                        <li>
                            <a href="#services" className="footer__link">Services</a>
                        </li>
                        <li>
                            <a href="#portfolio" className="footer__link">Portfolio</a>
                        </li>
                        <li>
                            <a href="#contact" className="footer__link">Contact Me</a>
                        </li>
                    </ul>

                    <div className="footer__socials">
                        <a href="https://www.facebook.com" target="_blank" className="footer__social">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>

                        <a href="https://www.instagram.com" target="_blank" className="footer__social">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>

                        <a href="https://www.twitter.com" target="_blank" className="footer__social">
                            <FontAwesomeIcon icon={faInstagram} />                            
                        </a>
                    </div>
                </div>
                <p className="footer__copy">&#169; Ruokai. All right reserved</p>
            </div>
        </footer>
    )
}

export default Footer