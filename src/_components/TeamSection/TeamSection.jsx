import React from 'react';

import Teammates from './Teammates';

import './style.scss';

const TeamSection = () => {

	return (
		<section className='wrapper team-section-wrapper' id='team'>
			<div className='article'>
				<h2>Our top team</h2>
				<p className='article-text'>Learn more about how you can save our planet's nature.</p>
			</div>
			<Teammates />
		</section>
	);
};

export default TeamSection;
