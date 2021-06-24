/* eslint-disable @next/next/no-page-custom-font */
import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Head from 'next/head';
import Header from './Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';
import TouristSpots from '../pages/Views/TouristSpots';
import About from '../pages/Views/About';
import Quote from '../components/RandomQuote';
import CoolStep from '../components/CoolStepper';

export default function Home() {
	const [showFooter, setFooter] = useState(false);
	const description =
		'we are the monks who love travelling and have escaped from the main stream life. We help people to escape from their stressful life by offering them best packages available';
	const pageTitle = 'escapedmonks';

	useEffect(() => {
		setFooter(true);
	}, []);
	return (
		<>
			<Head>
				<title>{pageTitle}</title>
				<meta name='description' content={description} />
				<meta property='og:title' content={pageTitle} key='ogtitle' />
				<meta
					content='travel, journey, trip, hangout, live, life, wanderer, love, hotel, monks, hotel, escape, plan'
					name='keywords'
				/>
				<meta property='og:description' content={description} key='ogdesc' />
				<link rel='icon' href='/assets/logo.png' />
				<meta name='twitter:card' content={description} key='twcard' />
				<meta property='og:url' content={'/assets/logo.png'} key='ogurl' />
				<meta property='og:image' content={'/assets/logo.png'} key='ogimage' />
				<meta
					property='og:site_name'
					content={'https://escapedmonks.vercel.app/'}
					key='ogsitename'
				/>
				<meta property='og:title' content={pageTitle} key='ogtitle' />
				<meta property='og:description' content={description} key='ogdesc' />
			</Head>
			<div className={styles.container}>
				<Header />
				<About />
				{showFooter && <Quote />}
				<TouristSpots />
				{showFooter && <CoolStep />}
				{showFooter && <Footer />}
			</div>
		</>
	);
}
