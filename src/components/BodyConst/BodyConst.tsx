import React from 'react';
import Canvas from '../Canvas/Canvas';
import Palette from '../Palette/Palette';
import cl from './BodyConst.module.scss'

const BodyConst: React.FC = () => {
	return (
		<div className={cl.body}>
			<Palette /> <Canvas />
		</div>
	);
};

export default BodyConst;