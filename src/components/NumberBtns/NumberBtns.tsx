import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { CurrentItSlice } from '../../store/reducers/CurrentItSlice';
import { dbClickHandl, dropHandl } from '../../utils/functions';
import NumBtn from '../UI/NumBtn/NumBtn';
import './NumberBtns.scss'

const NumberBtns: React.FC = () => {
	const { addCurIt } = CurrentItSlice.actions;
	const dispatch = useAppDispatch();
	const { it } = useAppSelector(state => state.currentItReducer);
	const { mode } = useAppSelector(state => state.currentItReducer);

	const dragStartHandl = (e: React.DragEvent<HTMLDivElement>) => {
		dispatch(addCurIt('.number-btns'));
	}

	const dragOverHandl = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
	}

	const dragLeaveHandl = () => { }

	return (
		<div className='number-btns-body'>
			<div
				onDragOver={(e) => dragOverHandl(e)}
				onDragLeave={() => dragLeaveHandl()}
				onDrop={(e) => dropHandl(e, it, `.number-btns`)}
				onDragStart={(e) => dragStartHandl(e)}
				draggable={true}
				onDoubleClick={() => dbClickHandl('.number-btns', mode, '.number-btns-body')}
				className='number-btns'
			>
				<NumBtn>7</NumBtn>
				<NumBtn>8</NumBtn>
				<NumBtn>9</NumBtn>
				<NumBtn>4</NumBtn>
				<NumBtn>5</NumBtn>
				<NumBtn>6</NumBtn>
				<NumBtn>1</NumBtn>
				<NumBtn>2</NumBtn>
				<NumBtn>3</NumBtn>
				<NumBtn zero='0'>0</NumBtn>
				<NumBtn>,</NumBtn>
			</div>
		</div>
	);
};

export default NumberBtns;