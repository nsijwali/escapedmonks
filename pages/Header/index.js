import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import PhoneIphone from '@material-ui/icons/PhoneIphone';
import Email from '@material-ui/icons/Email';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import styles from '../../styles/Home.module.css';

function HideOnScroll(props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({ target: window ? window() : undefined });

	return (
		<Slide appear={false} direction='down' in={!trigger}>
			{children}
		</Slide>
	);
}

export default function BackToTop(props) {
	return (
		<>
			{' '}
			<HideOnScroll {...props}>
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
									<PhoneIphone />
									7838256011
								</a>
								<a href='tel:+918882585290'>
									<PhoneIphone />
									8882585290
								</a>
							</>

							<a
								href='https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=escapedmonks@gmail.com'
								target='_blank'
								without
								rel='noreferrer'
							>
								<Email />
								escapedmonks@gmail.com
							</a>
						</div>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
		</>
	);
}
