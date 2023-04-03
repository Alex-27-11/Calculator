import React from 'react';
import './buttonEye.scss'

const ButtonEye: React.FC = ({ ...props }) => {
	return (
		<div {...props} className='button-eye'>
			<div className='eye-img'></div>
			<span>Runtime</span>
		</div>
	);
};

export default ButtonEye;