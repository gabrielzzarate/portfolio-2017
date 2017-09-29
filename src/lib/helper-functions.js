import React from 'react';

export default function spanifyTitle(title){
	const loopChar = title.split('').map((char, i) => {
		return (<span key={i}>{char}</span>);
	});
	return loopChar;
}
