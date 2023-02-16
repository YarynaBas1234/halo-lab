import React from 'react';

import { LogoIcon } from 'assets/icons';
import { AnimatedButton } from '_components/common';

import { tabs } from '../Header';

import './style.scss';

const Navbar = () => {
	const [activeTab, setActiveTab] = React.useState(0);

	return (
		<nav className='navbar'>
			{tabs.map((tab, index) => {
				return (
					<div className='navbar-item' key={index}>
						<a
							href={tab.href}
							className={`navbar-link ${activeTab === index ? 'active-tab' : ''} `}
							onClick={() => setActiveTab(index)}>
							{tab.title}
						</a>
					</div>
				);
			})}
		</nav>
	);
};

const HeaderMenu = () => {

	return (
		<header className='header'>
			<div className='header-wrapper'>
				<div className='header-menu'>
					<LogoIcon className='header-logo' />
					<Navbar />
					<AnimatedButton color='secondary'>Apply</AnimatedButton>
				</div>
			</div>
		</header>
	);
};

export default HeaderMenu;
