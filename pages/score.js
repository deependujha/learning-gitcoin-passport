import React, { useState } from 'react';
import { PassportScorer } from '@gitcoinco/passport-sdk-scorer';

const score = () => {
	const btnClick = async () => {
		console.log('button clicked');
		const scorer = new PassportScorer([
			{
				provider: 'BrightID',
				issuer: 'did:key:z6MkghvGHLobLEdj1bgRLhS4LPGJAvbMA1tn2zcRyqmYU5LC',
				score: 0.5,
			},
			{
				provider: 'Google',
				issuer: 'did:key:z6MkghvGHLobLEdj1bgRLhS4LPGJAvbMA1tn2zcRyqmYU5LC',
				score: 2.5,
			},
			{
				provider: 'Discord',
				issuer: 'did:key:z6MkghvGHLobLEdj1bgRLhS4LPGJAvbMA1tn2zcRyqmYU5LC',
				score: 15,
			},
		]);
		const score = await scorer.getScore(
			'0x31B0F3eeD8cAFA7D09C862b7779AAc826F3c4468'
		);
		console.log('score is: ', score);
	};
	return (
		<div>
			<button onClick={btnClick}>click me</button>
		</div>
	);
};

export default score;
