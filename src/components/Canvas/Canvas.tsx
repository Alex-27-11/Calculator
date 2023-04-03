import React, { useEffect } from 'react';
import './Canvas.scss'
import mo from '../../assets/groupM.png'
import { useAppSelector } from '../../hooks/redux';

const Canvas: React.FC = () => {

	const { mode } = useAppSelector(state => state.currentItReducer);
	const { it } = useAppSelector(state => state.currentItReducer);

	let canvas: HTMLElement;
	useEffect(() => {
		canvas = document.querySelector(`.canvas-body`) as HTMLElement;
	})

	useEffect(() => {
		if (!mode) {
			let child: Element | null;
			for (child of canvas.children) {
				child?.setAttribute('draggable', 'true');
			}
		} else {
			let child: Element | null;
			for (child of canvas.children) {
				child?.setAttribute('draggable', 'false');
			}
		}
	}, [mode])

	const itDragOver = (e: React.DragEvent<HTMLDivElement>, item: HTMLElement) => {
		e.preventDefault();
		if (!canvas.contains(item)) return;
		item.style.borderTop = '1px solid blue';
		item.style.borderBottom = '1px solid blue';
	}
	const itDragLeave = (e: React.DragEvent<HTMLDivElement>, item: HTMLElement) => {
		item.style.borderTop = '';
		item.style.borderBottom = '';
	}

	const dropHandl = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		const item = document.querySelector(`${it}`) as HTMLElement;
		if (item) {
			const inst = document.querySelector(`.inst`) as HTMLElement;
			inst.style.display = 'none';
			canvas.append(item);
			canvas.style.backgroundColor = '';
			canvas.style.border = 'none';
			item.style.boxShadow = 'none';
			const comSt = getComputedStyle(item);
			item.style.order = comSt.order;
			if (it === '.calc-screen') {
				item.setAttribute('draggable', 'false')
			} else {
				item.ondragover = () => itDragOver(e, item);
				item.ondragleave = () => itDragLeave(e, item);
			}
		}
	}

	const dragOverHandl = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		canvas.style.backgroundColor = '#F0F9FF';
	}

	const dragLeaveHandl = (e: React.DragEvent<HTMLDivElement>) => {
		canvas.style.backgroundColor = '';
	}

	return (
		<div
			onDragOver={(e) => dragOverHandl(e)}
			onDragLeave={(e) => dragLeaveHandl(e)}
			onDrop={(e) => dropHandl(e)}

			className='canvas-body'>
			<div className='inst'>
				<img src={mo} alt='mount' />
				<div className='text'>
					<p className='blue'>Перетащите сюда</p>
					<p>любой элемент<br /> из левой панели</p>
				</div>
			</div>
		</div>
	);
};

export default Canvas;