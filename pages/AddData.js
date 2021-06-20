import React, { useState, useEffect } from 'react';
import { app } from '../firebase';
import firebase from 'firebase';

function AddData() {
	const [fileUrl, setFileUrl] = useState(null);
	const [pdfUrl, setPdfUrl] = useState(null);
	const db = app.firestore();
	const onFileChange = async (e) => {
		if (e.target?.files && e.target?.files[0] !== null) {
			const file = e.target.files[0];
			const storageRef = app.storage().ref();
			const fileRef = storageRef.child(file.name);
			await fileRef.put(file);
			setFileUrl(await fileRef.getDownloadURL());
		}
	};

	const onItenaryChange = async (e) => {
		if (e.target?.files && e.target?.files[0] !== null) {
			const file = e.target.files[0];
			const storageRef = app.storage().ref();
			const fileRef = storageRef.child(file.name);
			await fileRef.put(file);
			setPdfUrl(await fileRef.getDownloadURL());
		}
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		const username = e.target.username.value;
		const desc = e.target.desc.value;
		if (!username || !fileUrl) {
			return;
		}
		await db.collection('packages').add({
			label: username,
			imgPath: fileUrl,
			desc: desc,
			pdfUrl: pdfUrl,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
	};
	return (
		<form onSubmit={onSubmit}>
			<input type='text' name='username' placeholder='NAME' />
			<input type='text' name='desc' placeholder='DESC' />
			<input type='file' onChange={onFileChange} accept='image/*' />
			<input type='file' onChange={onItenaryChange} accept='application/pdf' />
			<button>Submit</button>
		</form>
	);
}

export default AddData;
