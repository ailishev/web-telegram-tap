import React from 'react'

const TapCounter = ({ count }) => {
	return (
		<div className='text-center mb-5 mt-15'>
			<div className='flex gap-2.5 items-center'>
				<div className='relative w-8 h-8'>
					<img
						src='./assets/coin.png'
						alt='coin'
						layout='fill'
						objectFit='contain'
					/>
				</div>

				<h1 className='text-3xl font-bold'>
					{new Intl.NumberFormat('de-DE').format(count)}
				</h1>
			</div>
		</div>
	)
}

export default TapCounter
