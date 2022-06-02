import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faAngleDown, faServer, faSwatchbook } from '@fortawesome/free-solid-svg-icons'
import React, { useRef } from 'react'

export default function Skills() {
    const skillsContentOneRef = useRef(null)
    const skillsContentTwoRef = useRef(null)
    const skillsContentThreeRef = useRef(null)

    function handleSkillsContentOneClick(e) {
        skillsContentOneRef.current.classList.toggle('skills__open')      
    }

    function handleSkillsContentTwoClick(e) {
        skillsContentTwoRef.current.classList.toggle('skills__open')      
    }

    function handleSkillsContentThreeClick(e) {
        skillsContentThreeRef.current.classList.toggle('skills__open')      
    }










    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>

            <div className="skills__container container grid">
                <div>
                    {/* ==================== SKILLS 1 ==================== */}
                    <div className="skills__content" ref={skillsContentOneRef}>
                        <div className="skills__header" onClick={handleSkillsContentOneClick}>
                            <FontAwesomeIcon icon={faCode} className="skills__icon" />

                            <div>
                                <h1 className="skills__title">Frontend developer</h1>
                                <span className="skills__subtitle">More than 4 years</span>
                            </div>
                            <FontAwesomeIcon icon={faAngleDown} className="skills__arrow" />
                        </div>
                        <div className="skills__list grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">HTML</h3>
                                    <span className="skills__number">90%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__html"></span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">CSS</h3>
                                    <span className="skills__number">80%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__css"></span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">JavaScript</h3>
                                    <span className="skills__number">60%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__js"></span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">React</h3>
                                    <span className="skills__number">85%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__react"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ==================== SKILLS 2 ==================== */}
                    <div className="skills__content" ref={skillsContentTwoRef}>
                        <div className="skills__header" onClick={handleSkillsContentTwoClick}>
                            <FontAwesomeIcon icon={faServer} className="skills__icon" />

                            <div>
                                <h1 className="skills__title">Backend developer</h1>
                                <span className="skills__subtitle">More than 2 years</span>
                            </div>
                            <FontAwesomeIcon icon={faAngleDown} className="skills__arrow" />
                        </div>
                        <div className="skills__list grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Ruby</h3>
                                    <span className="skills__number">80%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__ruby"></span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Ruby on Rails</h3>
                                    <span className="skills__number">70%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__rubyonrails"></span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">SQL</h3>
                                    <span className="skills__number">90%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__sql"></span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Python</h3>
                                    <span className="skills__number">55%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__python"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {/* ==================== SKILLS 3 ==================== */}
                    <div className="skills__content" ref={skillsContentThreeRef}>
                        <div className="skills__header" onClick={handleSkillsContentThreeClick}>
                            <FontAwesomeIcon icon={faSwatchbook} className="skills__icon" />

                            <div>
                                <h1 className="skills__title">Designer</h1>
                                <span className="skills__subtitle">More than 5 years</span>
                            </div>
                            <FontAwesomeIcon icon={faAngleDown} className="skills__arrow" />
                        </div>
                        <div className="skills__list grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Figma</h3>
                                    <span className="skills__number">90%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__figma"></span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Sketch</h3>
                                    <span className="skills__number">85%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__sketch"></span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Photoshop</h3>
                                    <span className="skills__number">85%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__photoshop"></span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
