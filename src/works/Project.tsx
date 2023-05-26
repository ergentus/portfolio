import React from 'react'
import style from './Project.module.css'

type ProjectPropsType = {
	title: string
	description: string
}

const Project = (props: ProjectPropsType) => {
	return (
		<div className={style.project}>
			<div className={style.imgContainer}>
				<div className={style.watchButton}><a href="#">WATCH</a></div>
			</div>
			<h3 className={style.title}>{props.title}</h3>
			<span className={style.text}>{props.description}</span>
		</div>
	)
}

export default Project