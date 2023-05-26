import React from 'react'
import Header from './header/Header'
import Main from './main/Main'
import Skills from './skills/Skills'
import Works from './works/Works'
import Contacts from './contacts/Contacts'
import {Footer} from './footer/Footer'


const App = () => {
	return (
		<div>
			<Header/>
			<Main/>
			<Skills/>
			<Works/>
			<Contacts/>
			<Footer/>
		</div>
	)
}

export default App
