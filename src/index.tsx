import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client'; // Update this import
import './index.css'; // Make sure to import your CSS file
import { useSwipeable } from 'react-swipeable';
import anime from 'animejs';

const sections = [
	<>
		<h1 className="text-3xl text-ctp-text mb-3">Hey!</h1>
		<h2 className="text-2xi  text-ctp-text">
			I'm Samwich, but you can call me Sam
		</h2>
		<h2 className="text-2xi  text-ctp-text">
			I like programming, gaming, and open source software
		</h2>
	</>,
	<>
		<h1 className="text-3xl text-ctp-text mb-3">Links</h1>
		<div className="flex row gap-5">
			{Object.entries({
				Github: 'https://github.com/cheesesamwich',
				Discord: 'https://discord.com/users/976176454511509554',
				'Last.fm': 'https://www.last.fm/user/cheesesamwich',
			}).map(([key, value]) => (
				<h2 className="text-2xi text-ctp-mauve mt-2 hover:scale-105 transition-all duration-250 ease-in-out">
					<a href={value} target="_blank">
						{key}
					</a>
				</h2>
			))}
		</div>
	</>,
];

function App() {
	const [scrollIndex, setScrollIndex] = useState(0);

	const [hasSwiped, setHasSwiped] = useState(false);

	const handlers = useSwipeable({
		trackMouse: true,
		onSwipedLeft: () => {
			if (scrollIndex < sections.length - 1) {
				setScrollIndex(scrollIndex + 1);
			}
			if (!hasSwiped) {
				setHasSwiped(true);
			}
		},
		onSwipedRight: () => {
			if (scrollIndex > 0) {
				setScrollIndex(scrollIndex - 1);
			}
		},
	});

	useEffect(() => {
		if (hasSwiped) {
			anime({ targets: '#swipeText', translateX: '-400', opacity: 0 });
		}
	}, [hasSwiped]);

	return (
		<div
			className="h-screen flex items-center justify-center bg-ctp-base border-ctp-mauve-lg select-none font-bold text-center"
			{...handlers}
		>
			<h1
				id={'swipeText'}
				className="text-lg text-ctp-subtext0 text-bold absolute bottom-1"
			>
				(swipe)
			</h1>
			<div className="flex flex-col scale-125 md:scale-150">
				<div className="bg-ctp-mantle rounded-lg p-6 max-w-lg border-2 border-ctp-mauve transition duration-200 ease-in-out">
					{sections[scrollIndex]}
				</div>
				<div className="p-1 m-2 bg-ctp-mantle flex flex-row gap-auto ml-auto mr-auto gap-1 rounded-lg">
					{sections.map((e, index) => (
						<div
							className={`w-4 h-4 bg-opacity 0 rounded-full transition duration-300 ease-in-out ${
								index == scrollIndex
									? 'bg-ctp-mauve'
									: 'bg-ctp-base'
							}`}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
