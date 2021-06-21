/* eslint-disable @next/next/no-page-custom-font */
import React, { useState, useLayoutEffect } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from '../Footer';
import styles from '../styles/Home.module.css';
import TouristSpots from '../pages/Views/TouristSpots';
import About from '../pages/Views/About';

export default function Home() {
	const [showFooter, setFooter] = useState(false);

	useLayoutEffect(() => {
		setFooter(true);
	}, []);
	return (
		<>
			<Head>
				<title>escapedmonks</title>
				<meta name='description' content='Generated by create next app' />
				<link
					rel='stylesheet'
					href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
				/>
				<link rel='icon' href='/assets/logo.png' />
			</Head>
			<div className={styles.container}>
				<Header />
				<About />
				<TouristSpots />
				{showFooter && <Footer />}
			</div>
		</>
	);
}
