import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faBriefcase, faCalendar } from '@fortawesome/free-solid-svg-icons'

function Qualification() {
    const educationRef = useRef(null)
    const educationButtonRef = useRef(null)
    const workRef = useRef(null)
    const workButtonRef = useRef(null)

    function handleEducationClick() {
        workButtonRef.current.classList.remove('qualification__active')
        educationButtonRef.current.classList.add('qualification__active')
        workRef.current.classList.remove('qualification__active')
        educationRef.current.classList.add('qualification__active')
    }

    function handleWorkClick() {
        educationButtonRef.current.classList.remove('qualification__active')
        workButtonRef.current.classList.add('qualification__active')
        educationRef.current.classList.remove('qualification__active')
        workRef.current.classList.add('qualification__active')
    }





    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button button--flex" ref={educationButtonRef} onClick={handleEducationClick}>
                        <FontAwesomeIcon icon={faGraduationCap} className="qualification__icon" />
                        Education
                    </div>

                    <div className="qualification__button button--flex" ref={workButtonRef} onClick={handleWorkClick}>
                        <FontAwesomeIcon icon={faBriefcase} className="qualification__icon" />
                        Work
                    </div>
                </div>
                

                <div className="qualification__sections">
                    {/* ==================== QUALIFICATION CONTENT 1 ==================== */}
                    <div className="qualification__content" data-content id="education" ref={educationRef}>
                        {/* ==================== QUALIFICATION 1 ==================== */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Chemical Engineering</h3>
                                <span className="qualification__subtitle">Dalian University of Technology</span>
                                <div className="qualification__calendar">
                                    <FontAwesomeIcon icon={faCalendar} className="qualification__calendar-icon" />
                                    2003 - 2008
                                </div>
                            </div> 
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        {/* ==================== QUALIFICATION 2 ==================== */}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Master of Business Administration</h3>
                                <span className="qualification__subtitle">University of Pittsburgh</span>
                                <div className="qualification__calendar">
                                    <FontAwesomeIcon icon={faCalendar} className="qualification__calendar-icon" />
                                    2016 - 2017
                                </div>
                            </div> 
                           
                        </div>

                        {/* ==================== QUALIFICATION 3 ==================== */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Full Stack Web Development</h3>
                                <span className="qualification__subtitle">Flatiron School</span>
                                <div className="qualification__calendar">
                                    <FontAwesomeIcon icon={faCalendar} className="qualification__calendar-icon" />
                                    2021 - 2022
                                </div>
                            </div> 
                            <div>
                                <span className="qualification__rounder"></span>
                                {/* <span className="qualification__line"></span> */}
                            </div>
                        </div>
                    </div>

                    {/* ==================== QUALIFICATION CONTENT 2 ==================== */}
                    <div className="qualification__content" data-content id="work" ref={workRef}>
                        {/* ==================== QUALIFICATION 1 ==================== */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Financial Analyst</h3>
                                <span className="qualification__subtitle">Hanjiang Corporation</span>
                                <div className="qualification__calendar">
                                    <FontAwesomeIcon icon={faCalendar} className="qualification__calendar-icon" />
                                    2011 - 2013
                                </div>
                            </div> 
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        {/* ==================== QUALIFICATION 2 ==================== */}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Senior Financial Analyst</h3>
                                <span className="qualification__subtitle">ZAXO Polymers</span>
                                <div className="qualification__calendar">
                                    <FontAwesomeIcon icon={faCalendar} className="qualification__calendar-icon" />
                                    2013 - 2018
                                </div>
                            </div> 
                           
                        </div>

                        {/* ==================== QUALIFICATION 3 ==================== */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Senior Financial Analyst</h3>
                                <span className="qualification__subtitle">K&L Gates</span>
                                <div className="qualification__calendar">
                                    <FontAwesomeIcon icon={faCalendar} className="qualification__calendar-icon" />
                                    2019 - 2019
                                </div>
                            </div> 
                            <div>
                                <span className="qualification__rounder"></span>
                                {/* <span className="qualification__line"></span> */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>       
    )
}

export default Qualification