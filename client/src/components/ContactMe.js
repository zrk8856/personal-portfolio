import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import ContactMeInput from './ContactMeInput'

function ContactMe() {
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Contact</h2>
            <span className="section__subtitle">Get in touch</span>

            <div className="contact__container container grid">
                <div>
                    <div className="contact__information">
                        <FontAwesomeIcon icon={faPhone} className="contact__icon" />
                        <div>
                            <h3 className="contact__title">Call Me</h3>
                            <span className="contact__subtitle">412-579-0028</span>
                        </div>                        
                    </div>

                    <div className="contact__information">
                        <FontAwesomeIcon icon={faEnvelope} className="contact__icon" />
                        <div>
                            <h3 className="contact__title">Email</h3>
                            <span className="contact__subtitle">zhaoruokai@icloud.com</span>
                        </div>                        
                    </div>

                    <div className="contact__information">
                        <FontAwesomeIcon icon={faLocationDot} className="contact__icon contact__icon-location" />
                        <div>
                            <h3 className="contact__title">Location</h3>
                            <span className="contact__subtitle">Pittsburgh, PA</span>
                        </div>                        
                    </div>
                </div>
                <ContactMeInput />
            </div>
        </section>
    )
}

export default ContactMe