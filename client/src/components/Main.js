import React from 'react'
import About from './About'
import Home from './Home'
import Qualification from './Qualification'
import Skills from './Skills'

function Main() {
  	return (
		<main className="main">
			<Home />
			<About />
			<Skills />
			<Qualification />		
		</main>
  	)
}

export default Main