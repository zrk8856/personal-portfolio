import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBorderAll, faArrowRight, faXmark, faCircleCheck, faCode, faPen } from '@fortawesome/free-solid-svg-icons'


function Services() {
    const servicesOneRef = useRef(null)
    const servicesTwoRef = useRef(null)
    const servicesThreeRef = useRef(null)

    function handleServiceOneClick() {
        servicesOneRef.current.classList.toggle('active-modal')
    }

    function handleServiceTwoClick() {
        servicesTwoRef.current.classList.toggle('active-modal')
    }

    function handleServiceThreeClick() {
        servicesThreeRef.current.classList.toggle('active-modal')
    }



    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I offer</span>

            <div className="services__container container grid">
                {/* ==================== SERVICES 1 ==================== */}
                <div className="services__content">
                    <div>
                        <FontAwesomeIcon icon={faBorderAll} className="services__icon" />
                        <h3 className="services__title">Ui/Ux <br/> Designer</h3>
                    </div>
                    <span className="button button--flex button--small button--link services__button" onClick={handleServiceOneClick}>
                        View More
                        <FontAwesomeIcon icon={faArrowRight} className="button__icon" />
                    </span>

                    <div className="services__modal" ref={servicesOneRef}>
                        <div className="services__modal-content">
                            <h4 className="services__modal-title">Ui/Ux <br/> Designer</h4>
                            <FontAwesomeIcon icon={faXmark} className="services__modal-close" onClick={handleServiceOneClick} />

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                    <p>I develop the user interface.</p>
                                </li>

                                <li className="services__modal-service">
                                    <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                    <p>Web page development.</p>
                                </li>

                                <li className="services__modal-service">
                                    <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                    <p>I create ux element interactions.</p>
                                </li>

                                <li className="services__modal-service">
                                    <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                    <p>I position your company brand.</p>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>

                {/* ==================== SERVICES 2 ==================== */}
                <div className="services__content">
                    <div>
                        <FontAwesomeIcon icon={faCode} className="services__icon" />
                        <h3 className="services__title">Frontend <br/> Developer</h3>
                    </div>
                    <span className="button button--flex button--small button--link services__button" onClick={handleServiceTwoClick}>
                        View More
                        <FontAwesomeIcon icon={faArrowRight} className="button__icon" />
                    </span>

                    <div className="services__modal" ref={servicesTwoRef}>
                        <div className="services__modal-content">
                            <h4 className="services__modal-title">Frontend <br/> Developer</h4>
                            <FontAwesomeIcon icon={faXmark} className="services__modal-close" onClick={handleServiceTwoClick} />

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                    <p>I develop the user interface.</p>
                                </li>

                                <li className="services__modal-service">
                                    <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                    <p>Web page development.</p>
                                </li>

                                <li className="services__modal-service">
                                    <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                    <p>I create ux element interactions.</p>
                                </li>

                                <li className="services__modal-service">
                                    <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                    <p>I position your company brand.</p>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>

                {/* ==================== SERVICES 3 ==================== */}
                <div className="services__content">
                    <div>
                        <FontAwesomeIcon icon={faPen} className="services__icon" />
                        <h3 className="services__title">Branding <br/> Designer</h3>
                    </div>
                    <span className="button button--flex button--small button--link services__button" onClick={handleServiceThreeClick}>
                        View More
                        <FontAwesomeIcon icon={faArrowRight} className="button__icon" />
                    </span>

                    <div className="services__modal" ref={servicesThreeRef}>
                        <div className="services__modal-content">
                            <h4 className="services__modal-title">Branding <br/> Designer</h4>
                            <FontAwesomeIcon icon={faXmark} className="services__modal-close" onClick={handleServiceThreeClick} />

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                    <p>I develop the user interface.</p>
                                </li>

                                <li className="services__modal-service">
                                    <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                    <p>Web page development.</p>
                                </li>

                                <li className="services__modal-service">
                                    <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                    <p>I create ux element interactions.</p>
                                </li>

                                <li className="services__modal-service">
                                    <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                    <p>I position your company brand.</p>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services