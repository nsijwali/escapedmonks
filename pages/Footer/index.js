import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import Youtube from '@material-ui/icons/YouTube';
import WhatsApp from '@material-ui/icons/WhatsApp';
import styles from '../../styles/Home.module.css';

const useStyles = makeStyles({
	root: {
		width: '50rem',
		backgroundColor: '#424242',
		position: 'fixed !important',
		bottom: 10,
	},
});

const Footer = () => {
	const classes = useStyles();
	const [value, setValue] = React.useState('recents');

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<BottomNavigation
			value={value}
			onChange={handleChange}
			className={styles.footer}
		>
			<BottomNavigationAction
				label='Instagram'
				value='instagram'
				icon={
					<a
						href='https://www.instagram.com/escapedmonks/?r=nametag'
						target='_blank'
						without
						rel='noreferrer'
					>
						<Instagram color='primary' />
					</a>
				}
			/>
			<BottomNavigationAction
				label='Facebook'
				value='facebook'
				icon={
					<a
						href='https://www.facebook.com/Escapedmonks'
						target='_blank'
						without
						rel='noreferrer'
					>
						<Facebook color='primary' />
					</a>
				}
			/>
			<BottomNavigationAction
				label='Youtube'
				value='youtube'
				icon={
					<a
						href='https://youtube.com/channel/UCpJ8w5qItyelWB-Euubm0Fw'
						target='_blank'
						without
						rel='noreferrer'
					>
						<Youtube color='primary' />
					</a>
				}
			/>
			<BottomNavigationAction
				label='WhatsApp'
				value='whatsApp'
				icon={
					<a
						href='https://wa.me/+918882585290/'
						target='_blank'
						without
						rel='noreferrer'
					>
						<WhatsApp color='primary' />
					</a>
				}
			/>
		</BottomNavigation>
	);
};
export default Footer;
