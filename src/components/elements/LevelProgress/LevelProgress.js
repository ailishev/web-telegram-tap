import React from 'react'

const LevelProgress = ({ currentLevel, maxLevel, progress }) => {
	return (
		<div className='w-full max-w-md mx-auto mb-8'>
			<div className='flex justify-between text-lg font-semibold mb-2'>
				<span className='mr-2 text-base'>Bronze</span>
				<div className='flex items-center'>
					<span className='text-zinc-500 mr-2 text-base'>Level: </span>
					<span className='text-base'>
						{currentLevel}/{maxLevel}
					</span>
				</div>
			</div>
			<div className='w-full border border-zinc-600 rounded-full h-4'>
				<div
					className='bg-custom-primary h-4 rounded-full transition-all ease-in-out duration-200'
					style={{ width: `${(progress / maxLevel) * 100}%` }}
				></div>
			</div>
		</div>
	)
}

export default LevelProgress
