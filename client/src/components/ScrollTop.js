import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

function ScrollTop({ scrollTopRef }) {
    return (
       <a href="#home" className="scrollup" id="scroll-up" ref={scrollTopRef}>
           <FontAwesomeIcon icon={faArrowUp}className="scrollup__icon" />
       </a> 
    )
}

export default ScrollTop