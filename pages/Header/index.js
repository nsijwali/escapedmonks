import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';

import PhoneIphone from '@material-ui/icons/PhoneIphone';
import Email from '@material-ui/icons/Email';
import styles from '../../styles/Home.module.css';
import TouristSpots from '../Views/TouristSpots';
import About from '../Views/About';

export default function BackToTop(props) {
	return (
		<AppBar className={styles.header}>
			<Toolbar>
				<span className={styles.header__wrapper}>
					<Avatar
						className={styles.avatar}
						alt='escapedmonks'
						src='/assets/app-logo.svg'
					/>
					<h3 className={styles.header__title}>EscapedMonks</h3>
				</span>
				<div className={styles.contact}>
					<>
						<a href='tel:+917838256011'>
							<PhoneIphone style={{ color: 'navy' }} />
							7838256011
						</a>
						<a href='tel:+918882585290'>
							<PhoneIphone style={{ color: 'navy' }} />
							8882585290
						</a>
					</>

					<a
						href='https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=escapedmonks@gmail.com'
						target='_blank'
						without
						rel='noreferrer'
					>
						<Email style={{ color: 'navy' }} />
						escapedmonks@gmail.com
					</a>
				</div>
			</Toolbar>
		</AppBar>
		// </div>
	);
}
