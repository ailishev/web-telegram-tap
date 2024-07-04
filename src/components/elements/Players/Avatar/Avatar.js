const Avatar = ({ src, alt, name, surname, avatar }) => {
	return (
		<div className='absolute top-0 left-0 p-4 flex items-center gap-4'>
			<img src={avatar} alt={alt} className='w-12 h-12 rounded-xl' />
			<div className='flex flex-col'>
				<span className='text-base font-semibold'>
					{name} {surname}
				</span>
				<span className='text-sm font-medium mt-[-6px] text-zinc-400'>
					Новичок
				</span>
			</div>
		</div>
	)
}
export default Avatar
