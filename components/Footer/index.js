import React from 'react';
import { Footerwrapper } from './styles';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import Youtube from '@material-ui/icons/YouTube';
import WhatsApp from '@material-ui/icons/WhatsApp';
import Copyright from '@material-ui/icons/Copyright';

const Footer = () => {
	const getYear = new Date().getFullYear();
	return (
		<Footerwrapper>
			<div className='foot_wrap'>
				<span className='col-31'>
					<p className='col-title'>Company</p>
					<section>
						<p>About us</p>
						<p>About us</p>
						<p>About us</p>
					</section>
				</span>
				<span className='col-32'>
					<p className='col-title'>Contact Us</p>
					<section>
						<p>Contact Details</p>
						<p>Contact Details</p>
						<p>Contact Details</p>
					</section>
				</span>
				<span className='col-33'>
					<p className='col-title'>Legal</p>
					<section>
						<p>Privacy Policy</p>
						<p>Terms & Conditions</p>
						<p>Cancellation Policy</p>
					</section>
				</span>
			</div>
			<p className='followus'>
				follow us
				<a
					href='https://www.instagram.com/escapedmonks/?r=nametag'
					target='_blank'
					without
					rel='noreferrer'
				>
					<Instagram style={{ color: 'grey' }} />
				</a>
				<a
					href='https://www.facebook.com/Escapedmonks'
					target='_blank'
					without
					rel='noreferrer'
				>
					<Facebook style={{ color: 'grey' }} />
				</a>
				<a
					href='https://youtube.com/channel/UCpJ8w5qItyelWB-Euubm0Fw'
					target='_blank'
					without
					rel='noreferrer'
				>
					<Youtube style={{ color: 'grey' }} />
				</a>
				<a
					href='https://wa.me/+918882585290/'
					target='_blank'
					without
					rel='noreferrer'
				>
					<WhatsApp style={{ color: 'grey' }} />
				</a>
			</p>
			<p className='copyrights'>
				<Copyright style={{ color: 'grey' }} fontSize='small' />
				<span>{getYear} escapedmonks. All rights reserved.</span>
			</p>
		</Footerwrapper>
	);
};

export default Footer;
