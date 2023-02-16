import React from 'react';
import HeaderMenu from './HeaderMenu';

import HeaderMobileMenu from './HeaderMobileMenu';

export const tabs = [
	{
		index: 0,
		title: 'Home',
		href: '#home',
	},
	{
		index: 1,
		title: 'Our mission',
		href: '#mission',
	},
	{
		index: 2,
		title: 'Places',
		href: '#places',
	},
	{
		index: 3,
		title: 'Team',
		href: '#team',
	},
];

const Header = () => {
	const isMobile = window.innerWidth <= 1080;

	return isMobile ? <HeaderMobileMenu /> : <HeaderMenu />;
};

export default Header;
