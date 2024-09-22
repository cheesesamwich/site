import React from 'react';

export function Hyperlink({ href, text, colour }) {
	return (
		<h1 className={`hyperlink text-ctp-${colour}`}>
			<a href={href} target="_blank">
				{text}
			</a>
		</h1>
	);
}
