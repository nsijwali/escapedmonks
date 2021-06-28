import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { DialogComp } from './styles';

export default function WelcomeModal({ open, toggle }) {
	const [classname, setClassName] = useState('normal');
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		toggle();
		setClassName('normal');
	};
	const setClass = () => {
		setClassName('background');
		setTimeout(() => {
			toggle();
		}, 3000);
		// handleClose;()
	};

	return (
		<>
			<DialogComp
				fullScreen={fullScreen}
				open={open}
				className={classname}
				onClose={handleClose}
				aria-labelledby='responsive-dialog-title'
				disableBackdropClick
				disableEscapeKeyDown
			>
				{/* <DialogTitle id='responsive-dialog-title'>
					{"Use Google's location service?"}
				</DialogTitle> */}
				{classname === 'normal' && (
					<>
						<DialogContent>
							<DialogContentText>
								Hola amigos !!!
								<h4 className='modal_sub'>Welcome to esacapedMonks</h4>
							</DialogContentText>
						</DialogContent>

						<DialogActions>
							<Button
								autoFocus
								onClick={setClass}
								color='primary'
								endIcon={<ArrowRightAlt />}
							>
								{`Let's Make Memories`}
							</Button>
						</DialogActions>
					</>
				)}
			</DialogComp>
		</>
	);
}
