import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import styles from '../../styles/Home.module.css';
import { app } from '../../firebase';

const db = app.firestore();
const useStyles = makeStyles((theme) => ({}));

const TouristSpots = () => {
	const theme = useTheme();
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
	}, [db]);

	return tutorialSteps.length !== 0 ? (
		<div className={styles.swipe__container}>
			<Paper square elevation={0} className={styles.swipe_header}>
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
			<h5 className={styles.swipes__desc}>{tutorialSteps[activeStep].desc}</h5>
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
			/>
		</div>
	) : (
		<div />
	);
};

export default TouristSpots;
