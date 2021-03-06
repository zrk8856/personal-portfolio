import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faAngleDown, faServer } from '@fortawesome/free-solid-svg-icons'
import React, { useRef } from 'react'

export default function Skills() {
    const skillsContentOneRef = useRef(null)
    const skillsContentTwoRef = useRef(null)

    function handleSkillsContentOneClick(e) {
        skillsContentOneRef.current.classList.toggle('skills__open')      
    }

    function handleSkillsContentTwoClick(e) {
        skillsContentTwoRef.current.classList.toggle('skills__open')      
    }

    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical skills</span>

            <div className="skills__container container grid">                
                {/* ==================== SKILLS 1 ==================== */}
                <div className="skills__content" ref={skillsContentOneRef}>
                    <div className="skills__header" onClick={handleSkillsContentOneClick}>
                        <FontAwesomeIcon icon={faCode} className="skills__icon skills__icon-code" />


                        <div>
                            <h1 className="skills__title">Frontend developer</h1>
                            {/* <span className="skills__subtitle">More than 4 years</span> */}
                        </div>
                        <FontAwesomeIcon icon={faAngleDown} className="skills__arrow" />
                    </div>
                    <div className="skills__list grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">JavaScript</h3>
                                {/* <span className="skills__number">90%</span> */}
                            </div>
                            {/* <div className="skills__bar">
                                <span className="skills__percentage skills__html"></span>
                            </div> */}
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">React</h3>
                                {/* <span className="skills__number">80%</span> */}
                            </div>
                            {/* <div className="skills__bar">
                                <span className="skills__percentage skills__css"></span>
                            </div> */}
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">HTML</h3>
                                {/* <span className="skills__number">60%</span> */}
                            </div>
                            {/* <div className="skills__bar">
                                <span className="skills__percentage skills__js"></span>
                            </div> */}
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">CSS</h3>
                                {/* <span className="skills__number">85%</span> */}
                            </div>
                            {/* <div className="skills__bar">
                                <span className="skills__percentage skills__react"></span>
                            </div> */}
                        </div>
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Redux</h3>
                                {/* <span className="skills__number">90%</span> */}
                            </div>
                            {/* <div className="skills__bar">
                                <span className="skills__percentage skills__html"></span>
                            </div> */}
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">WebSockets</h3>
                                {/* <span className="skills__number">80%</span> */}
                            </div>
                            {/* <div className="skills__bar">
                                <span className="skills__percentage skills__css"></span>
                            </div> */}
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Git</h3>
                                {/* <span className="skills__number">60%</span> */}
                            </div>
                            {/* <div className="skills__bar">
                                <span className="skills__percentage skills__js"></span>
                            </div> */}
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Heroku</h3>
                                {/* <span className="skills__number">85%</span> */}
                            </div>
                            {/* <div className="skills__bar">
                                <span className="skills__percentage skills__react"></span>
                            </div> */}
                        </div>                         
                    </div>
                </div>
            
                {/* ==================== SKILLS 2 ==================== */}
                <div className="skills__content" ref={skillsContentTwoRef}>
                    <div className="skills__header" onClick={handleSkillsContentTwoClick}>
                        <FontAwesomeIcon icon={faServer} className="skills__icon" />

                        <div>
                            <h1 className="skills__title">Backend developer</h1>
                            {/* <span className="skills__subtitle">More than 2 years</span> */}
                        </div>
                        <FontAwesomeIcon icon={faAngleDown} className="skills__arrow" />
                    </div>
                    <div className="skills__list grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Ruby</h3>
                                {/* <span className="skills__number">80%</span> */}
                            </div>
                            {/* <div className="skills__bar">
                                <span className="skills__percentage skills__ruby"></span>
                            </div> */}
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Ruby on Rails</h3>
                                {/* <span className="skills__number">70%</span> */}
                            </div>
                            {/* <div className="skills__bar">
                                <span className="skills__percentage skills__rubyonrails"></span>
                            </div> */}
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">SQL</h3>
                                {/* <span className="skills__number">90%</span> */}
                            </div>
                            {/* <div className="skills__bar">
                                <span className="skills__percentage skills__sql"></span>
                            </div> */}
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">PostgreSQL</h3>
                                {/* <span className="skills__number">55%</span> */}
                            </div>
                            {/* <div className="skills__bar">
                                <span className="skills__percentage skills__python"></span>
                            </div> */}
                        </div>
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Active Record</h3>
                                {/* <span className="skills__number">80%</span> */}
                            </div>
                            {/* <div className="skills__bar">
                                <span className="skills__percentage skills__ruby"></span>
                            </div> */}
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Action Cable</h3>
                                {/* <span className="skills__number">70%</span> */}
                            </div>
                            {/* <div className="skills__bar">
                                <span className="skills__percentage skills__rubyonrails"></span>
                            </div> */}
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Action Mailer</h3>
                                {/* <span className="skills__number">90%</span> */}
                            </div>
                            {/* <div className="skills__bar">
                                <span className="skills__percentage skills__sql"></span>
                            </div> */}
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">RESTful API</h3>
                                {/* <span className="skills__number">55%</span> */}
                            </div>
                            {/* <div className="skills__bar">
                                <span className="skills__percentage skills__python"></span>
                            </div> */}
                        </div>
                    </div>
                </div>                
            </div>
        </section>
    )
}
