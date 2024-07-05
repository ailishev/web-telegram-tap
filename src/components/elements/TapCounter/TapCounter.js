import React from 'react'

const TapCounter = ({ count }) => {
	const formatNumber = number => {
		return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
	}
	return (
		<div className='text-center mt-15'>
			<div className='flex gap-2.5 items-center'>
				<div className='relative w-8 h-8'>
					<img
						src='./assets/coin.png'
						alt='coin'
						className='w-full h-full object-contain'
					/>
				</div>

				<h1 className='text-3xl font-bold'>{formatNumber(count)}</h1>
			</div>
		</div>
	)
}

export default TapCounter
