import React, { useState } from 'react'

const TapButton = ({ onTap }) => {
	const [effects, setEffects] = useState([])

	const handleTap = e => {
		if (onTap) onTap()

		const rect = e.target.getBoundingClientRect()
		const x = e.clientX - rect.left
		const y = e.clientY - rect.top

		const newEffect = {
			id: Date.now(),
			value: '+1',
			x,
			y,
		}

		setEffects(prevEffects => [...prevEffects, newEffect])

		setTimeout(() => {
			setEffects(prevEffects =>
				prevEffects.filter(effect => effect.id !== newEffect.id)
			)
		}, 1000)
	}

	return (
		<div className='relative'>
			<button
				onClick={handleTap}
				className='transition-transform transform rounded-full tap-button focus:outline-none'
				aria-label='Tap button'
			>
				<img
					src='/assets/1.png'
					alt='button'
					style={{ width: '220px', height: '220px' }}
					draggable='false'
				/>
			</button>
			{effects.map(effect => (
				<span
					key={effect.id}
					className='absolute text-custom-progress font-bold text-3xl animate-ping'
					style={{
						left: `${effect.x}px`,
						top: `${effect.y}px`,
						pointerEvents: 'none',
					}}
				>
					{effect.value}
				</span>
			))}
		</div>
	)
}

export default TapButton
