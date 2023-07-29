import React from 'react';
import BodyConst from './BodyConst/BodyConst';
import Description from './Description/Description';
import HeaderConst from './HeaderConst/headerConst';


const MainP: React.FC = () => {
	return (
		<div className='wrapper'>
			<div className='container'>
				<HeaderConst />
				<BodyConst />
				<Description />
			</div>
		</div>
	);
};

export default MainP;