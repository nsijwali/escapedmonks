import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import firebase from 'firebase';
import Image from 'next/image';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../styles/Home.module.css';
import { app } from '../firebase';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch',
		},
	},
}));

function AddData() {
	const [fileUrl, setFileUrl] = useState(null);
	const [pdfUrl, setPdfUrl] = useState(null);
	const [loading, setLoading] = React.useState(false);
	const [pdfloading, setPdfLoading] = React.useState(false);
	const [isSaved, setSavedData] = React.useState(false);
	const [isSavedQuote, setSavedQuote] = React.useState(false);
	const db = app.firestore();
	const classes = useStyles();
	const onFileChange = async (e) => {
		if (e.target?.files && e.target?.files[0] !== null) {
			setLoading(true);
			const file = e.target.files[0];
			const storageRef = app.storage().ref();
			const fileRef = storageRef.child(file.name);
			await fileRef
				.put(file)
				.then(() => {
					setLoading(false);
				})
				.catch((error) => setLoading(false));
			setFileUrl(await fileRef.getDownloadURL());
		}
	};

	const onItenaryChange = async (e) => {
		if (e.target?.files && e.target?.files[0] !== null) {
			const file = e.target.files[0];
			const storageRef = app.storage().ref();
			const fileRef = storageRef.child(file.name);
			setPdfLoading(true);
			await fileRef
				.put(file)
				.then(() => {
					setPdfLoading(false);
				})
				.catch((error) => setPdfLoading(false));
			setPdfUrl(await fileRef.getDownloadURL());
		}
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		const label = e.target.label.value;
		const desc = e.target.desc.value;
		const price = e.target.price.value;
		const duration = e.target.duration.value;
		const destination = e.target.destination.value;
		if (!label || !fileUrl || !price || !duration || !destination) {
			alert('type something');
			return;
		}
		setSavedData(true);
		await db
			.collection('packages')
			.add({
				label: label,
				price: price,
				duration: duration,
				destination: destination,
				imgPath: fileUrl,
				desc: desc,
				pdfUrl: pdfUrl,
				timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			})
			.then(() => {
				document.getElementById('myform').reset();
				setPdfUrl('');
				setFileUrl('');
				setSavedData(false);
			})
			.catch((error) => setSavedData(false));
	};

	const onSubmitQuotes = async (e) => {
		e.preventDefault();
		const quote = e.target.quote.value;
		const author = e.target.author.value || 'anonymous';
		if (!quote) {
			alert('type something');
			return;
		}
		setSavedQuote(true);
		await db
			.collection('Quotes')
			.add({
				quote: quote,
				author: author,
			})
			.then(() => {
				document.getElementById('myQuoteform').reset();
				setSavedQuote(false);
			})
			.catch((error) => setSavedQuote(false));
	};
	return (
		<>
			<form
				onSubmit={onSubmit}
				className={styles.addData__container}
				id='myform'
			>
				<Image
					alt='escapedmonks'
					src='/assets/app-logo.svg'
					width={120}
					height={120}
				/>
				<h2>Add Trip Details</h2>
				<input
					id='outlined-basic'
					name='label'
					placeholder='Trip Title'
					variant='outlined'
				/>
				<input
					id='outlined-basic'
					name='price'
					placeholder='price'
					variant='outlined'
					type='number'
				/>
				<input
					id='outlined-basic'
					name='duration'
					placeholder='duration'
					variant='outlined'
				/>
				<input
					id='outlined-basic'
					name='destination'
					placeholder='starting from'
					variant='outlined'
				/>
				<textarea
					id='outlined-basic'
					name='desc'
					placeholder='About Trip'
					style={{ resize: 'none' }}
					rows='6'
				/>
				<div className={styles.upload__image}>
					<input
						accept='image/*'
						id='contained-button-file'
						type='file'
						style={{ display: 'none' }}
						onChange={onFileChange}
					/>
					<label htmlFor='contained-button-file'>
						<Button
							variant='contained'
							color='primary'
							component='span'
							disabled={loading}
						>
							Upload Trip Picture
						</Button>
					</label>
					{loading && <CircularProgress size={24} />}
				</div>

				<div className={styles.upload__image}>
					<input
						id='contained-button-pdf-file'
						type='file'
						style={{ display: 'none' }}
						accept='application/pdf'
						onChange={onItenaryChange}
					/>
					<label htmlFor='contained-button-pdf-file'>
						<Button
							variant='contained'
							color='primary'
							component='span'
							disabled={pdfloading}
						>
							Upload Itinerary
						</Button>
					</label>
					{pdfloading && <CircularProgress size={24} />}
				</div>
				<button
					className={styles.save_btn}
					disabled={loading || pdfloading || isSaved}
				>
					Save Trip
				</button>
				{isSaved && <CircularProgress size={30} />}
			</form>

			<form
				onSubmit={onSubmitQuotes}
				className={styles.addData__container}
				id='myQuoteform'
			>
				<h2>Add Quotes</h2>
				<input
					id='outlined-basic'
					name='quote'
					placeholder='Quote'
					variant='outlined'
				/>
				<input
					id='outlined-basic'
					name='author'
					placeholder='Author'
					variant='outlined'
				/>

				<button className={styles.save_btn} disabled={isSavedQuote}>
					Add to DB
				</button>
				{isSavedQuote && <CircularProgress size={30} />}
			</form>
		</>
	);
}

export default AddData;
