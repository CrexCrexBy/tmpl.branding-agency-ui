type BemOptions = {
	block: string; // Базовый класс
	element?: string; // Элемент (опционально)
	modifier?: string; // Модификатор (опционально)
	styles: { [key: string]: string }; // Стили из CSS-модуля
};

/**
 * Формирует CSS-классы по БЭМ с учётом CSS-модулей
 * @param options - Объект с параметрами: block, element, modifier, styles
 * @returns Строка с CSS-классами
 */
export const bemClass = ({ block, element, modifier, styles }: BemOptions): string => {
	const baseClass = element ? `${block}__${element}` : block;
	const modifierClass = modifier ? `${baseClass}--${modifier}` : '';

	// Конвертируем имена классов в CSS-модули
	const classes = [styles[baseClass], styles[modifierClass]].filter(Boolean);

	// Объединяем классы в строку
	return classes.join(' ');
};
