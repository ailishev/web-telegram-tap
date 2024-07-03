import { useState } from 'react'
import './App.css'
const tg = window.Telegram.WebApp
function App() {
	const [tapCount, setTapCount] = useState(0)

	const handleTap = () => {
		setTapCount(tapCount + 1)
	}

	return (
		<section className='bg-dark text-white min-h-screen flex flex-col items-center justify-start pt-16'>
			<div className='text-center mb-12 mt-15'>
				<div className='flex gap-2.5 items-center'>
					<div className='relative w-10 h-10'>
						<img
							src='./assets/coin.png'
							alt='coin'
							layout='fill'
							objectFit='contain'
						/>
					</div>
					<h1 className='text-4xl font-extrabold'>
						{new Intl.NumberFormat('de-DE').format(tapCount)}
					</h1>
				</div>
			</div>
			<button
				onClick={handleTap}
				className='transition-transform transform rounded-full shadow-lg tap-button'
				aria-label='Tap button'
			>
				<img
					src='/assets/1.png'
					alt='button'
					style={{ width: '200px', height: '200px' }}
				/>
			</button>
		</section>
	)
}

export default App
