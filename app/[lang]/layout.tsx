import type { Metadata } from 'next';
import { Geist_Mono } from 'next/font/google';
import '@/app/globals.css';

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Portafolio de Cristóbal Cortés | Desarrollador Web Full Stack',
	description:
		'Portafolio profesional de Cristóbal Cortés, desarrollador web especializado en construir aplicaciones modernas, escalables y eficientes.',
	keywords: [
		'Desarrollador Web',
		'Full Stack',
		'React',
		'Next.js',
		'Portafolio',
		'JavaScript',
		'TypeScript',
	],
	authors: [{ name: 'Cristóbal Cortés' }],
	openGraph: {
		title: 'Portafolio de Cristóbal Cortés | Desarrollador Web Full Stack',
		description:
			'Portafolio profesional de Cristóbal Cortés, desarrollador web especializado en construir aplicaciones modernas, escalables y eficientes.',
		type: 'website',
		locale: 'es_ES',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Cristóbal Cortés | Desarrollador Web Full Stack',
		description:
			'Portafolio profesional de Cristóbal Cortés, desarrollador web especializado en construir aplicaciones modernas, escalables y eficientes.',
	},
};

export async function generateStaticParams() {
	return [{ lang: 'en' }, { lang: 'es' }];
}

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ lang: string }>;
}>) {
	const { lang } = await params;
	return (
		<html lang={lang} className={`${geistMono.variable} h-full antialiased font-sans`}>
			<body className="min-h-full flex flex-col">{children}</body>
		</html>
	);
}
