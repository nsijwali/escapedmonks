import React, { useState } from 'react';
import Image from 'next/image';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay, bindKeyboard } from 'react-swipeable-views-utils';
import kedarnathDham from '../../public/assets/kedarnath_dham.jpeg';
import KasolValley from '../../public/assets/kasol_valley.jpeg';
import Chopta from '../../public/assets/chopta_tunganath.jpeg';
import Tuganath from '../../public/assets/tunganath.jpeg';
import Solang from '../../public/assets/solang_valley.jpeg';
import styles from '../../styles/Home.module.css';

const AutoPlaySwipeableViews = bindKeyboard(autoPlay(SwipeableViews));

const tutorialSteps = [
	{
		label: 'Kedharnath Dham',
		imgPath: kedarnathDham,
		desc: `Kedarnath, possibly the most well-known and
widely traveled dham in our itinerary.
According to old legends, Kedarnath is the
place where Lord Shiva granted the Pandavas
redemption after many prayers and requests,
upon the end of the Kurukshetra war. “Kedar” is
one of the many other alternative names for
Lord Shiva. Kedarnath is dedicated to Lord
Shiva.`,
	},
	{
		label: 'Kasol to Kheerganga',
		imgPath: KasolValley,
		desc: `Kedarnath, possibly the most well-known and
widely traveled dham in our itinerary.
According to old legends, Kedarnath is the
place where Lord Shiva granted the Pandavas
redemption after many prayers and requests,
upon the end of the Kurukshetra war. “Kedar” is
one of the many other alternative names for
Lord Shiva. Kedarnath is dedicated to Lord
Shiva.`,
	},
	{
		label: 'Chotpa & Tunganath',
		imgPath: Chopta,
		desc: `Kedarnath, possibly the most well-known and
widely traveled dham in our itinerary.
According to old legends, Kedarnath is the
place where Lord Shiva granted the Pandavas
redemption after many prayers and requests,
upon the end of the Kurukshetra war. “Kedar” is
one of the many other alternative names for
Lord Shiva. Kedarnath is dedicated to Lord
Shiva.`,
	},
	{
		label: 'Tuganath and Kedarnath',
		imgPath: Tuganath,
		desc: `Kedarnath, possibly the most well-known and
widely traveled dham in our itinerary.
According to old legends, Kedarnath is the
place where Lord Shiva granted the Pandavas
redemption after many prayers and requests,
upon the end of the Kurukshetra war. “Kedar” is
one of the many other alternative names for
Lord Shiva. Kedarnath is dedicated to Lord
Shiva.`,
	},
	{
		label: 'Manali Solang',
		imgPath: Solang,
		desc: `Kedarnath, possibly the most well-known and
widely traveled dham in our itinerary.
According to old legends, Kedarnath is the
place where Lord Shiva granted the Pandavas
redemption after many prayers and requests,
upon the end of the Kurukshetra war. “Kedar” is
one of the many other alternative names for
Lord Shiva. Kedarnath is dedicated to Lord
Shiva.`,
	},
];

const useStyles = makeStyles((theme) => ({}));

const TouristSpots = () => {
	const classes = useStyles();
	const theme = useTheme();
	const [activeStep, setActiveStep] = useState(0);
	const maxSteps = tutorialSteps.length;

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStepChange = (step) => {
		setActiveStep(step);
	};

	return (
		<div className={styles.swipe__container}>
			<Paper square elevation={0} className={styles.swipe_header}>
				<Typography>{tutorialSteps[activeStep].label}</Typography>
			</Paper>
			{/* <AutoPlaySwipeableViews
				axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
				index={activeStep}
				onChangeIndex={handleStepChange}
				enableMouseEvents
				className={styles.swipes}
			>
				{tutorialSteps.map((step, index) => (
					<div key={step.index}>
						<Image
							className={styles.swipes__img}
							src={step.imgPath}
							alt={step.label}
							loading='eager'
						/>
					</div>
				))}
			</AutoPlaySwipeableViews> */}
			<Image
				className={styles.swipes__img}
				src={tutorialSteps[activeStep].imgPath}
				alt={tutorialSteps[activeStep].label}
				loading='eager'
			/>
			<h5 className={styles.swipes__desc}>{tutorialSteps[activeStep].desc}</h5>
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
	);
};

export default TouristSpots;
