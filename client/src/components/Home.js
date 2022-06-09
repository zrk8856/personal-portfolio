import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faMedium } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faComputerMouse, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import imagePerfil from '../images/perfil.png'

function Home() {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <div className="home__social">
                        <a href="https://github.com/zrk8856" className="home__social-icon">		
                            <FontAwesomeIcon icon={faGithub} />						  
                        </a>
                        <a href="https://www.linkedin.com/in/ruokaizhao/" className="home__social-icon">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a href="https://medium.com/@lelouch_l" className="home__social-icon">
                            <FontAwesomeIcon icon={faMedium} />
                        </a>							
                    </div>
                    <div className="home__image">
                        {/* User camel case xmlnsXlink instead of xmlnx:xlink so that React knows how to compile it. */}
                        <svg className="home__blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <mask id="mask0" mask-type="alpha">
                                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                            </mask>
                            <g mask="url(#mask0)">
                                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                                {/* Need to use image tag instead of img, and the {perfil} has to be imported, if you put the image's address after xlinkHref, it won't work */}
                                <image className="home__blob-img" x="20" y="-30" xlinkHref={imagePerfil} />
                            </g>
                        </svg>
                    </div>
                    <div className="home__data">
                        <h1 className="home__title">Hi I'm Ruokai</h1>
                        <h3 className="home__subtitle">Fullstack Developer</h3>
                        <p className="home__description">High level experience in Frontend and Backend development, producing quality work.</p>
                        <a href="#contact" className="button button--flex">
                            Contact <FontAwesomeIcon icon={faEnvelope} className="button__icon" />
                        </a>
                    </div>
                </div>
                <div className="home__scroll">
                    <a href="#about" className="home__scroll-button button--flex">
                        <FontAwesomeIcon icon={faComputerMouse} className="home__scroll-mouse" />
                        <span className="home__scroll-name">Scroll down</span>
                        <FontAwesomeIcon icon={faArrowDown} className="home__scroll-arrow" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Home