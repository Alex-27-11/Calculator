import React from 'react';

const Description: React.FC = () => {
	return (
		<div>
			Для запуска калькулятора необходимо перетащить с помощью мыши необходимые компоненты на правую панель и нажать Runtime.<br />
			Для удаления компонента из правой панели необхдимо сделать даблКлик по компоненту, при этом должна быть активна кнопка Constructor.<br />
			Компоненты в правой панели, кроме экрана, можно менять местами, при активной кнопке Constructor.<br />
		</div>
	);
};

export default Description;