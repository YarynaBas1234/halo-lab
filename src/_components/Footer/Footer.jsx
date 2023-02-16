import React from 'react';

import { FacebookIcon, LinkedInIcon, TwitterIcon } from 'assets/icons';

import './style.scss';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer-wrapper'>
				<div className='footer-column-contact'>
					<p className='footer-h1'>Contacts</p>
					<p className='footer-p'>
						2019 Rootz Foundation.
						<br />
						All rights reserved
					</p>
				</div>
				<div className='footer-column'>
					<p className='footer-h2'>Headquarters</p>
					<p className='footer-p'>
						1234 Taliban
						<br />
						Los Angeles, La 1234567
						<br />
						(123) 456-7890
					</p>
				</div>
				<div className='footer-column'>
					<p className='footer-h2'>Social media</p>
					<div className='footer-contact-icons'>
						<a href='#' className='icon'>
							<TwitterIcon className='icon' />
						</a>
						<a href='#' className='icon'>
							<FacebookIcon />
						</a>
						<a href='#' className='icon'>
							<LinkedInIcon />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
