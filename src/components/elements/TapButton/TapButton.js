import React from 'react'

const TapButton = ({ onTap }) => {
	return (
		<button
			onClick={onTap}
			className='transition-transform transform rounded-full  tap-button '
			aria-label='Tap button'
		>
			<img
				src='/assets/1.png'
				alt='button'
				style={{ width: '200px', height: '200px' }}
			/>
		</button>
	)
}

export default TapButton
