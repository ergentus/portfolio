import React from 'react'
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from './Skill'

const Skills = () => {
	return (
		<div className={style.skillsBlock}>
			<div className={`${styleContainer.container} ${style.skillsContainer}`}>
				<h2 className={style.title}>Skills</h2>
				<div className={style.skills}>
					<Skill title={'React'} description={'1sometext sometext sometext sometext sometext sometext'}/>
					<Skill title={'Redux'} description={'2 sometext sometext sometext sometext sometext '}/>
					<Skill title={'JS'} description={'3 sometext sometext sometext sometext sometext'}/>
					<Skill title={'HTML'} description={'3 sometext sometext sometext sometext sometext'}/>
					<Skill title={'CSS'} description={'3 sometext sometext sometext sometext sometext'}/>
				</div>
			</div>
		</div>
	)
}

export default Skills