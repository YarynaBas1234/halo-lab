import React from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

import { MembersIcon, MembersLogo, NatureNeedsIcon, ParrotIcon } from 'assets/icons';
import { Search } from '_components/common';

import './style.scss';

const COUNT_MEMBERS = 29128;

const HeroSection = () => {
	const count = useMotionValue(0);
	const rounded = useTransform(count, Math.round);

	React.useEffect(() => {
		const animation = animate(count, COUNT_MEMBERS, { duration: 10 });
		return animation.stop;
	}, [count]);

	return (
		<section className='hero-section' id='home'>
			<div className='wrapper hero-section-wrapper'>
				<div className='nature-needs-aside'>
					<h1 aria-label='Nature needs you' className='nature-needs-aside-logo'>
						<NatureNeedsIcon />
					</h1>
					<div className='nature-needs-aside-details'>
						<p className='nature-needs-aside-details-text'>
							The scale of the challenges facing our planet can seem daunting, but we can all do
							something.
						</p>
						<Search className='nature-needs-aside-search' />
					</div>
				</div>
				<div className='parrot-aside-wrapper'>
					<div className='parrot-aside'>
						<div className='members-container'>
							<MembersIcon className='members-bg' />
							<MembersLogo className='members-logo' />
							<div className='members-info'>
								<span className='members-info-title'>Members</span>
								<motion.span className='members-info-number'>{rounded}</motion.span>
							</div>
						</div>
						<ParrotIcon className='parrot-icon' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
