import { Zap } from 'lucide-react'
import React from 'react'

const PlayerInfo = ({ name, level, energy, claim }) => {
	return (
		<section>
			<div className='flex gap-6 items-center mb-8'>
				<div className='border border-zinc-600 shadow px-10 py-3 rounded-full flex items-center justify-end gap-2'>
					<img src='./assets/coin.png' alt='coin' className='w-6 h-6' />
					<span className=' text-custom-primary font-semibold'>
						{new Intl.NumberFormat('de-DE').format(claim)}
					</span>
					<span className='font-semibold'>Claim</span>
				</div>

				<div className='border border-zinc-600 shadow px-10 py-3 rounded-full flex items-center justify-end gap-2'>
					<Zap className=' text-violet-600' />
					<span className='text-violet-400 font-semibold'>{energy}</span>
					<span className='font-semibold '>Energy</span>
				</div>
			</div>
		</section>
	)
}

export default PlayerInfo
