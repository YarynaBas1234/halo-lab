import React from 'react';

import { Slider } from '_components/common';

import './style.scss';

const slides = [
	{
		src: "/images/slider1.png",
		title: "Avoid plastic",
		text: "Plastic is everywhere nowadays. People are using it endlessly just for their comfort. However, no one realizes how it is harming our planet.",
	},
	{
		src: "/images/slider2.png",
		title: "Choose organic",
		text: "The term “organic” refers to the way agricultural products are grown and processed.",
	},
	{
		src: "/images/slider3.png",
		title: "Save watter",
		text: "Taking on the issue of ensuring access to safe water requires worldwide effort.",
	},
	{
		src: "/images/slider4.png",
		title: "Plant trees",
		text: "Trees help clean the air we breathe, filter the water we drink, and provide habitat to over 80% of the world's terrestrial biodiversity.",
	},
	{
		src: "/images/slider5.png",
		title: "Save energy",
		text: "A way to make people save energy is by informing them that “comparable others” save more.",
	}
]

const SliderSection = () => {
	return (
		<section className='slider-wrapper' id='places'>
            <Slider slides={slides}/>
		</section>
	);
};

export default SliderSection;
