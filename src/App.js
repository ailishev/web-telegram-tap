import React, { useEffect, useState } from 'react'
import Loader from './components/UI/Loader/Loader'
import LevelProgress from './components/elements/LevelProgress/LevelProgress'
import PlayerInfo from './components/elements/Players/PlayerInfo/PlayerInfo'
import TapButton from './components/elements/TapButton/TapButton'
import TapCounter from './components/elements/TapCounter/TapCounter'
import './styles/App.scss'

function App() {
	const [tapCount, setTapCount] = useState(0)
	const [loading, setLoading] = useState(true)
	const [playerName, setPlayerName] = useState('Player1')
	const [playerLevel, setPlayerLevel] = useState(1)
	const [playerEnergy, setPlayerEnergy] = useState(100)
	const [playerClaim, setPlayerClaim] = useState(100000)
	const maxLevel = 10

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false)
		}, 3000)
		return () => clearTimeout(timer)
	}, [])

	const handleTap = () => {
		setTapCount(tapCount + 1)
		if (tapCount % 10 === 0) {
			setPlayerLevel(playerLevel + 1)
		}
		setPlayerEnergy(playerEnergy - 1)
	}

	if (loading) {
		return <Loader />
	}

	return (
		<section className='bg-dark text-white min-h-screen flex flex-col items-center justify-start pt-16'>
			<PlayerInfo
				name={playerName}
				level={playerLevel}
				energy={playerEnergy}
				claim={playerClaim}
			/>
			<TapCounter count={tapCount} />
			<LevelProgress
				currentLevel={playerLevel}
				maxLevel={maxLevel}
				progress={tapCount % 10}
			/>
			<TapButton onTap={handleTap} />
		</section>
	)
}

export default App
