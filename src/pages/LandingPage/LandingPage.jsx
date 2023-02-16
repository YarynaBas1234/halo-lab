import React from 'react';

import Footer from '_components/Footer';
import GetStartedSection from '_components/GetStartedSection';
import Header from '_components/Header';
import HeroSection from '_components/HeroSection';
import ReadyStarted from '_components/ReadyStarted';
import SliderSection from '_components/SliderSection';
import TeamSection from '_components/TeamSection';

import './style.scss';

const LandingPage = () => {
	return (
		<>
			<Header />
			<main className='main-wrapper'>
				<HeroSection />
				<TeamSection />
				<GetStartedSection />
				<ReadyStarted />
				<SliderSection />
			</main>
			<Footer />
		</>
	);
};

export default LandingPage;
