import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { CurrentItSlice } from '../../store/reducers/CurrentItSlice';
import { dbClickHandl, dropHandl } from '../../utils/functions';
import './EqualsBtn.scss';

const EqualsBtn: React.FC = () => {
	const { addCurIt } = CurrentItSlice.actions;
	const dispatch = useAppDispatch();
	const { it } = useAppSelector(state => state.currentItReducer);
	const { mode } = useAppSelector(state => state.currentItReducer);

	const dragStartHandl = (e: React.DragEvent<HTMLDivElement>) => {
		dispatch(addCurIt('.equals-btn'));
	}

	const dragOverHandl = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
	}

	const dragLeaveHandl = () => { }

	return (
		<div className='eq-body'>
			<div
				onDragOver={(e) => dragOverHandl(e)}
				onDragLeave={() => dragLeaveHandl()}
				onDrop={(e) => dropHandl(e, it, `.equals-btn`)}
				onDragStart={(e) => dragStartHandl(e)}
				draggable={true}
				onDoubleClick={() => dbClickHandl('.equals-btn', mode, '.eq-body')}
				className='equals-btn'
			>
				<div className="eq-btn">=</div>
			</div>
		</div>

	);
};

export default EqualsBtn;