import React, { useEffect, useState } from 'react'
import Loader from './components/UI/Loader/Loader'
import LevelProgress from './components/elements/LevelProgress/LevelProgress'
import Avatar from './components/elements/Players/Avatar/Avatar'
import PlayerInfo from './components/elements/Players/PlayerInfo/PlayerInfo'
import TapButton from './components/elements/TapButton/TapButton'
import TapCounter from './components/elements/TapCounter/TapCounter'
import './styles/App.scss'

function App() {
	const [tapCount, setTapCount] = useState(0)
	const [loading, setLoading] = useState(true)
	const [playerName, setPlayerName] = useState('Nick')
	const [playerLastName, setPlayerLastName] = useState('Name')
	const [playerImg, setPlayerImg] = useState(
		'https://www.strasys.uk/wp-content/uploads/2022/02/Depositphotos_484354208_S.jpg'
	)
	const [playerLevel, setPlayerLevel] = useState(1)
	const [playerEnergy, setPlayerEnergy] = useState(100)
	const [playerClaim, setPlayerClaim] = useState(0)
	const maxLevel = 10

	const tg = window.Telegram.WebApp

	useEffect(() => {
		const fetchData = async () => {
			if (!tg.initDataUnsafe) {
				console.error('Telegram WebApp data is not available.')
				return
			}

			const user = tg.initDataUnsafe.user

			// console.log('User Data:', user)

			if (user) {
				setPlayerName(user.first_name || 'undefined')
				setPlayerLastName(user.last_name || 'undefined')
				setPlayerImg(
					user.photo_url ||
						'https://www.strasys.uk/wp-content/uploads/2022/02/Depositphotos_484354208_S.jpg'
				)
			}

			const timer = setTimeout(() => {
				setLoading(false)
			}, 3000)

			return () => clearTimeout(timer)
		}

		fetchData()
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
		<section className='text-white min-h-screen flex flex-col items-center pt-16 w-full'>
			<Avatar
				src={playerImg}
				alt={`${playerName} ${playerLastName}`}
				name={playerName}
				surname={playerLastName}
			/>
			<br />
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
