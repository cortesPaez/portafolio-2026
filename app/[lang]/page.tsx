import Hero from '@/app/sections/hero/page';
import { getDictionary } from '@/app/get-dictionary';
import type { Locale } from '@/i18n-config';

export default async function Home({
	params,
}: Readonly<{
	params: Promise<{ lang: Locale }>;
}>) {
	const { lang } = await params;
	const dictionary = await getDictionary(lang);

	return (
		<main>
			<Hero dictionary={dictionary} />
		</main>
	);
}
