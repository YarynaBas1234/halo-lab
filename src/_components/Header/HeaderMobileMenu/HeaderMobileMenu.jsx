import React from 'react';
import { motion, useCycle } from 'framer-motion';

import { MenuToggleIcon, LogoIcon } from 'assets/icons';
import { AnimatedButton } from '_components/common';

import { tabs } from '../Header';

import './style.scss';

const MobileNavbar = (props) => {
	const { onClick } = props;

	const variants = {
		open: {
			y: 0,
			opacity: 1,
			display: 'flex',
			justifyContent: 'space-between',
			transform: 'none',
			flexDirection: 'column',
			transition: {
				y: { stiffness: 1000, velocity: -100 },
			},
		},
		closed: {
			y: 50,
			opacity: 0,
			display: 'none',
			transition: {
				y: { stiffness: 1000 },
			},
		},
	};

	return (
		<motion.div variants={variants} className='nav-items'>
			{tabs.map((tab, index) => {
				return (
					<div key={index}>
						<motion.a
							href={tab.href}
							onClick={onClick}
							variants={variants}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}>
							{tab.title}
						</motion.a>
					</div>
				);
			})}
			<AnimatedButton color='secondary' fullWidth>
				Apply
			</AnimatedButton>

			{/* <motion.div variants={variants} className='nav-items'>
				<div>
					{tabs.map((tab) => {
						return <>
							<motion.a
								href={tab.href}
								onClick={onClick}
								variants={variants}
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}>
								{tab.title}
							</motion.a>
						</>
})}
				</div>
				<AnimatedButton color='secondary' fullWidth>
					Apply
				</AnimatedButton>
			</motion.div> */}
		</motion.div>
	);
};

const HeaderMobileMenu = () => {
	const [isOpen, toggleOpen] = useCycle(false, true);

	const sidebar = {
		open: (width = 1000) => ({
			clipPath: `circle(${width * 2 + 200}px)`,
		}),
		closed: {
			clipPath: 'circle(0 at 40px 40px)',
		},
	};

	return (
		<header className={`header-mobile ${isOpen ? 'show' : ''}`}>
			<div className='header-mobile-wrapper'>
				<motion.nav initial={false} animate={isOpen ? 'open' : 'closed'}>
					<div className='header-menu'>
						<LogoIcon className='header-logo' />
						<button onClick={() => toggleOpen()}>
							<MenuToggleIcon />
						</button>
					</div>
					<motion.div className='background' variants={sidebar}>
						<MobileNavbar onClick={toggleOpen} />
					</motion.div>
				</motion.nav>
			</div>
		</header>
	);
};

export default HeaderMobileMenu;
