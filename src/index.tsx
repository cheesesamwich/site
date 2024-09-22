import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function GameCard({
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
			className="cursor-pointer relative w-4/5 h-16 border-2 border-ctp-surface1 rounded-lg flex items-center justify-center overflow-hidden hover:border-ctp-maroon"
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

function App() {
	return (
		<div className="w-screen h-screen bg-ctp-base flex items-center justify-center">
			<div className="flex flex-col md:w-11/12 lg:w-1/3 sm:w-3/4 aspect-square gap-5">
				<div className="grid-bio w-full h-1/2  gap-5">
					<h1 className="text-3xl text-ctp-text">Hey! I'm Samwich</h1>
					<h1 className="text-2xl text-ctp-text">
						I like programming, gaming, and open source software
					</h1>
				</div>
				<div className="flex flex-row h-1/2 w-full gap-5">
					<div className="grid-bio h-full w-1/2 gap-5">
						<GameCard
							name={'Lucida CLI'}
							href={'https://github.com/cheesesamwich/lucidacli'}
						/>
						<GameCard
							name={'Site'}
							href={'https://github.com/cheesesamwich/site'}
						/>
						<GameCard
							name={'Gort'}
							href={'https://github.com/cheesesamwich/Gort'}
						/>
					</div>
					<div className="grid-bio h-full w-1/2 gap-5">
						<h1 className="hyperlink text-ctp-teal">
							<a
								href="https://github.com/cheesesamwich"
								target="_blank"
							>
								Github
							</a>
						</h1>
						<h1 className="hyperlink text-ctp-red">
							<a
								href="https://www.youtube.com/channel/UCKuGO0SCyxax4934fIcStvA"
								target="_blank"
							>
								Youtube
							</a>
						</h1>
						<h1 className="hyperlink text-ctp-peach">
							<a
								href="https://www.last.fm/user/cheesesamwich"
								target="_blank"
							>
								Last.fm
							</a>
						</h1>
						<h1 className="hyperlink text-ctp-blue">
							<a
								href="https://discord.com/users/976176454511509554"
								target="_blank"
							>
								Discord
							</a>
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
