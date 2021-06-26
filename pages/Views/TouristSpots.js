import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import AccessTime from '@material-ui/icons/AccessTime';
import RoomOutlined from '@material-ui/icons/RoomOutlined';
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

	const currencyFormatter = (val) => {
		let res = val.toString();
		let lastThree = res.substring(res.length - 3);
		let otherNumbers = res.substring(0, res.length - 3);
		if (otherNumbers != '') lastThree = ',' + lastThree;
		return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree;
	};
	return tutorialSteps.length !== 0 ? (
		<div style={{ width: '100%' }}>
			<p className={styles.app_label}>Trending Trips</p>
			<div className={styles.touristspots}>
				{tutorialSteps.map(
					({
						label,
						imgPath = '',
						desc,
						pdfUrl,
						price,
						destination,
						duration,
					}) => (
						<Card className={styles.card} key={label}>
							<CardActionArea>
								<span className={styles.image_overlay}>
									<CardMedia
										className={styles.media}
										image={imgPath}
										title='Contemplative Reptile'
									/>
									<span className={styles.overlay}>{desc}</span>
								</span>
								<CardContent>
									<div className={styles.topSunHead}>
										<span className={styles.topSunHeadLeft}>
											<AccessTime />
											{duration}
										</span>
										<span className={styles.topSunHeadRight}>
											<RoomOutlined />
											{destination}
										</span>
									</div>
									<Typography
										gutterBottom
										variant='h6'
										component='h6'
										className={styles.spotTitle}
									>
										{label.toLowerCase()}
									</Typography>
									<p className={styles.price}>
										Starts @ ₹{currencyFormatter(price)}
									</p>
								</CardContent>
							</CardActionArea>
							<CardActions className={styles.card_action}>
								{/* <Button size='small' color='primary'>
								Share
							</Button> */}
								<Button size='small' color='primary'>
									<a href={pdfUrl} target='_blank' without rel='noreferrer'>
										Learn More
									</a>
								</Button>
							</CardActions>
						</Card>
					),
				)}
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
