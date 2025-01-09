import style from './style.module.scss';
import { bemClass } from '@/utils/bemClass';

export const Card = ({ variant, children }: { variant?: string; children: React.ReactNode }) => {
	const cardClass = bemClass({
		block: 'card',
		modifier: variant,
		styles: style,
	});

	return (
		<section className={cardClass}>
			{children}
		</section>
	);
};

export default Card;
