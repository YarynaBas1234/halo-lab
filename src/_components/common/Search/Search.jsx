import React from 'react';

import { LocationIcon } from 'assets/icons';

import { AnimatedButton } from '../Button';

import './style.scss';

export const Search = (props) => {
    const { className } = props

	return (
        <form className={`search-wrapper ${className}`}>
            <LocationIcon className='location-icon'/>
            <input type='search' className='input-search' placeholder='Find the place to help'/>
            <AnimatedButton color='primary' className='search-btn'>search</AnimatedButton>
        </form>
	);
}
