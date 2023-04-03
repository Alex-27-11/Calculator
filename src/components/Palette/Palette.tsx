import React, { useEffect } from 'react';
import { useAppSelector } from '../../hooks/redux';
import EqualsBtn from '../EqualsBtn/EqualsBtn';
import NumberBtns from '../NumberBtns/NumberBtns';
import Screen from '../Screen/Screen';
import Signs from '../Signs/Signs';
import './Palette.scss';

const Palette: React.FC = () => {
	const { mode } = useAppSelector(state => state.currentItReducer);

	let out: HTMLElement;
	React.useEffect(() => {
		out = document.querySelector('.calc-screen p') as HTMLElement;
	});

	let a = '';
	let b = '';
	let sign = '';
	let finish = false;

	const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ','];
	const action = ['+', '-', '/', 'x'];

	const CalcHandl = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!mode) return;
		const canv = document.querySelector(`.canvas-body`) as HTMLElement;
		if (!canv.contains(out)) return;
		const el = e.target as HTMLElement;
		if (el.classList.contains('com-btn') || el.classList.contains('num-btn') || el.classList.contains('eq-btn')) {
			const nums = document.querySelector(`.number-btns`) as HTMLElement;
			const comp = document.querySelector(`.computing-signs`) as HTMLElement;
			const eqB = document.querySelector(`.equals-btn`) as HTMLElement;
			out.textContent = '';
			const key = el.textContent as string;

			if (digit.includes(key)) {
				if (!canv.contains(nums)) return;
				if (b === '' && sign === '') {
					a += key;
					console.log(a, b, sign);
					out.textContent = a;
				} else if (a !== '' && b !== '' && finish) {
					b = key;
					finish = false;
					out.textContent = b;
				} else {
					b += key;
					out.textContent = b;
				}
				console.log(a, b, sign);
				return;
			}

			if (action.includes(key)) {
				if (!canv.contains(comp)) return;
				sign = key;
				console.log(a, b, sign);
				out.textContent = sign;
				return;
			}


			if (key === '=') {
				if (!canv.contains(eqB)) return;
				if (b === '') b = a;
				switch (sign) {
					case '+':
						a = `${(+a) + (+b)}`;
						break;
					case '-':
						a = `${(+a) - (+b)}`;
						break;
					case 'x':
						a = `${(+a) * (+b)}`;
						break;
					case '/':
						if (b === '0') {
							out.textContent = 'Не определено';
							a = '';
							b = '';
							sign = '';
							return;
						}
						a = `${(+a) / (+b)}`;
						break;
				}
				finish = true;
				out.textContent = a;
				console.log(a, b, sign);
			}
		}
		return;
	}

	useEffect(() => {
		const palet = document.querySelector('.palette-body') as HTMLElement;
		mode ? palet.style.visibility = 'hidden' : palet.style.visibility = '';

		a = '';
		b = '';
		sign = '';
		finish = false;
		out.textContent = '0';
	}, [mode])

	return (
		<div onClick={(e) => CalcHandl(e)} className='palette-body'>
			<Screen />
			<Signs />
			<NumberBtns />
			<EqualsBtn />
		</div>
	);
};

export default Palette;