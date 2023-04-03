import React from 'react';
import './NumBtn.scss';

type Props = {
	children: string;
	zero?: string;
}

const NumBtn: React.FC<Props> = ({ children, zero }) => {
	return (
		<div className={zero ? 'num-btn zero' : 'num-btn'}>
			{children}
		</div>
	);
};

export default NumBtn;