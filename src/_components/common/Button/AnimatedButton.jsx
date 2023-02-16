import React from 'react';
import { motion } from 'framer-motion';

import './style.scss';

export const AnimatedButton = (props) => {
	const { children, color, fullWidth, className, onClick } = props;

	return (
		<motion.button
			className={
				fullWidth 
					? `btn btn-full-width btn-${color} ${className}` 
					: `btn btn-${color} ${className}`
			}
			onClick={onClick}
			whileHover={{ scale: 1.03 }}
			transition={{ type: 'spring', stiffness: 400, damping: 10 }}
		>
			{children}
		</motion.button>
	);
};
