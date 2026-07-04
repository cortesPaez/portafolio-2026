'use client';

import { IconWrapper } from '@/app/components/ui/icons';
import { FigmaGrid } from '@/app/components/FigmaGrid';
import { useAppStore } from '@/app/store/useAppStore';

const Navbar = () => {
	const dictionary = useAppStore((state) => state.dictionary);
	if (!dictionary) return null;

	return (
		<nav className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-white/10">
			<FigmaGrid className="items-center py-[24px]">
				{/* Mobile: 2 columnas, Desktop: 3 columnas */}
				<strong className="text-[24px] col-span-2 lg:col-span-3">@ccortesdev</strong>

				{/* Oculto en mobile, Desktop: 6 columnas */}
				<div className="hidden lg:flex gap-[24px] col-span-6 justify-center">
					<span className="text-[24px] cursor-pointer">{dictionary.navbar.home}</span>
					<span className="text-[24px] cursor-pointer">{dictionary.navbar.about}</span>
					<span className="text-[24px] cursor-pointer">{dictionary.navbar.experience}</span>
					<span className="text-[24px] cursor-pointer">{dictionary.navbar.services}</span>
				</div>

				{/* Mobile: 2 columnas, Desktop: 3 columnas */}
				<div className="col-span-2 lg:col-span-3 flex justify-end">
					<button className="flex flex-row gap-[10px] items-center cursor-pointer">
						<strong className="hidden md:inline text-[24px]">{dictionary.navbar.cta}</strong>
						<IconWrapper name="arrow-main-button" className="bg-white p-[12px] rounded-full" />
					</button>
				</div>
			</FigmaGrid>
		</nav>
	);
};

export default Navbar;
