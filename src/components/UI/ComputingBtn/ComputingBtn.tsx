import React from 'react';
import './ComputingBtn.scss'

type Props = {
	children: string;
}

const ComputingBtn: React.FC<Props> = ({ children }) => {
	return (
		<div className='com-btn'>
			{children}
		</div>
	);
};

export default ComputingBtn;