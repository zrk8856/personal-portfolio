import { useEffect, useRef } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Main from "./components/Main"

function App() {
	const headerRef = useRef(null)
	const scrollTopRef = useRef(null)

	function scrollHeader() {
		if (window.scrollY >= 80) {
			headerRef.current.classList.add('scroll-header')
		} else {
			headerRef.current.classList.remove('scroll-header')
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', scrollHeader)
	}, [])

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY >= 560) {
				scrollTopRef.current.classList.add('show-scroll')
			} else {
				scrollTopRef.current.classList.remove('show-scroll')
			}
		})
	})

	return (
  		<BrowserRouter>
		  	<Header headerRef={headerRef} />
        	<Routes>
          		<Route path="/" element={<Main scrollTopRef={scrollTopRef} />} />
        	</Routes>
   	 	</BrowserRouter>
  	)
}

export default App