import React from 'react';

export function Hyperlink(props) {
	const { text, href } = props;

	return (
		<h1 {...props}>
			<a href={href} target="_blank">
				{text}
			</a>
		</h1>
	);
}
