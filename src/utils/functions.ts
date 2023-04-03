import React from 'react';

export const dbClickHandl = (itCl: string, mode: boolean, parent: string) => {
	if (mode) return;
	const item = document.querySelector(itCl) as HTMLElement;
	const par = document.querySelector(parent) as HTMLElement;
	par.append(item);
	item.style.boxShadow = '';
	item.setAttribute('draggable', 'true')
}

export const dropHandl = (e: React.DragEvent<HTMLDivElement>, it: string, itEnd: string) => {
	e.preventDefault();
	const itemDrag = document.querySelector(`${it}`) as HTMLElement;
	const item = document.querySelector(itEnd) as HTMLElement;
	const comSt = getComputedStyle(itemDrag);
	const itemDragOr = comSt.order;
	const itemOr = item.style.order;
	item.style.order = itemDragOr;
	itemDrag.style.order = itemOr;
	item.style.borderTop = '';
	item.style.borderBottom = '';
}