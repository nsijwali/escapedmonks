import styled from 'styled-components';
import Dialog from '@material-ui/core/Dialog';

const DialogComp = styled(Dialog)`
	.MuiDialog-paper {
		background: ${(props) =>
			props.className === 'background'
				? `linear-gradient(
				to left top,
				rgba(51, 51, 51, 0.4),
				rgba(51, 51, 51, 0.1)
			),
			url('/assets/fam-car.gif')`
				: `linear-gradient(
45deg
, rgba(255,255,255, 0.9), rgba(255,255,255, 0.3));`};

		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		width: 100%;
		height: 50vh;
		display: flex;
		justify-content: center;
		align-items: center;
		backdrop-filter: blur(2rem);
	}
	.MuiDialogContentText-root {
		height: 100%;
		display: flex;
		align-items: center;
		font-size: 2rem;
		font-family: monospace;
		font-weight: 700;
		color: #333;
		flex-direction: column;
		justify-content: center;
		.modal_sub {
			font-size: 1rem;
			margin: 0;
		}
	}
	@media (max-width: 600px) {
		.MuiDialog-paper {
			width: 90%;
		}
		.MuiDialogContentText-root {
			font-size: 20px;
			margin: 0;
		}
	}
`;

export { DialogComp };
