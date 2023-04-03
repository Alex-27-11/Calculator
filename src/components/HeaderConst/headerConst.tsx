import React, { useEffect, useState } from 'react';
import cl from './headerConst.module.scss';
import ButtonEye from '../UI/buttonEye/buttonEye';
import ButtonArrow from '../UI/buttonArrow/buttonArrow';
import { CurrentItSlice } from '../../store/reducers/CurrentItSlice';
import { useAppDispatch } from '../../hooks/redux';

const HeaderConst: React.FC = () => {
	const [togle, setTogle] = useState(false);
	const { togleMode } = CurrentItSlice.actions;
	const dispatch = useAppDispatch();

	const onclickHandl = (e: React.MouseEvent<HTMLDivElement>) => {
		const eye = document.querySelector('.button-eye') as HTMLElement;
		const ar = document.querySelector('.button-arrow') as HTMLElement;
		eye.classList.toggle('active-eye');
		ar.classList.toggle('active-arrow');
		setTogle(!togle);
	}

	useEffect(() => {
		dispatch(togleMode(togle))
	}, [togle]);

	return (
		<div onClick={onclickHandl} className={cl.headerTogle}>
			<div className={cl.bodyTogle}>
				<ButtonEye /><ButtonArrow />
			</div>
		</div>
	);
};

export default HeaderConst;