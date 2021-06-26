import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function ScrollDialog({ open, toggleModal, body }) {
	const descriptionElementRef = React.useRef(null);
	React.useEffect(() => {
		if (open) {
			const { current: descriptionElement } = descriptionElementRef;
			if (descriptionElement !== null) {
				descriptionElement.focus();
			}
		}
	}, [open]);

	return (
		<>
			<Dialog
				open={open}
				onClose={toggleModal}
				scroll={'paper'}
				aria-labelledby='scroll-dialog-title'
				aria-describedby='scroll-dialog-description'
			>
				<DialogTitle id='scroll-dialog-title'>{body?.title}</DialogTitle>
				<DialogContent dividers={'paper'}>
					<DialogContentText
						id='scroll-dialog-description'
						ref={descriptionElementRef}
						tabIndex={-1}
					>
						{body?.subBody.length > 0 && <h3>{body?.subBody}</h3>}
						{body?.body.map((ele, index) => (
							<p key={index}>{ele}</p>
						))}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={toggleModal} color='primary'>
						ok
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}
