import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { useFormik } from 'formik'
import * as Yup from 'yup'


function ContactMeInput() {
    const [isSubmitted, setIsSubmitted] = useState(false)

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().required('Email is required'),
            message: Yup.string().required('Message is required'),
        }),
        onSubmit: () => handleSubmit()
      })

      function handleSubmit() {
          fetch('/api/messages', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(formik.values)
          })
          .then((r) => {
              if (r.ok) {
                  setIsSubmitted(true)
                  setTimeout(() => {
                      setIsSubmitted(false)
                  }, 3000)
              }
          })
      }

    return (
        <form action="" className="contact__form grid" onSubmit={formik.handleSubmit}>
            <div className="contact__inputs grid">
                <div className="contact__content">
                    <label htmlFor="name" className="contact__label">Name</label>
                    <input type="text" id="name" className="contact__input" name="name" value={formik.values.name} onBlur={formik.handleBlur} onChange={formik.handleChange} />
                </div> 
                               
                <div className="contact__content">
                    <label htmlFor="email" className="contact__label">Email</label>
                    <input type="email" id="email" className="contact__input" name="email" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} />
                </div>                
            </div>
            {formik.touched.name && formik.errors.name && <div className="errors">{formik.errors.name}</div>}
            {formik.touched.email && formik.errors.email && <div className="errors">{formik.errors.email}</div>}

            <div className="contact__content">
                <label htmlFor="subject" className="contact__label">Subject</label>
                <input type="text" id="subject" className="contact__input" name="subject" value={formik.values.subject} onBlur={formik.handleBlur} onChange={formik.handleChange} />
            </div>

            <div className="contact__content">
                <label htmlFor="message" className="contact__label">Message</label>
                <textarea id="message" cols="" rows="7" className="contact__input" name="message" value={formik.values.message} onBlur={formik.handleBlur} onChange={formik.handleChange} />
            </div>
            {formik.touched.message && formik.errors.message && <div className="errors">{formik.errors.message}</div>}
            {isSubmitted && <h3 className="submit-response">Your message has been sent, I will get back to you as soon as possible, thank you for your interest.</h3>}
            
            <div>
                <button type="submit" className="button button--flex button--flex-submit" >
                    Send Message
                    <FontAwesomeIcon icon={faMessage} className="button__icon" />
                </button>
            </div>
        </form>
  )
}

export default ContactMeInput