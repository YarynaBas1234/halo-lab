import React from 'react';

import { AnimatedButton } from '_components/common';

import './style.scss';

const GetStartedSection = () => {
	return (
		<section className='wrapper' id='mission'>
			<div className='started-section'>
				<div className='article'>
					<h2>Get started today!</h2>
					<p className='article-text'>
						Learn more about how you can save our planet's nature. From smart consumption to
						switching to renewable energy, each of us can do our part to save the planet.
					</p>
				</div>
				<form className='form'>
					<img src='/images/vector1.svg' alt='vector' className='decor decor-top-element' />
					<img src='/images/vector2.svg' alt='vector' className='decor decor-bottom-element' />
					<h2 className='form-title'>Log in</h2>
					<input type='search' placeholder='Name' className='field' />
					<input type='email' placeholder='Email' className='field email-field' />
					<AnimatedButton color='primary' className='book-button' fullWidth>
						Book a demo
					</AnimatedButton>
				</form>
			</div>
		</section>
	);
};

export default GetStartedSection;
