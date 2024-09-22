import React from 'react';

export function ProjectCard({
	name,
	href,
	asset,
}: {
	name: string;
	href?: string;
	asset?: string;
}) {
	return (
		<div
			onClick={() => href && window.open(href)}
			//at some point i will only add cursor-pointer if href is defined
			className="transition ease-in-out duration-200 cursor-pointer relative w-4/5 h-16 border-2 border-ctp-surface1 rounded-lg flex items-center justify-center overflow-hidden hover:border-ctp-maroon"
		>
			{asset && (
				<img
					src={asset}
					alt={name}
					className="blur-sm absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-75 transition-opacity duration-300 ease-in-out"
				/>
			)}
			<h1 className="text-2xl text-ctp-text pointer-events-none z-10">
				{name}
			</h1>
		</div>
	);
}
