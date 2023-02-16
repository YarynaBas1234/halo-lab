import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";

import './style.scss';

const Teammates = () => {
	const isMobile = window.innerWidth <= 1080;

	const controls = useAnimation();
	const [ref, inView] = useInView();

	React.useEffect(() => {
		if (inView) {
		  controls.start({ opacity: 1, scale: 1, zIndex: 1 });
		}
	  }, [controls, inView]);

	return (
		<div className='teammates'>
			<div className='left-avatar-wrapper'>
				<motion.div
					ref={ref}
					initial={{ opacity: 0, scale: 0.5, zIndex: 1 }}
					animate={controls}
					transition={{
						default: {
							duration: 0.3,
							ease: [0, 0.71, 0.2, 1.01],
						},
						scale: {
							type: 'spring',
							damping: 5,
							stiffness: 100,
							restDelta: 0.001,
						},
					}}>
					<img
						src='/images/img_1.png'
						className={`avatar ${isMobile ? 'mobile-left-avatar' : ''}`}
						alt='John'
					/>
				</motion.div>
				<img src='/images/dashed_line.png' className='dashed-line-left' alt='dashed line' />
			</div>
			<div className='middle-avatar-wrapper'>
				<motion.div
					ref={ref}
					initial={{ opacity: 0, scale: 0.5, zIndex: 1 }}
					animate={controls}
					transition={{
						default: {
							duration: 0.3,
							ease: [0, 0.71, 0.2, 1.01],
						},
						scale: {
							type: 'spring',
							damping: 5,
							stiffness: 100,
							restDelta: 0.001,
						},
					}}>
					<img
						src='/images/img_2.png'
						className={`${isMobile ? 'mobile-right-avatar' : 'avatar'}`}
						alt='Jerry'
					/>
				</motion.div>
			</div>
			<div className='right-avatar-wrapper'>
				<motion.div
					ref={ref}
					initial={{ opacity: 0, scale: 0.5, zIndex: 1 }}
					animate={controls}
					transition={{
						default: {
							duration: 0.3,
							ease: [0, 0.71, 0.2, 1.01],
						},
						scale: {
							type: 'spring',
							damping: 5,
							stiffness: 100,
							restDelta: 0.001,
						},
					}}>
					<img
						src='/images/img_3.png'
						className={`avatar ${isMobile ? 'mobile-left-avatar' : ''}`}
						alt='Jim'
					/>
				</motion.div>
				<img src='/images/dashed_line.png' className='dashed-line-right' alt='dashed line' />
			</div>
		</div>
	);
};

export default Teammates;
