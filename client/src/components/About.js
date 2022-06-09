import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import imageAbout from '../images/about.jpg'

function About() {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My introduction</span>

            <div className="about__container container grid">
                <img src={imageAbout} alt="" className="about__img" />

                <div className="about__data">
                    <p className="about__description">Full Stack Developer with experience
                     using frontend and backend technologies such as Ruby, Rails, Node, 
                     JavaScript, and React. Passionate about learning new things and staying
                      current with the technology.
                    </p>
                    {/* <div className="about__info">
                        <div>
                            <span className="about__info-title">08+</span>
                            <span className="about__info-name">Years <br/> experience</span>
                        </div>
                        <div>
                            <span className="about__info-title">10+</span>
                            <span className="about__info-name">Completed <br/> project</span>
                        </div>
                        <div>
                            <span className="about__info-title">05+</span>
                            <span className="about__info-name">Companies <br/> worked</span>
                        </div>
                    </div> */}
                    <div className="about__buttons">
                        <a href="https://drive.google.com/file/d/1tfdoznq4tWyfXVa7Gr0Kw7CBXb_f_bsI/view?usp=sharing" className="button button--flex">
                            Download CV<FontAwesomeIcon icon={faDownload} className="button__icon" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About