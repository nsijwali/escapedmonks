import React, { useState } from 'react';
import { Footerwrapper } from './styles';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import Youtube from '@material-ui/icons/YouTube';
import WhatsApp from '@material-ui/icons/WhatsApp';
import Copyright from '@material-ui/icons/Copyright';
import Modal from '../Modals';
import { content } from '../../constants';

const Footer = () => {
	const [open, setOpen] = useState(false);
	const [title, setTitle] = useState('Cancellation Policy');

	const toggleModal = () => {
		setOpen(!open);
	};

	const handleModal = (text) => {
		setTitle(text);
		toggleModal();
	};

	const getYear = new Date().getFullYear();
	return (
		<Footerwrapper>
			<div className='foot_wrap'>
				<span className='col-31'>
					<p className='col-title'>Company</p>
					<section>
						<p>About us</p>
					</section>
				</span>
				<span className='col-32'>
					<p className='col-title'>Contact Us</p>
					<section>
						<p>Contact Details</p>
					</section>
				</span>
				<span className='col-33'>
					<p className='col-title'>Legal</p>
					<section>
						<p onClick={() => handleModal('terms')}>Terms & Conditions</p>
						<p onClick={() => handleModal('cancellation')}>
							Cancellation Policy
						</p>
					</section>
					<Modal open={open} toggleModal={toggleModal} body={content[title]} />
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
