import { CloseIcon, OpenIcon } from 'assets/icons';
import React from 'react';
import { AnimatedButton } from '_components/common';

import './style.scss';

const questions = [
	{
		title: 'What can I do to protect our planet?',
		text:
			'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources',
	},
	{
		title: 'How to save nature ecology?',
		text:
			'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources',
	},
	{
		title: 'What is nature conservation?',
		text:
			'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources',
	},
];

const AccordionBlock = (props) => {
	const { title, text, index } = props;
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<div key={`${title} ${index}`}>
			<div className='aside-right-row'>
				<h3>{title}</h3>
				{isOpen ? (
					<div onClick={() => setIsOpen(!isOpen)} className='accordion-icon'>
						<CloseIcon />
					</div>
				) : (
					<div onClick={() => setIsOpen(!isOpen)} className='accordion-icon'>
						<OpenIcon />
					</div>
				)}
			</div>
			<p
				className={
					isOpen
						? 'aside-right-text aside-right-text-show'
						: 'aside-right-text aside-right-text-hide'
				}>
				{text}
			</p>
		</div>
	);
};

const ReadyStarted = () => {
	return (
		<section className='wrapper'>
			<div className='ready-started-wrapper'>
				<div className='aside-left'>
					<h2>Ready to Get started?</h2>
					<p className='aside-left-text'>
						When pattern is mentioned in interior design, it is easy to asso- ciate it with a
						geometric patterned wallpaper or colourful prints on interior fabrics.
					</p>
					<AnimatedButton color='primary' className='button-contact-us'>
						Contact us
					</AnimatedButton>
				</div>
				<div>
					{questions.map((article, index) => {
						return (
							<AccordionBlock title={article.title} text={article.text} index={index} key={index} />
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default ReadyStarted;
