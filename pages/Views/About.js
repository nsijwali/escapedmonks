import React from 'react';
import { content } from '../../constants';
import styles from '../../styles/Home.module.css';

function About() {
	return (
		<div className={styles.aboutus}>
			<div>
				<p>{content.about}</p>
			</div>
		</div>
	);
}

export default About;
