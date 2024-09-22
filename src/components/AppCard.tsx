import React from 'react';

function AppCard({
	icon,
	header,
	url,
}: {
	header: string;
	icon?: string;
	url?: string;
}) {
	return (
		<div
			onClick={() => window.open(url, '_blank')}
			//originally had hover:w-2/3 but it kinda looked iffy
			className={`cursor-pointer relative p-0 delay-50 w-1/2 h-12 border-2 border-ctp-base rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out hover:border-ctp-sapphire overflow-hidden hover:bg-ctp-base`}
		>
			{icon && (
				<img
					src={icon}
					alt="icon"
					className="absolute top-0 left-0 w-full h-full object-cover opacity-0 hover:opacity-75 transition-all duration-300 ease-in-out"
				/>
			)}
			<h1 className="relative z-10 text-2xl text-ctp-text pointer-events-none text-overflow-ellipsis">
				{header}
			</h1>
		</div>
	);
}
