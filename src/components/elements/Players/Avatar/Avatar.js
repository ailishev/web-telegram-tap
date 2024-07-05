const Avatar = ({ src, alt, name, surname }) => {
	return (
		<div className='absolute top-2 left-0 right-0 p-4 flex items-center justify-between sm:px-6'>
			<div className='flex items-center gap-4'>
				<img src={src} alt={alt} className='w-12 h-12 rounded-xl' />
				<div className='flex flex-col'>
					<span className='text-base font-semibold'>
						{name} {surname}
					</span>
					<span className='text-sm font-medium -mt-1 text-zinc-400'>
						Новичок
					</span>
				</div>
			</div>
			<div className='bg-custom-background py-2 px-4 rounded-xl flex items-center gap-2 backdrop-filter backdrop-blur-md bg-opacity-80'>
				<div className='relative flex items-center'>
					<div className='bg-custom-circle w-3.5 h-3.5 rounded-full animate-ping absolute'></div>
					<div className='bg-custom-circle w-3.5 h-3.5 rounded-full'></div>
				</div>
				<span className='text-sm font-medium'>1</span>
			</div>
		</div>
	)
}

export default Avatar
