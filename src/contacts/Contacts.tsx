import React from 'react'
import style from './Contacts.module.css'
import styleContainer from '../common/styles/Container.module.css'

const Contacts = () => {
	return (
		<div className={style.contactsBlock}>
			<div className={`${styleContainer.container} ${style.contactsContainer}`}>
				<h2 className={style.title}>Contacts</h2>
					<form className={style.formField} action="/" method='post'>
						<input type="text"/>
						<input type="text"/>
						<textarea name="contacts"></textarea>
						<button>Send</button>
					</form>
			</div>
		</div>
	)
}

export default Contacts