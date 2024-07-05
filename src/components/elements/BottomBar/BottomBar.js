import { HomeIcon, ShoppingBagIcon, TrophyIcon, Users2 } from 'lucide-react'

const BottomBar = () => {
	return (
		<aside className='fixed bottom-0 left-0 right-0 flex items-center justify-center p-4 shadow-md bg-gray-900 text-white rounded-t-3xl'>
			<div className='flex items-center justify-between gap-4 sm:gap-10 w-full max-w-md'>
				<div className='flex items-center flex-col'>
					<button className='flex flex-col items-center justify-center p-2 transition-transform transform hover:scale-110'>
						<HomeIcon className='mb-1' />
						<span className='font-semibold text-xs sm:text-sm'>Home</span>
					</button>
				</div>
				<div className='flex items-center flex-col'>
					<button className='flex flex-col items-center justify-center p-2 transition-transform transform hover:scale-110'>
						<Users2 className='mb-1' />
						<span className='font-semibold text-xs sm:text-sm'>Friends</span>
					</button>
				</div>
				<div className='flex items-center flex-col'>
					<button className='flex flex-col items-center justify-center p-2 transition-transform transform hover:scale-110'>
						<ShoppingBagIcon className='mb-1' />
						<span className='font-semibold text-xs sm:text-sm'>Shop</span>
					</button>
				</div>
				<div className='flex items-center flex-col'>
					<button className='flex flex-col items-center justify-center p-2 transition-transform transform hover:scale-110'>
						<TrophyIcon className='mb-1' />
						<span className='font-semibold text-xs sm:text-sm'>Leaders</span>
					</button>
				</div>
			</div>
		</aside>
	)
}

export default BottomBar
