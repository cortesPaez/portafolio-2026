import Hero from '@/app/sections/Hero';
import Experience from '@/app/sections/Experience';
import Services from '@/app/sections/Services';
import Footer from '@/app/sections/Footer';
import { getDictionary } from '@/app/get-dictionary';
import type { Locale } from '@/i18n-config';
import Preloader from '../sections/Preloader';
import MainContentWrapper from '../sections/MainContentWrapper';

export default async function Home({
	params,
}: Readonly<{
	params: Promise<{ lang: Locale }>;
}>) {
	const { lang } = await params;
	const dictionary = await getDictionary(lang);

	return (
		<main className="flex min-h-screen flex-col">
			<Preloader />
			<MainContentWrapper>
				<Hero dictionary={dictionary} />
				<Experience dictionary={dictionary} />
				<Services dictionary={dictionary} />
				<Footer dictionary={dictionary} />
			</MainContentWrapper>
		</main>
	);
}
