/* eslint-disable @next/next/no-page-custom-font */
import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';
import TouristSpots from '../pages/Views/TouristSpots';
import About from '../pages/Views/About';
import Quote from '../components/RandomQuote';
import CoolStep from '../components/CoolStepper';
import ScrollTop from '../pages/Header/ScrollTop';
import { content } from '../constants';

export default function Home() {
	const [showFooter, setFooter] = useState(false);
	const [scroll, setScroll] = useState(false);
	const ref = useRef(null);
	const handleScroll = () => {
		setScroll(ref?.current?.getBoundingClientRect().top <= -150);
		console.log(ref?.current?.getBoundingClientRect().top);
	};
	useEffect(() => {
		setFooter(true);
		window.addEventListener('scroll', handleScroll, true);
		return () => {
			window.removeEventListener('scroll', handleScroll, true);
		};
	}, []);

	return (
		<>
			<Head>
				<title>{content.pageTitle}</title>
				<meta name='description' content={content.description} />
				<meta property='og:title' content={content.pageTitle} key='ogtitle' />
				<meta
					content='travel, journey, trip, hangout, live, life, wanderer, love, hotel, monks, hotel, escape, plan, escapedmonks, monks'
					name='keywords'
				/>
				<meta
					property='og:description'
					content={content.description}
					key='ogdesc'
				/>
				<link rel='icon' href='/assets/logo.png' />
				<meta name='twitter:card' content={content.description} key='twcard' />
				<meta property='og:url' content={'/assets/logo.png'} key='ogurl' />
				<meta property='og:image' content={'/assets/logo.png'} key='ogimage' />
				<meta
					property='og:site_name'
					content={'https://escapedmonks.vercel.app/'}
					key='ogsitename'
				/>
				<meta property='og:title' content={content.pageTitle} key='ogtitle' />
				<meta
					property='og:description'
					content={content.description}
					key='ogdesc'
				/>
			</Head>
			<div className={styles.container} ref={ref}>
				<Header />
				<About />
				{showFooter && <Quote />}
				<TouristSpots />
				{showFooter && <CoolStep />}
				{showFooter && <Footer />}
				{scroll && <ScrollTop />}
			</div>
		</>
	);
}
