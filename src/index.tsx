import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ProjectCard } from './components/ProjectCard';
import { Hyperlink } from './components/Hyperlink';

function App() {
	return (
		<div className="w-screen h-screen bg-ctp-base flex items-center justify-center">
			<div className="flex flex-col md:w-11/12 lg:w-1/3 sm:w-3/4 aspect-square gap-5">
				<div className="grid-bio w-full h-1/2  gap-5">
					<h1 className="text-3xl text-ctp-text">Hey! I'm Sam</h1>
					<h1 className="text-2xl text-ctp-text">
						I like programming, gaming, and open source software
					</h1>
				</div>
				<div className="flex flex-row h-1/2 w-full gap-5">
					<div className="grid-bio h-full w-1/2 gap-5">
						{Object.entries({
							'Lucida CLI':
								'https://github.com/cheesesamwich/lucidacli',
							Site: 'https://github.com/cheesesamwich/site',
							Gort: 'https://github.com/cheesesamwich/Gort',
						}).map(([name, href]) => (
							<ProjectCard name={name} href={href} />
						))}
					</div>
					<div className="grid-bio h-full w-1/2 gap-5">
						<Hyperlink
							text={'Github'}
							href={'https://github.com/cheesesamwich'}
							className={'hyperlink text-ctp-teal'}
						/>
						<Hyperlink
							text={'Last.fm'}
							href={'https://www.last.fm/user/cheesesamwich'}
							className={'hyperlink text-ctp-peach'}
						/>
						<Hyperlink
							text={'Discord'}
							href={
								'https://discord.com/users/976176454511509554'
							}
							className={'hyperlink text-ctp-blue'}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
