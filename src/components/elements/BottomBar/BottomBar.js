import { HomeIcon, ShoppingBagIcon, TrophyIcon, Users2 } from 'lucide-react'

const BottomBar = () => {
	return (
		<aside className='fixed bottom-0 left-0 right-0 flex items-center justify-center p-4 shadow-md bg-custom-bottombar rounded-t-3xl'>
			<div className='flex items-center justify-between gap-10'>
				<div className='flex items-center flex-col'>
					<button className='flex flex-col items-center justify-center p-2 transition-transform transform hover:scale-105'>
						<HomeIcon className='mb-1' />
						<span className='font-semibold'>Home</span>
					</button>
				</div>
				<div className='flex items-center flex-col'>
					<button className='flex flex-col items-center justify-center p-2 transition-transform transform hover:scale-105'>
						<Users2 className='mb-1' />
						<span className='font-semibold'>Friends</span>
					</button>
				</div>
				<div className='flex items-center flex-col'>
					<button className='flex flex-col items-center justify-center p-2 transition-transform transform hover:scale-105'>
						<ShoppingBagIcon className='mb-1' />
						<span className='font-semibold'>Shop</span>
					</button>
				</div>
				<div className='flex items-center flex-col'>
					<button className='flex flex-col items-center justify-center p-2 transition-transform transform hover:scale-105'>
						<TrophyIcon className='mb-1' />
						<span className='font-semibold'>Leaders</span>
					</button>
				</div>
			</div>
		</aside>
	)
}
export default BottomBar
