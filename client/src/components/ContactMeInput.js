import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons'

function ContactMeInput() {
    return (
        <form action="" className="contact__form grid">
            <div className="contact__inputs grid">
                <div className="contact__content">
                    <label htmlFor="" className="contact__label">Name</label>
                    <input type="text" className="contact__input" />
                </div>
                <div className="contact__content">
                    <label htmlFor="" className="contact__label">Email</label>
                    <input type="email" className="contact__input" />
                </div>
            </div>
            <div className="contact__content">
                <label htmlFor="" className="contact__label">Project</label>
                <input type="text" className="contact__input" />
            </div>
            <div className="contact__content">
                <label htmlFor="" className="contact__label">Message</label>
                <textarea name="" id="" cols="" rows="7" className="contact__input" />
            </div>

            <div>
                <a href="#" className="button button--flex">
                    Send Message
                    <FontAwesomeIcon icon={faMessage} className="button__icon" />
                </a>
            </div>
        </form>
  )
}

export default ContactMeInput