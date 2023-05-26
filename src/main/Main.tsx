import React from 'react'
import style from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'

const Main = () => {
	return (
		<div className={style.mainBlock}>
			<div className={styleContainer.container}>
				<div className={style.greetings}>
					<span>Hi there</span>
					<h1>I am Oleg Moskalenko</h1>
					<p>Frontend developer</p>
				</div>
				<div className={style.photo}>some photo</div>
			</div>
		</div>
	)
}

export  default Main