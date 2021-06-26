import styled from 'styled-components';

const Footerwrapper = styled.div`
	color: grey;
	background-color: #f2f2f2;
	/* background-color: rgba(255, 255, 255, 0.15); */
	font-size: 1.125rem;
	position: relative;
	padding: 5rem 1rem;
	font-weight: 400;
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	section {
		cursor: pointer;
	}
	.col-31,
	.col-32,
	.col-33 {
		text-align: center;
	}
	.col-title {
		color: #333 !important;
		font-size: 16px;
	}
	.copyrights {
		font-size: 12px;
		color: grey;
		display: flex;
		align-items: center;
	}
	.foot_wrap {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		width: 100%;
	}
	.followus {
		display: flex;
		a {
			padding: 0 0.25rem;
			transition: transform 0.2s;
			svg:hover {
				color: #000 !important;
				transform: scale(1.2);
			}
		}
	}

	section {
		padding: 0 1rem;
		p {
			font-size: 14px;
		}
	}
`;

export { Footerwrapper };
