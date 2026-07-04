import Hero from '@/app/sections/Hero';
import Services from '@/app/sections/Services';
import Footer from '@/app/sections/Footer';
import Navbar from '@/app/components/navbar';
import { getDictionary } from '@/app/get-dictionary';
import type { Locale } from '@/i18n-config';
import Preloader from '../sections/Preloader';
import MainContentWrapper from '../sections/MainContentWrapper';
import About from '../sections/About';
import StoreInitializer from '../store/StoreInitializer';

export default async function Home({
	params,
}: Readonly<{
	params: Promise<{ lang: Locale }>;
}>) {
	const { lang } = await params;
	const dictionary = await getDictionary(lang);

	return (
		<main className="flex min-h-screen flex-col">
			<StoreInitializer dictionary={dictionary} />
			<Preloader />
			<MainContentWrapper>
				<Navbar />
				<Hero />
				<Services />
				<About />
				<Footer />
			</MainContentWrapper>
		</main>
	);
}
