import React from 'react'

const LevelProgress = ({ currentLevel, maxLevel, progress, levelName }) => {
	const progressPercent = (progress / 10) * 100

	return (
		<div className='w-full max-w-md mx-auto mb-8 px-4 sm:px-0'>
			<div className='flex justify-between text-lg font-semibold mb-2'>
				<span className='text-base'>{levelName}</span>
				<div className='flex items-center'>
					<span className='text-zinc-500 mr-2 text-base'>Level:</span>
					<span className='text-base'>
						{currentLevel}/{maxLevel}
					</span>
				</div>
			</div>
			<div className='w-full border border-zinc-600 rounded-full h-4'>
				<div
					className='bg-blue-gradient h-4 rounded-full transition-width ease-in-out duration-300'
					style={{ width: `${progressPercent}%` }}
				></div>
			</div>
		</div>
	)
}

export default LevelProgress
