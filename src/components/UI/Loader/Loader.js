import React from 'react'
import styles from './Loader.module.scss'

const Loader = () => {
	return (
		<div className={styles.loading}>
			<div className='flex flex-col items-center justify-center'>
				<div className={styles.spinner}></div>
				<h1 className='font-bold'>Загрузка...</h1>
			</div>
		</div>
	)
}

export default Loader
