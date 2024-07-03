import './App.css'
const tg = window.Telegram.WebApp
function App() {
	const onClose = () => {
		tg.close()
	}
	return (
		<section>
			<div>working</div>
			<button onClick={onClose}>Закрыть</button>
		</section>
	)
}

export default App
