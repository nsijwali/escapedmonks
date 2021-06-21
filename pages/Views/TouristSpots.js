import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import styles from '../../styles/Home.module.css';
import { app } from '../../firebase';
import Skeleton from '@material-ui/lab/Skeleton';

const db = app.firestore();

const TouristSpots = () => {
	const [tutorialSteps, setTutorialSteps] = useState([]);

	useEffect(() => {
		const fetchUsers = async () => {
			const usersCollection = await db
				.collection('packages')
				.orderBy('timestamp', 'asc')
				.get();
			setTutorialSteps(
				usersCollection.docs.map((doc) => {
					return doc.data();
				}),
			);
		};
		fetchUsers();
	}, []);

	return tutorialSteps.length !== 0 ? (
		<div style={{ width: '100%' }}>
			<p className={styles.app_label}>Trips</p>
			<div className={styles.touristspots}>
				{tutorialSteps.map(({ label, imgPath = '', desc, pdfUrl }) => (
					<Card className={styles.card} key={label}>
						<CardActionArea>
							<CardMedia
								className={styles.media}
								image={imgPath}
								title='Contemplative Reptile'
							/>
							<CardContent>
								<Typography gutterBottom variant='h6' component='h6'>
									{label}
								</Typography>
								<Typography
									variant='body2'
									color='textSecondary'
									component='h6'
								>
									{desc}
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions className={styles.card_action}>
							<Button size='small' color='primary'>
								Share
							</Button>
							<Button size='small' color='primary'>
								<a href={pdfUrl} target='_blank' without rel='noreferrer'>
									Learn More
								</a>
							</Button>
						</CardActions>
					</Card>
				))}
			</div>
		</div>
	) : (
		<div style={{ display: 'flex', flexDirection: 'row !important' }}>
			<Skeleton
				animation='wave'
				height={350}
				width={300}
				style={{ margin: 6 }}
			/>
			<Skeleton
				animation='wave'
				height={350}
				width={300}
				style={{ margin: 6 }}
			/>
			<Skeleton
				animation='wave'
				height={350}
				width={300}
				style={{ margin: 6 }}
			/>
		</div>
	);
};

export default TouristSpots;
