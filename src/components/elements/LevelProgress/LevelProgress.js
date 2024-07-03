// components/elements/LevelProgress/LevelProgress.jsx
import React from 'react'

const LevelProgress = ({ currentLevel, maxLevel, progress }) => {
	return (
		<div className='w-full max-w-md mx-auto mb-8'>
			<div className='text-center mb-2'>
				<div className='text-lg font-semibold flex justify-end'>
					<span className='text-zinc-500 mr-2'>Level: </span>
					<span>
						{currentLevel}/{maxLevel}
					</span>
				</div>
			</div>
			<div className='w-full bg-gray-300 rounded-full h-4'>
				<div
					className=' bg-custom-primary h-4 rounded-full'
					style={{ width: `${(progress / maxLevel) * 100}%` }}
				></div>
			</div>
		</div>
	)
}

export default LevelProgress
