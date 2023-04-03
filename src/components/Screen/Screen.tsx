import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { CurrentItSlice } from '../../store/reducers/CurrentItSlice';
import { dbClickHandl } from '../../utils/functions';
import './Screen.scss';

const Screen: React.FC = () => {
	const { addCurIt } = CurrentItSlice.actions;
	const dispatch = useAppDispatch()
	const { mode } = useAppSelector(state => state.currentItReducer);

	const dragStartHandl = () => {
		dispatch(addCurIt('.calc-screen'));
	}

	return (
		<div className='calc-screen-body'>
			<div
				onDragStart={() => dragStartHandl()}
				draggable={true}
				onDoubleClick={() => dbClickHandl('.calc-screen', mode, '.calc-screen-body')}
				className="calc-screen"
			>
				<p>0</p>
			</div>

		</div>
	);
};

export default Screen;