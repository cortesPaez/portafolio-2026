import React from 'react';

type ResponsiveNumber = number | { base?: number; md?: number; lg?: number };

interface FigmaGridProps {
	children: React.ReactNode;
	className?: string;
	columns?: ResponsiveNumber; // Cantidad de columnas (ej: 4, 8, 12)
	gutter?: ResponsiveNumber; // Gap entre columnas en px (ej: 16, 24)
	margin?: ResponsiveNumber; // Margen lateral en px (ej: 16, 32)
}

// Mapeos estáticos para que Tailwind escanee y compile estas clases correctamente
const COL_CLASSES: Record<number, string> = {
	1: 'grid-cols-1',
	2: 'grid-cols-2',
	3: 'grid-cols-3',
	4: 'grid-cols-4',
	5: 'grid-cols-5',
	6: 'grid-cols-6',
	7: 'grid-cols-7',
	8: 'grid-cols-8',
	9: 'grid-cols-9',
	10: 'grid-cols-10',
	11: 'grid-cols-11',
	12: 'grid-cols-12',
};
const COL_MD_CLASSES: Record<number, string> = {
	1: 'md:grid-cols-1',
	2: 'md:grid-cols-2',
	3: 'md:grid-cols-3',
	4: 'md:grid-cols-4',
	5: 'md:grid-cols-5',
	6: 'md:grid-cols-6',
	7: 'md:grid-cols-7',
	8: 'md:grid-cols-8',
	9: 'md:grid-cols-9',
	10: 'md:grid-cols-10',
	11: 'md:grid-cols-11',
	12: 'md:grid-cols-12',
};
const COL_LG_CLASSES: Record<number, string> = {
	1: 'lg:grid-cols-1',
	2: 'lg:grid-cols-2',
	3: 'lg:grid-cols-3',
	4: 'lg:grid-cols-4',
	5: 'lg:grid-cols-5',
	6: 'lg:grid-cols-6',
	7: 'lg:grid-cols-7',
	8: 'lg:grid-cols-8',
	9: 'lg:grid-cols-9',
	10: 'lg:grid-cols-10',
	11: 'lg:grid-cols-11',
	12: 'lg:grid-cols-12',
};

/**
 * Figma Grid System (Responsive & Custom)
 */
export function FigmaGrid({
	children,
	className = '',
	columns = { base: 4, lg: 12 },
	gutter = 24, // 24px en mobile y desktop
	margin = { base: 16, lg: 32 },
}: FigmaGridProps) {
	// Helper para extraer los valores por breakpoint
	const getVal = (val: ResponsiveNumber, breakpoint: 'base' | 'md' | 'lg', fallback: number) => {
		if (typeof val === 'number') return val;
		if (breakpoint === 'base') return val.base ?? fallback;
		if (breakpoint === 'md') return val.md ?? val.base ?? fallback;
		if (breakpoint === 'lg') return val.lg ?? val.md ?? val.base ?? fallback;
		return fallback;
	};

	const colsBase = getVal(columns, 'base', 12);
	const colsMd = getVal(columns, 'md', colsBase);
	const colsLg = getVal(columns, 'lg', colsMd);

	const gapBase = getVal(gutter, 'base', 24);
	const gapMd = getVal(gutter, 'md', gapBase);
	const gapLg = getVal(gutter, 'lg', gapMd);

	const marginBase = getVal(margin, 'base', 32);
	const marginMd = getVal(margin, 'md', marginBase);
	const marginLg = getVal(margin, 'lg', marginMd);

	// Pasamos los pixeles exactos usando CSS variables para que Tailwind los procese en sus clases de utilidades arbitrarias
	const style = {
		'--fg-gap': `${gapBase}px`,
		'--fg-gap-md': `${gapMd}px`,
		'--fg-gap-lg': `${gapLg}px`,

		'--fg-margin': `${marginBase}px`,
		'--fg-margin-md': `${marginMd}px`,
		'--fg-margin-lg': `${marginLg}px`,
	} as React.CSSProperties;

	const classes = [
		'w-full grid',
		COL_CLASSES[colsBase],
		COL_MD_CLASSES[colsMd],
		COL_LG_CLASSES[colsLg],
		'gap-[var(--fg-gap)] md:gap-[var(--fg-gap-md)] lg:gap-[var(--fg-gap-lg)]',
		'px-[var(--fg-margin)] md:px-[var(--fg-margin-md)] lg:px-[var(--fg-margin-lg)]',
		className,
	]
		.filter(Boolean)
		.join(' ');

	return (
		<div className={classes} style={style}>
			{children}
		</div>
	);
}
