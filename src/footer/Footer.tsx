import React from 'react'
import styleContainer from '../common/styles/Container.module.css'
import style from './Footer.module.css'

export const Footer = () => {
	return (
		<div className={style.footerBlock}>
			<div className={`${styleContainer.container} ${style.footerContainer}`}>
				<h2 className={style.title}>Oleg Moskalenko</h2>
				<div className={style.mainBlock}>
					<div className={style.icon}></div>
					<div className={style.icon}></div>
					<div className={style.icon}></div>
					<div className={style.icon}></div>
				</div>
				<div className={style.copyright}>©️ Все права защищены 2023</div>
			</div>
		</div>
	)
}