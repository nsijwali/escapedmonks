import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import styles from '../../styles/Home.module.css';
import { app } from '../../firebase';
import Skeleton from '@material-ui/lab/Skeleton';

const db = app.firestore();

const TouristSpots = () => {
	const [activeStep, setActiveStep] = useState(0);
	const [tutorialSteps, setTutorialSteps] = useState([]);

	const maxSteps = tutorialSteps.length;

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

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
								<a
									href={tutorialSteps[activeStep].pdfUrl}
									target='_blank'
									without
									rel='noreferrer'
								>
									Learn More
								</a>
							</Button>
						</CardActions>
					</Card>
				))}

				{/* <Paper square elevation={0} className={styles.swipe_header}>
				<Typography>{tutorialSteps[activeStep].label}</Typography>
			</Paper>
			<Image
				className={styles.swipes__img}
				src={tutorialSteps[activeStep].imgPath}
				alt={tutorialSteps[activeStep].label}
				loading='eager'
				width={500}
				height={500}
			/>
			<span className={styles.swipes__desc}>
				<h5>{tutorialSteps[activeStep].desc}</h5>
				{tutorialSteps[activeStep].pdfUrl && (
					<a
						href={tutorialSteps[activeStep].pdfUrl}
						target='_blank'
						without
						rel='noreferrer'
					>
						see more
					</a>
				)}
			</span>

			<MobileStepper
				steps={maxSteps}
				position='static'
				variant='progress'
				activeStep={activeStep}
				className={styles.swipe__footer}
				nextButton={
					<Button
						size='small'
						onClick={handleNext}
						disabled={activeStep === maxSteps - 1}
					>
						Next
						{theme.direction === 'rtl' ? (
							<KeyboardArrowLeft />
						) : (
							<KeyboardArrowRight />
						)}
					</Button>
				}
				backButton={
					<Button size='small' onClick={handleBack} disabled={activeStep === 0}>
						{theme.direction === 'rtl' ? (
							<KeyboardArrowRight />
						) : (
							<KeyboardArrowLeft />
						)}
						Back
					</Button>
				}
			/> */}
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
