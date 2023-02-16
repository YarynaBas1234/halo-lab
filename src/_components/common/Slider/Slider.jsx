import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.scss';

import { Pagination, Navigation } from 'swiper';

export const Slider = (props) => {
	const { slides } = props;
	const [isVisible, setIsVisible] = React.useState(true);
	const [activeSlide, setActiveSlide] = React.useState(2);

	return (
		<>
			<Swiper
				initialSlide={activeSlide}
				slidesPerView={4}
				centeredSlides={true}
				spaceBetween={60}
				grabCursor={true}
				onSlideChange={(index) => {
					setActiveSlide(index.activeIndex);
				}}
				pagination={{
					clickable: true,
					type: 'fraction',
				}}
				breakpoints={{
					320: {
						slidesPerView: 1,
						centeredSlides: true,
					},
					800: {
						slidesPerView: 2,
						centeredSlides: true,
					},
					1200: {
						slidesPerView: 3,
						centeredSlides: true,
					},
					1440: {
						slidesPerView: 4,
						centeredSlides: true,
					},
				}}
				navigation={true}
				modules={[Pagination, Navigation]}>
				{slides.map((slide, index) => {
					return (
						<SwiperSlide
							key={index}
							className='swiper-slide'
							onClick={() => {
								setIsVisible(!isVisible);
							}}>
							<motion.div className={activeSlide === index ? 'show' : 'hide'}>
								<div>
									<img src={slide.src} alt={slide.title} className='active-slide-img' />
									<img src='/images/white_slider_background.png' alt='background' />
									<div className='active-slide-content'>
										<h3>{slide.title}</h3>
										<p className='active-slide-text'>{slide.text}</p>
									</div>
								</div>
							</motion.div>
							<motion.div
								className={activeSlide !== index ? 'show' : 'hide'}
								transition={{ type: 'spring' }}>
								<img src={slide.src} alt={slide.title} className='slide-img' />
							</motion.div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</>
	);
};
