import React from 'react';
import BodyConst from './BodyConst/BodyConst';
import HeaderConst from './HeaderConst/headerConst';


const MainP: React.FC = () => {
	return (
		<div className='wrapper'>
			<div className='container'>
				<HeaderConst />
				<BodyConst />
			</div>
		</div>
	);
};

export default MainP;