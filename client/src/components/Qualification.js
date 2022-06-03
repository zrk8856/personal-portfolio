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
        <section className="qualification section">
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
                                <h3 className="qualification__title">Computer Engineer</h3>
                                <span className="qualification__subtitle">University of Pittsburgh</span>
                                <div className="qualification__calendar">
                                    <FontAwesomeIcon icon={faCalendar} />
                                    2016 - 2017
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
                                <h3 className="qualification__title">Web Design</h3>
                                <span className="qualification__subtitle">University of Pittsburgh</span>
                                <div className="qualification__calendar">
                                    <FontAwesomeIcon icon={faCalendar} />
                                    2017 - 2018
                                </div>
                            </div> 
                           
                        </div>

                        {/* ==================== QUALIFICATION 3 ==================== */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Development</h3>
                                <span className="qualification__subtitle">University of Pittsburgh</span>
                                <div className="qualification__calendar">
                                    <FontAwesomeIcon icon={faCalendar} />
                                    2018 - 2019
                                </div>
                            </div> 
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        {/* ==================== QUALIFICATION 4 ==================== */}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                {/* <span className="qualification__line"></span> */}
                            </div>
                            <div>
                                <h3 className="qualification__title">Master in Ui/Ux</h3>
                                <span className="qualification__subtitle">University of Pittsburgh</span>
                                <div className="qualification__calendar">
                                    <FontAwesomeIcon icon={faCalendar} />
                                    2020 - 2021
                                </div>
                            </div> 
                            
                        </div>
                    </div>

                    {/* ==================== QUALIFICATION CONTENT 2 ==================== */}
                    <div className="qualification__content" data-content id="work" ref={workRef}>
                        {/* ==================== QUALIFICATION 1 ==================== */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Software Engineer</h3>
                                <span className="qualification__subtitle">University of Pittsburgh</span>
                                <div className="qualification__calendar">
                                    <FontAwesomeIcon icon={faCalendar} />
                                    2016 - 2017
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
                                <h3 className="qualification__title">Frontend Developer</h3>
                                <span className="qualification__subtitle">University of Pittsburgh</span>
                                <div className="qualification__calendar">
                                    <FontAwesomeIcon icon={faCalendar} />
                                    2017 - 2018
                                </div>
                            </div> 
                           
                        </div>

                        {/* ==================== QUALIFICATION 3 ==================== */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Ui Designer</h3>
                                <span className="qualification__subtitle">University of Pittsburgh</span>
                                <div className="qualification__calendar">
                                    <FontAwesomeIcon icon={faCalendar} />
                                    2018 - 2019
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