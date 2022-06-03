import React from 'react'
import About from './About'
import Home from './Home'
import Portfolio from './Portfolio'
import Qualification from './Qualification'
import Services from './Services'
import Skills from './Skills'

function Main() {
  	return (
		<main className="main">
			<Home />
			<About />
			<Skills />
			<Qualification />
			<Services />
			<Portfolio />		
		</main>
  	)
}

export default Main