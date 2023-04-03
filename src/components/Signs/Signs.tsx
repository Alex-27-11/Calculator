import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { CurrentItSlice } from '../../store/reducers/CurrentItSlice';
import { dbClickHandl, dropHandl } from '../../utils/functions';
import ComputingBtn from '../UI/ComputingBtn/ComputingBtn';
import './Signs.scss'

const Signs: React.FC = () => {
	const { addCurIt } = CurrentItSlice.actions;
	const dispatch = useAppDispatch();
	const { it } = useAppSelector(state => state.currentItReducer);
	const { mode } = useAppSelector(state => state.currentItReducer);

	const dragStartHandl = (e: React.DragEvent<HTMLDivElement>) => {
		dispatch(addCurIt('.computing-signs'));
	}

	const dragOverHandl = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
	}

	const dragLeaveHandl = () => { }

	return (
		<div className="computing-signs-body">
			<div
				onDragOver={(e) => dragOverHandl(e)}
				onDragLeave={() => dragLeaveHandl()}
				onDrop={(e) => dropHandl(e, it, `.computing-signs`)}
				onDragStart={(e) => dragStartHandl(e)}
				draggable={true}
				onDoubleClick={() => dbClickHandl('.computing-signs', mode, '.computing-signs-body')}
				className='computing-signs'
			>
				<ComputingBtn>/</ComputingBtn>
				<ComputingBtn>x</ComputingBtn>
				<ComputingBtn>-</ComputingBtn>
				<ComputingBtn>+</ComputingBtn>
			</div>
		</div>

	);
};

export default Signs;