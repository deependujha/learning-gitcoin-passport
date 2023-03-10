import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';

// add to your project as a module
import { PassportReader } from '@gitcoinco/passport-sdk-reader';
// import {PassportVerifier} from '@gitcoinco/passport-sdk-verifier';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	const [passport, setPassport] = useState({});

	// create a new instance pointing at Gitcoins mainnet Ceramic node
	const reader = new PassportReader(
		'https://ceramic.passport-iam.gitcoin.co',
		'1'
	);

	const btnClick = async () => {
		console.log('button clicked');
		// read a Passport for any Ethereum Address
		const myPassport = await reader.getPassport(
			'0x31B0F3eeD8cAFA7D09C862b7779AAc826F3c4468'
		);
		console.log('printing passport: ', myPassport);
		setPassport(myPassport);
	};
	return (
		<>
			<Head>
				<title>Reader - Gitcoin Passport</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<button onClick={btnClick}>Click me</button>

				<div>
					{passport && (
						<div
							style={{
								padding: 10,
								marginTop: 10,
								fontSize: 14,
								textAlign: 'left',
							}}
						>
							<h1 style={{ textAlign: 'center' }}>Passport Data</h1>
							{
								// @ts-ignore
								passport?.expiryDate && (
									<p>
										Expiry Date:{' '}
										{
											// @ts-ignore
											passport?.expiryDate
										}
									</p>
								)
							}
							{
								// @ts-ignore
								passport?.issuanceDate && (
									<p>
										Issuance Date:{' '}
										{
											// @ts-ignore
											passport?.issuanceDate
										}
									</p>
								)
							}

							{
								// @ts-ignore
								passport?.stamps?.length > 0 && (
									<div>
										Stamps:{' '}
										<ul>
											{
												// @ts-ignore
												passport?.stamps?.map((item, index) => {
													return <li key={index}>{item.provider}</li>;
												})
											}
										</ul>
									</div>
								)
							}
						</div>
					)}
				</div>
			</main>
		</>
	);
}
