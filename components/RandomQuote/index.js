import React, { useState, useEffect } from 'react';
import FormatQuoteRounded from '@material-ui/icons/FormatQuoteRounded';
import { QuoteWrapper } from './styles';
import { app } from '../../firebase';
import Skeleton from '@material-ui/lab/Skeleton';

const db = app.firestore();

function Quote() {
	const [quotes, setQuotes] = useState([]);
	const [random, setRandom] = useState(null);
	useEffect(() => {
		const fetchQuotes = async () => {
			const dailyQuotes = await db.collection('Quotes').get();
			setQuotes(
				dailyQuotes.docs.map((doc) => {
					return doc.data();
				}),
			);
		};
		fetchQuotes();
	}, []);
	useEffect(() => {
		if (quotes.length > 1) {
			setRandom(Math.floor(Math.random() * quotes.length) + 0);
		} else {
			setRandom(0);
		}
	}, [quotes]);
	return (
		<QuoteWrapper>
			<span>
				<span style={{ display: 'flex' }}>
					{quotes.length !== 0 ? (
						<>
							<FormatQuoteRounded className='quote' />
							<p className='title'>{quotes[random]?.quote}</p>
						</>
					) : (
						<Skeleton width={300} />
					)}
				</span>
				{quotes.length !== 0 ? (
					<p className='author'>~{quotes[random]?.author}</p>
				) : (
					<Skeleton width={300} />
				)}
			</span>
		</QuoteWrapper>
	);
}

export default Quote;
