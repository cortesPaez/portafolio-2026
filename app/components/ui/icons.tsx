import { JSX } from 'react';

// Tipado para los nombres de iconos disponibles
export type IconName = 'arrow-main-button';

type IconProps = {
	name: IconName;
	className?: string;
};

// Mapa de iconos
const icons: Record<IconName, JSX.Element> = {
	'arrow-main-button': (
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
			<g clipPath="url(#clip0_637_32)">
				<path
					d="M18.4999 6.30316L2.61085 22.1922L0 19.5814L15.8891 3.69231H1.88459V0H22.1922V20.3077H18.4999V6.30316Z"
					fill="black"
				/>
			</g>
			<defs>
				<clipPath id="clip0_637_32">
					<rect width="24" height="24" fill="white" />
				</clipPath>
			</defs>
		</svg>
	),
};

export const IconWrapper = ({ name, className = '' }: IconProps) => (
	<div className={`flex items-center justify-center ${className}`}>{icons[name]}</div>
);
