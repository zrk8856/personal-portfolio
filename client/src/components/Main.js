import React from 'react'
import About from './About'
import ContactMe from './ContactMe'
import Footer from './Footer'
import Home from './Home'
import Portfolio from './Portfolio'
import ProjectInMind from './ProjectInMind'
import Qualification from './Qualification'
import ScrollTop from './ScrollTop'
import Services from './Services'
import Skills from './Skills'
import Testimonial from './Testimonial'

function Main({ scrollTopRef }) {
  	return (
		<main className="main">
			<Home />
			<About />
			<Skills />
			<Qualification />
			{/* <Services /> */}
			<Portfolio />		
			{/* <ProjectInMind /> */}
			{/* <Testimonial /> */}
			<ContactMe />
			<Footer />
			<ScrollTop scrollTopRef={scrollTopRef} />
		</main>
  	)
}

export default Main