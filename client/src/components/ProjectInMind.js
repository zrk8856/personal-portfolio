import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import project from '../images/project.png'


function ProjectInMind() {
  	return (
    	<section className="project section">
      		<div className="project__bg">
        		<div className="project__container container grid">
				    <div className="project-data">
						<h2 className="project__title">You have a new project</h2>
						<p className="project__description">Contact me now and get a 30% discount on your new project.</p>
						<a href="#contact" className="button button--flex button--white">
							Contact Me
							<FontAwesomeIcon icon={faEnvelope} className="project__icon button__icon" />
						</a>
					</div>

					<img src={project} alt="" className="project__img" />	
        		</div>
      		</div>
    	</section>
    )
}

export default ProjectInMind