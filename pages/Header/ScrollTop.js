import { Button, Grid, makeStyles } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(() => ({
	wrapper: {
		width: '40px',
		height: '40px',
		borderRadius: '50%',
		background: '#2F2F2F',
		position: 'fixed',
		right: '16px',
		bottom: '16px',
		zIndex: 999,
		transition: 'all',
	},
}));

const ScrollTop = () => {
	const classes = useStyles();

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<Grid
			id='scrollToTop'
			container
			direction='row'
			justify='center'
			alignItems='center'
			className={classes.wrapper}
		>
			<Button onClick={scrollToTop}>
				<ExpandLessIcon style={{ color: 'white' }} />
			</Button>
		</Grid>
	);
};

export default ScrollTop;
