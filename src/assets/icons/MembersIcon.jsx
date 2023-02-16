import React from 'react';

export const MembersIcon = (props) => {
	const { className } = props;

	return (
        <svg
            width='272'
            height='320'
            viewBox='0 0 272 320'
            fill='none'
            className={className}
        >
            <mask maskUnits='userSpaceOnUse' x='0' y='0' width='272' height='320'>
                <path
                    d='M0 50C0 22.3858 22.3858 0 50 0H222C249.614 0 272 22.3858 272 50V270C272 297.614 249.614 320 222 320H50C22.3858 320 0 297.614 0 270V50Z'
                    fill='#C4C4C4'
                />
            </mask>
            <g>
                <rect x='-19' y='-23' width='304' height='360' fill='#FAA881' />
                <path
                    d='M12.8504 230.393C-74.7507 252.02 -162.074 203.026 -182.328 120.985C-202.582 38.9433 -148.094 -45.0607 -60.4925 -66.6875L256.718 -145C297.566 20.4601 188.053 187.139 12.8504 230.393Z'
                    fill='#F26C74'
                />
                <path
                    d='M298.197 289.365C349.266 363.753 334.134 462.732 264.467 510.56C194.8 558.388 96.9947 536.944 45.9254 462.556L-139 193.191C1.5034 96.7315 196.059 140.589 298.197 289.365Z'
                    fill='#7675FD'
                />
            </g>
        </svg>
    );
};
