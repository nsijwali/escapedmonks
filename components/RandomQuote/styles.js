import styled from 'styled-components';

const QuoteWrapper = styled.div`
	color: grey;
	padding: 4rem 2rem;
	font-weight: 400;
	width: 100vw;
	font-size: 1.5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.quote {
		transform: rotate(180deg);
		color: goldenrod;
		font-size: 2rem;
	}
	@media (max-width: 600px) {
		font-size: 1rem;
		.quote {
			transform: rotate(180deg);
			color: goldenrod;
			font-size: 1.5rem;
		}
	}
	span {
		text-align: right;
	}
	.author {
		width: 100%;
		color: goldenrod;
		font-size: 0.875rem;
	}
`;

export { QuoteWrapper };
