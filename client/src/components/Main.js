import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Main() {
  	return (
		  <main className="main">
			  <section className="home section" id="home">
				  <div className="home__container container grid">
					  <div className="home__container grid">
						  <div className="home__social">
						  	  <a href="" className="home__social-icon">
								  <FontAwesomeIcon icon="fa-brands fa-linkedin" />								  
							  </a>
							  <a href="" className="home__social-icon">
								  <FontAwesomeIcon icon="fa-brands fa-dribbble" />
							  </a>							
							  <a href="" className="home__social-icon">		
							  	  <FontAwesomeIcon icon="fa-brands fa-github" />						  
							  </a>
						  </div>
					  </div>
				  </div>
			  </section>
		  </main>
  	)
}

export default Main