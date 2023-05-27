import React from 'react'
import style from './Nav.module.css'
import styleContainer from '../common/styles/Container.module.css'

const Nav = () => {
	return (
		<div className={`${style.navContainer} ${styleContainer.container}`}>
			<div className={style.nav}>
				<a href="#">Main</a>
				<a href="#">Skills</a>
				<a href="#">Works</a>
				<a href="#">Contacts</a>
			</div>
		</div>
	)
}

export default Nav