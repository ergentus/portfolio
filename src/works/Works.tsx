import React from 'react'
import style from './Works.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Project from './Project'

const Works = () => {
	return (
		<div className={style.worksBlock}>
			<div className={`${styleContainer.container} ${style.worksContainer}`}>
				<h2 className={style.title}>My works</h2>
				<div className={style.works}>
					<Project title={'First project'}
								description={'1There is a description. 1There is a description.1There is a description.1There is a description.1There is a description.1There is a description.1There is a description.'}/>
					<Project title={'Second project'} description={'2There is a description'}/>
					<Project title={'Second project'} description={'3There is a description'}/>
					<Project title={'Second project'} description={'4There is a description 4There is a description'}/>
				</div>
			</div>
		</div>
	)
}

export default Works