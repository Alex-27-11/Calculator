import React from 'react';
import './buttonArrow.scss'

const ButtonArrow: React.FC = ({ ...props }) => {

	return (
		<div {...props} className='button-arrow active-arrow' >
			<div className='arrow-img'></div>
			<span>Constructor</span>
		</div>
	);
};

export default ButtonArrow;