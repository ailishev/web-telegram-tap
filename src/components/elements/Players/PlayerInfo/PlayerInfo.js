import React from 'react'

const PlayerInfo = ({ name, level, claim, coinTap }) => {
	return (
		<section className='flex flex-col sm:flex-row gap-4 items-center mt-4 mb-6'>
			<div className='flex flex-wrap gap-3 items-center w-full'>
				<div className='flex-1 border-2 border-custom-card px-4 py-2 rounded-xl flex flex-col items-center justify-center gap-1 bg-custom-card'>
					<span className='text-xs font-semibold text-gray-400 whitespace-nowrap'>
						COIN FOR TAP
					</span>
					<div className='flex items-center gap-2'>
						<img src='./assets/coin.png' alt='coin' className='w-4 h-4' />
						<span className='font-semibold text-sm'>
							+{new Intl.NumberFormat('de-DE').format(coinTap)}
						</span>
					</div>
				</div>
				<div className='flex-1 border-2 border-custom-card px-4 py-2 rounded-xl flex flex-col items-center justify-center gap-1 bg-custom-card'>
					<span className='text-xs font-semibold text-gray-400 whitespace-nowrap'>
						COIN FOR NEXT LVL
					</span>
					<div className='flex items-center gap-2'>
						<span className='font-semibold text-sm'>25K</span>
					</div>
				</div>
				<div className='flex-1 border-2 border-custom-card px-4 py-2 rounded-xl flex flex-col items-center justify-center gap-1 bg-custom-card'>
					<span className='text-xs font-semibold text-gray-400 whitespace-nowrap'>
						PROFIT PER HOUR
					</span>
					<div className='flex items-center gap-2'>
						<img src='./assets/coin.png' alt='coin' className='w-4 h-4' />
						<span className='font-semibold text-sm'>
							{new Intl.NumberFormat('de-DE').format(claim)}
						</span>
					</div>
				</div>
			</div>
		</section>
	)
}

export default PlayerInfo
